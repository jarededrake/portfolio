const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  auth: {
    user: "jarededrake@yahoo.com",
    pass: "qxyylsnrfusyqdcu",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const firstAndLastName = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  console.log(firstAndLastName);
  console.log(email);
  console.log(message);
  const mail = {
    from: firstAndLastName,
    to: "jarededrake@yahoo.com",
    email: email,
    html: `<p>Name: ${firstAndLastName}</p> <p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: "failed" });
    } else {
      res.json({ status: "sent" });
    }
  });
});
