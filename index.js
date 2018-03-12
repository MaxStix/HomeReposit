// Задание 3
'use strict';
const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nodeJsmax@gmail.com',
        pass: '********' 
      }
    });

    let mailOptions = {
        from: 'nodeJsmax@gmail.com', 
        to: 'maxNodeJs@i.ua', 
        subject: 'Hello ✔', 
        text: 'Hello world?', 
        html: '<b>hi hi hi</b>' 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});