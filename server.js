const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('./config/config').get(process.env.NODE_ENV);
const path = require('path');



app.use(bodyParser.json());
app.use(express.static('client/build'));
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
    let serviceType = req.body.serviceType;
    /*if (req.body !== {name, email, message}){
        res.status(404).json({
            msg: 'Cannot Send error'
        })
    }*/
    if (name === undefined || email===undefined || message=== undefined || serviceType === undefined){
        res.json({
            msg: 'Cannot Submit Empty Form Please enter appropriate details'
        })
    } else{
        let content = `<div style="min-height: 300px; padding: 20px; width: 80%; background: #eeeeee; border-radius: 30px;">
                   <div style="width: 80%">
                   <h1 style="font-size: 2em; color: #a24215 ;">An Order just came from  ${name}</h1>
                   <h1>Service type : ${serviceType}</h1>
                    <h2>The email of the client is ${email}</h2>
                    <h3>Here is the message:</h3>
                    <h2 style="font-family: 'ubuntu'; color: white; background: #555; padding: 15px;">${message}</h2>   
                    <h4 style="margin-top: 40px;">Reply the <a href="mailto:${email}?Subject=Customer%20message:%20">Client</a></h4> 
                    </div>
                 
                       </div>
   
`;

        let mail = {
            from: " Degraphe Tech <deba@yeme.com.ng>",
            to: 'debaosuidecl@gmail.com',  //Change to email address that you want to receive messages on
            subject: `New message on degaphetech.com.ng from ${name} (${serviceType})`,
            html: content
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: 'fail'
                })
            }
            else {
               /* let mailToClient = {
                    from: " Degraphe Tech <deba@yeme.com.ng>",
                    to: `${email}`,  //Change to email address that you want to receive messages on
                    subject: `Thank You For Contacting Us!!!`,
                    html: `<h1>Hi there ${name} We will get to you shortly</h1>`
                };*/
                /*transporter.sendMail(mailToClient, (err, data)=> {
                    if (err){
                        res.json({
                            msg: 'Your message was not sent to the client'
                        })
                    } else{*/
                console.log(data);
                        res.json({
                            msg: 'Your message has been sent'
                        });
               /*     }
                })*/


            }

        })
    }

});


if(process.env.NODE_ENV === 'production'){
    app.get('/*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, "client", 'build', "index.html"))
    })
}



const port = process.env.PORT || 3001;

app.listen(port);
