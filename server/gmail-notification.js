const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const gmailConfig = require("./data/gmail.json");
const inputConfig = require("./input.json");
const OAuth2 = google.auth.OAuth2;

class GmailNotification {
    constructor(response) {
    }
    send() {
        return new Promise((resolve, reject) => {
            const oauth2Client = new OAuth2(
                gmailConfig.client_id, // ClientID
                gmailConfig.client_secret, // Client Secret
                gmailConfig.redirect_url // Redirect URL
            );
            
            oauth2Client.setCredentials({
                refresh_token: gmailConfig.refresh_token
            });
            const access_token = oauth2Client.getAccessToken()

            const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: gmailConfig.email.from,
                    clientId: gmailConfig.client_id,
                    clientSecret: gmailConfig.client_secret,
                    refreshToken: gmailConfig.refresh_token,
                    accessToken: access_token
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            const mailOptions = {
                from: gmailConfig.email.from,
                to: inputConfig.email.to,
                subject: gmailConfig.email.subject,
                generateTextFromHTML: true,
                html: "<b>Vaccination appointment is available now, book your appointment now!</b>"
           };
           smtpTransport.sendMail(mailOptions, (error, response) => {
                // error ? console.log(error) : console.log(response);
                smtpTransport.close();
                if(!error) {
                    resolve(response);
                } else {
                    console.log("Unable to send mail now via gmail!");
                    reject(error);
                }
           });
        });
    }
}
module.exports = GmailNotification;