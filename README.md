# vaccine-grabber
Simple Utility tool to get details of vaccine jab schedule from the CoWin App. This application have a batch job which checks every 15mins on whether a schedule is available to you or not. 

## What does this do
Currently application runs in background polling the CoWin portal to see whether there is any availability for vaccine jab and if available it provides a desktop notification. Upon that notifation you can go ahead and book an appointment through CoWin portal.

## Why this app
I found it very difficult to keep track of the availability of vaccine by using the government provided CoWin portal.

## How to run

  ```shell
   npm start
   ```
### TODO

* Book a schedule through app