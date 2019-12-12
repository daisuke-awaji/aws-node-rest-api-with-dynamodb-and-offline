"use strict";

const awsXRay = require("aws-xray-sdk");
const AWS = awsXRay.captureAWS(require("aws-sdk"));

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
  };
}

const client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;
