const express = require("express");
const app = express();
const https = require('https');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
} );

app.post("/", function(req, res){
  const firstname = req.body.fName;
  const lastname = req.body.lName;
  const audienceEmail = req.body.email;
  console.log(audienceEmail, lastname, firstname);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});




// post data to Mailchimp server via API
// const data = {
//   members: [
//     {
//       email_address: audienceEmail,
//       status:"subscribed",
//       merge_fields: {
//         FNAME: firstname,
//         LNAME: lastname
//       }
//     }
//   ]
// };
//
// const jsonData = JSON.stringify(data);
//
// const url = "https://us1.api.mailchimp.com/3.0/lists/dc2e363167";
// const options = {
//   method: "POST",
//   auth: "truongson:7799a56266a4d4185b978436c27f2a71"
// };
// const request1 = https.request(url, options, function(response){
//   response.on("data", function(data){
//     console.log(JSON.parse(data));
//   })
// });
// request1.write(jsonData);
// request1.end();

// 7799a56266a4d4185b978436c27f2a71-us1
// dc2e363167
