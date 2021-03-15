const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "be516ac0aef805319df4bc6ab45220d6-us1",
  server: "us1",
});

module.exports = {
  create: async (req, res) => {
    let email = req.body.email;
    const response = await mailchimp.lists.addListMember("cfb63d742d", {
      email_address: email,
      status: "pending",
    });
    console.log(response);
  },
  // create: function here
};
