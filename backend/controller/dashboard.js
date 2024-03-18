const jwt = require('jsonwebtoken')
const otpGenerator = require("otp-generator");
const mailSender = require('../transport/mailsender');
const otpTemplate = require("../emailBody/verificationOtp");
const addeventModel = require('../model/AddEvent');
const addauthModel = require('../model/addAuthorities');

const addpersonModel = require('../model/person');
const otppptemplate = require("../emailBody/eventcode")
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


const alleventData = async (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.json({
      success: false,
      msg: "Fill All the Fields"
    })
  }

  const dbResponse = await addeventModel.find({
    email: email
  })
  // console.log(dbResponse);

  return res.json({
    success: true,
    data: dbResponse
  })
};

//Add person
const addperson = async (req, res) => {
  // const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;
  const { eventname,firstname,lastname,phonenumber,gender,personemail,designation,email } = req.body

  if (!eventname || !firstname || !lastname || !phonenumber || !gender || !personemail || !designation || !email) {
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

  let exist = await addpersonModel.findOne({ code: genratedOtp });
  while (exist) {
    genratedOtp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    let exist = await addpersonModel.findOne({ code: genratedOtp });
  }

  const addperson = await addpersonModel.create({
    code: genratedOtp,
    eventname,
    firstname,
    lastname,
    phonenumber,
    gender,
    personemail,
    designation,
    email
  })
  console.log(addperson);
  let res2 = await mailSender(req.body.personemail,"Verification Code for Eventeco", otppptemplate(genratedOtp));
  return res.json({
    success: true,
    msg: "Event Registred"
  })
};




const registerAuthorities = async (req, res) => {
  // const {accountType,  firstName, lastName, email, password, confirmPassword,  otp} = req.body;
  const { authId,authLocation,authPassword,authDesignation,email } = req.body

  if ( !authId || !authLocation || !authPassword || !authDesignation || !email) {
    return res.json({
      success: false,
      msg: "Fill All the Fields"
    })
  }

  // let genratedOtp = otpGenerator.generate(6, {
  //   upperCaseAlphabets: false,
  //   specialChars: false,
  //   lowerCaseAlphabets: false,
  // });


  const registerAuthorities = await addauthModel.create({
    id: authId,
    location: authLocation,
    password: authPassword,
    designation:authDesignation,
    useremail:email
  })
  console.log(registerAuthorities);

  return res.json({
    success: true,
    msg: "auth Registred"
  })
};

//checkticket
const checkticket = async (req, res) => {

  try {
    const { codedata} = req.body;                  //get data from req body

    if (!codedata) {                             // validate krlo means all inbox are filled or not;
      return res.json({
        success: false,
        message: 'Please Fill up All the Required Fields',
      });
    }

    const ticket = await addpersonModel.findOne({ code: codedata });          //user check exist or not
    if (ticket) {
      return res.json({
        success: true, 
        message: "ticket found",
      });
    }
    else{
      return res.json({
        success: false, 
        message: "ticket Not found",
      });
    }
  }
  catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: 'checkticket Failure, please try again',
    });
  }


};
module.exports = { registerEvent, alleventData,registerAuthorities,addperson ,checkticket};
