const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/ussd',(req, res) => {

    //read the variables sent via post from our api
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response ="";

    if (text == ''){
        //this is the first request
        response  = `CON Welcome to PROFTIKA VENTURES
        1. Get loan
        2. Pay loan
        3. Loan balance
        4. My phone number
        5. Terms and conditions`;
    }else if (text == "1"){
        response = `CON Your loan limit is 4000 \n Enter amount you want to borrow
        1. 4000
        2. 2000
        3. 1000
        4. 500
        5. exit`;
    }else if (text == "1*1"){
        // get mobile number from firestore database
        response = `CON Loan amount Kes 4000 \n Loan interest Kes 320 \n Processing fee Kes 90 \n Repayment period 15 to 30 days \n APPLY LOAN NOW
        1. Yes 
        2. No
        0. Back
        00. Home`;
    }else if (text == "1*1*1"){
        response = `END your loan is being processed`;
    }else if (text == "1*2"){

        response = `CON Loan amount Kes 2000 \n Loan interest Kes 160 \n Processing fee Kes 90 \n Repayment period 15 to 30 days \n APPLY NOW
        1. Yes
        2. No
        0. Back
        00. Home`;
    }else if (text == "1*2*1"){
        response = `END your loan is being processed`;

    }else if (text == "1*2*2"){
        response = `END Thank you for visiting PROFTIKA VENTURES`;

    }else if (text == "1*1*2"){
        response = `END Thank you for visiting PROFTIKA VENTURES`;
    }else if (text == "4"){
        response = `END Your phone number is ${phoneNumber}`;
    }else if (text == "1*3"){
        // get mobile number from firestore database
        response = `CON Loan amount Kes 1000 \n Loan interest Kes 100 \n Processing fee Kes 90 \n Repayment period 15 to 30 days \n APPLY LOAN NOW
        1. Yes 
        2. No
        0. Back
        00. Home`;
    }else if (text == "1*4"){
        response = `CON Loan amount Kes 500 \n Loan interest Kes 80 \n Processing fee Kes 90 \n Repayment period 15 to 30 days \n APPLY LOAN NOW
        1. Yes 
        2. No
        0. Back
        00. Home`;
    }else if (text == "1*3*1"){
        response = `END your loan is being processed`;

    }else if (text == "1*3*2"){
        response = `END Thank you for visiting PROFTIKA VENTURES`;
    }else if (text == "1*4*1"){
        response = `END your loan is being processed`;

    }else if (text == "1*4*2"){
        response = `END Thank you for visiting PROFTIKA VENTURES`;
    }

    res.set('content-Type: text/plain');
    res.send(response)
})

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
exports.ussdapp = functions.https.onRequest(app);
