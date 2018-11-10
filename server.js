const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('./config/config');


app.use(bodyParser.json());

// set tranporter
let transporter = nodemailer.createTransport({
    host: "weaver.whogohost.com",
    port: 26,
    secure: false,
    auth: {
        user: config.USER,
        pass: config.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages', success);
    }
});



app.post('/send', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    /*if (req.body !== {name, email, message}){
        res.sendStatus(404).json({
            msg: 'Cannot Send error'
        })
    }*/
    if (name === undefined || email===undefined || message=== undefined){
        res.json({
            msg: 'Cannot Submit Empty Form Please enter appropriate details'
        })
    } else{
        let content = `
    <h1 style="font-size: 2em; color: green;">An Order just came from  ${name} < ${email}>:</h1>
    <h3>Here is the message:</h3>
   <p style="font-family: 'ubuntu'">${message}</p> 
`;

        let mail = {
            from: " Degraphe Tech <deba@yeme.com.ng>",
            to: 'debaosuidecl@gmail.com',  //Change to email address that you want to receive messages on
            subject: `New message on degaphetech.com.ng from ${name}`,
            html: content
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: 'fail'
                })
            }
            else {
                let mailToClient = {
                    from: " Degraphe Tech <deba@yeme.com.ng>",
                    to: `${email}`,  //Change to email address that you want to receive messages on
                    subject: `Thank You For Contacting Us!!!`,
                    html: `<h1>Hi there ${name} We will get to you shortly</h1>`
                };
                transporter.sendMail(mailToClient, (err, data)=> {
                    if (err){
                        res.json({
                            msg: 'Your message was not sent to the client'
                        })
                    } else{
                        res.json({
                            msg: 'Your message sent to you and your client'
                        })
                        console.log(data);
                    }
                })


            }
            console.log(data);
        })
    }

})






app.use(express.static('./client/public'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/public', 'index.html'))
});


const port = process.env.PORT || 3001;

app.listen(port);
