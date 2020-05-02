const sgMail = require('@sendgrid/mail');





sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ronnizan01@gmail.com',
        subject: 'Thanks for joining in!',
        text: `hello ${name} and welcome!`

    })
}
const sendLeavingEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ronnizan01@gmail.com',
        subject: 'goodbye :(',
        text: `hello ${name}, we are sorry you are leaving.
        please let us know why you left`

    })
}

module.exports = {
    sendWelcomeEmail,
    sendLeavingEmail
}