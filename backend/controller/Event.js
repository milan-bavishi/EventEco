
const otpGenerator = require("otp-generator");
const eventModel = require('../model/AddEvent');
const mailSender = require('../transport/mailsender');
const otpTemplate = require("../emailBody/verificationOtp");
require("dotenv").config();

//signUp
const registerEvent = async (req, res) => {
  // const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;
  const { name } = req.body

  if (!name) {
    return res.json({
      success: false,
      msg: "Fill All the Fields"
    })
  }

  let genratedOtp = otpGenerator.generate(8, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const registredUser = await eventModel.create({
    name,
    id:genratedOtp
  })
  console.log(registredUser);

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
