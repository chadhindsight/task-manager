// Send emails
const sgMail = require('@sendgrid/mail')

// Method that lets send grid set your api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'chaddyjizzle@gmail.com',
    from: 'chaddyjizzle@gmail.com',
    subject: 'Just testing an app',
    text: 'I hope this one actually gets through!'
})