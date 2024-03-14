const jwt = require('jsonwebtoken')
const otpGenerator = require("otp-generator");
const mailSender = require('../transport/mailsender');
const otpTemplate = require("../emailBody/verificationOtp");
const addeventModel = require('../model/AddEvent');
require("dotenv").config();

//signUp
const registerEvent = async (req, res) => {
  // const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;
  const { organizerName, eventname, organizerEmail, date, time, categories, venue, description, email } = req.body

  if (!organizerName || !eventname || !organizerEmail || !date || !time || !categories || !email || !venue || !description) {
    return res.json({
      success: false,
      msg: "Fill All the Fields"
    })
  }

  let genratedOtp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });


  const registerEvent = await addeventModel.create({
    organizerName,
    eventName: eventname,
    organizerEmail,
    date,
    time,
    categories,
    venue,
    description,
    id: genratedOtp,
    email
  })
  console.log(registerEvent);

  return res.json({
    success: true,
    msg: "Event Registred"
  })
};


const yourEvent = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({
      success: false,
      msg: "Fill All the Fields"
    })
  }

  const dbResponse = await addeventModel.find({
    email: email
  })
  console.log(dbResponse);

  return res.json({
    success: true,
    data: dbResponse
  })
};
module.exports = { registerEvent, yourEvent };
