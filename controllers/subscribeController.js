const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
  server: "us1",
});

module.exports = {
  create: async (req, res) => {
    let email = req.body.email;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    const response = await mailchimp.lists.addListMember("cfb63d742d", {
      email_address: email,
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        ADDRESS: "",
        PHONE: "",
        BIRTHDAY: "",
      },
      status: "pending",
    });
    console.log(response);
  },
};
