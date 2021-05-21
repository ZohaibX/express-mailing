// go to sendgrid, to account 
// settings tab -> sender authentication -> verify a single sender -> create sender -> 
// from and reply section can be same -> after creating -> verify from email address 
// then on settings tab -> api keys -> create a key -- copy that 


const sgmail = require("@sendgrid/mail");
const { keys } = require('./key');

sgmail.setApiKey(keys.apiKey);

const msg = {
  to: ["zohaibbutt283@gmail.com" , "sp19-bcs-003@cuilahore.edu.pk"]  ,
  from: "zohaibbutt045@gmail.com" , // email name will be displayed as zohaibbutt045, so it should be a better email
  subject: "testing email service" ,
  text: "this is awesome !!!"
}

sgmail.send(msg , (err , info) => {
  if (err) console.log('Email Not Found');
  else console.log("Email Sent !!!");
})

// after all, just do -> node server.js -> on terminal and see magic

//! simply add express js and app.post request and do all 