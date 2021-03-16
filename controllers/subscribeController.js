const mailchimp = require("@mailchimp/mailchimp_marketing");
require("dotenv").config();

mailchimp.setConfig({
  apiKey: process.env.MAIL_CHIMP_APIKEY,
  server: process.env.MAIL_CHIMP_SERVER,
});

module.exports = {
  create: async (req, res) => {
    console.log("process: ", process.env.MAIL_CHIMP_APIKEY);
    let email = req.body.email;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    const response = await mailchimp.lists.addListMember(
      process.env.CHIMP_LIST,
      {
        email_address: email,
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          ADDRESS: "",
          PHONE: "",
          BIRTHDAY: "",
        },
        status: "pending",
      }
    );
    console.log(response);
  },
};
