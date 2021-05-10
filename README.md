# vaccine-grabber
Simple Utility tool to get details of vaccine jab schedule from the CoWin App. This application have a batch job which checks every 15mins on whether a schedule is available to you or not. 

## Pre-requisites
Before you can build the application, you must install and configure the following dependencies on your
machine:

* [Git](http://git-scm.com/) is being used for maintaining our codebase and version management.

* [Node.js v14.16.1 (LTS)](http://nodejs.org) is used as the development framework, and generate distributable files. Depending on your system, you can install Node either from source or as a pre-packaged bundle.

## What does this do
Currently application runs in background polling the CoWin portal to see whether there is any availability for vaccine jab and if available it provides a desktop notification. Upon that notifation you can go ahead and book an appointment through CoWin portal.

## Why this app
I found it very difficult to keep track of the availability of vaccine by using the government provided CoWin portal.

## How to use
The [input](./input.json) file contains the configurations that contains the search criteria's for your vaccination request. Currently there are two ways to search for appoitments - 1. District Wise 2. Pincode Wise. From all the properties in that file, only property that is relevant for enduser is the ``` activeSearchBy ``` property. You can run the appointment availability search by providing the value for that property - ("district", "pincode") based on your convenience. Once that is provided you can go ahead and run the application.

## How to run

  ```shell
   npm start
   ```
### TODO

* Book a schedule through app
