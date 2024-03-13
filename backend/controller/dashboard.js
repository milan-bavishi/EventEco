
const otpGenerator = require("otp-generator");
const mailSender = require('../transport/mailsender');
const otpTemplate = require("../emailBody/verificationOtp");
const addeventModel = require("../model/addEvent.js")
require("dotenv").config();

//signUp
const registerEvent = async (req, res) => {
  // const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;
  const { organizerName,eventname ,organizerEmail,date,time,categories,venue,description } = req.body

  if (!organizerName || !eventname || !organizerEmail || !date || !time || !categories || !venue || !description) {
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
    eventname ,
    organizerEmail,
    date,
    time,
    categories,
    venue,
    description,
    id:genratedOtp
  })
  console.log(registerEvent);

  return res.json({
    success: true,
    msg: "Event Registred"
  })
};

//sendOTP
const sendOTP = async (req, res) => {
  try {
    let genratedOtp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    let exist = await otpModel.findOne({ otp: genratedOtp });
    while (exist) {
      genratedOtp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      let exist = await otpModel.findOne({ otp: genratedOtp });
    }

    let response = await otpModel.create({
      otp: genratedOtp,
      email: req.body.email,
    });

    let res2 = await mailSender(req.body.email, "Verification Code for Eventeco", otpTemplate(genratedOtp));

    res.json({
      success: true,
      msg: "Something Went Wrong",
    });
  } catch {
    res.json({
      success: false,
      msg: "Something Went Wrong",
    });
  }
};

module.exports = { registerEvent };
