const { saveContactForm } = require("../queries/queris");

const myRoutes = (app) => {
  app.post("/contact_form", async (req, res) => {
    const { firstname, lastname, email, select, message } = req.body;

    console.log("req.body", req.body);
    try {
      const formInfo = { firstname, lastname, email, select, message };
      const save = await saveContactForm(formInfo);
      console.log('save', save)
      res.send({ save, message: "Form successfully submited" });
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = { myRoutes };
