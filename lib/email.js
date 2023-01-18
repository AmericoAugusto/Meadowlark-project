const nodemailer = require('nodemailer')
const htmlFormattedText = require('html-to-formatted-text')

module.exports = credentials => {
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        auth: {
            user: credentials.sendgrid.user,
            pass: credentials.sendgrid.password,
        },
    })
    const from = '"Meadowlark Travel" <info@meadowlarktravel.com'
    const errorRecipient = 'americoaugusto12@hotmail.com'
    return {
        send: (to, subject, html) =>
        mailTransport.sendMail({
            from,
            to,
            subject,
            html,
            text: htmlFormattedText(html),
        }),
    }
}