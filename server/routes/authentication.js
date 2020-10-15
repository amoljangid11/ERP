const User = require('../models/user'); // Import User Model Schema
const jwt = require('jsonwebtoken');
const config=require('../config/database');
const Site = require('../models/siteconfig');
const Business = require('../models/business');
const Servicereq = require('../models/servicereq');
const Organization = require('../models/organization');
const bcrypt= require('bcryptjs');
var passport= require('passport');
const Official = require('../models/createemployee');


const nodemailer = require('nodemailer');

module.exports = (router) => {
  /* ==============
     Register Route
  ============== */
  ////////////////////////////////Leave Approved By///////////////////////////////

  router.post('/exitinitiate', (req, resp, next) => {
  
    // console.log(req.body.username, "84------->")
  
    var email=req.body.email;
    // var name=req.body.name;
    // var username=req.body.username;
    var exittype=req.body.exittype;
    // var applied_on=req.body.applied_on;
    // var role=req.body.role;
    var mailFormat=req.body.mailFormat;
  
    User.initiateexit(req.body.email,req.body.exittype,req.body.mailFormat, (err, user) => {
      console.log(user, " 88")
  
      if(err) { throw err; }
      
       else {
  // console.log(username)
  nodemailer.createTestAccount((err, users) => {
  console.log(user)
  let transporter = nodemailer.createTransport({
  host: 'fortristha@gmail.com',
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
      user: 'fortristha@gmail.com', 
      pass: 'tristhaTGPL'  
  },
  tls:{
    rejectUnauthorized:false
  }
  });
  console.log(email)
  let mailOptions = {
  from: 'fortristha@gmail.com', 
  to: email, 
  subject: req.body.exittype+' Letter', 
  text: 'mytouch', 
  
  html:''+mailFormat
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error,"13444");
  }else{
           User.getUserByEmail(email, (err, res) => {
                  console.log(res, '182')
                  bcrypt.genSalt(10, (err, salt) => {
                      bcrypt.hash(res.password , salt, (err, hash) => {
                          if (err) throw err;
                          console.log(res, '187')
                     });
                  });
              })
          console.log('Message sent: %s', info.messageId);       
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          res.send({msg:"Exit Request has been sent to your mail address",value:true})
  }
  
  });
  });
                      return resp.json({
                          success: true,
                          msg: 'Exit Request has been sent to your mail address'
                      });
                  }
  })
  })
  


  router.post('/leaveapproved', (req, resp, next) => {
    console.log(req.body.email, "84")
    console.log(req.body.firstname, "84------->")

    var useremail=req.body.email;
    var userusername=req.body.username
     var userleavetype=req.body.leavetype;
     var userfromdate=req.body.from_date;
     var usertodate=req.body.to_date;
     var usernodays=req.body.no_days;
     var userappliedon=req.body.applied_on;
    var userutype=req.body.utype;
    var leavestatus=req.body.status;
    var leavecomment=req.body.comment;
  

    User.leaveapproved(req.body.email,req.body.username,req.body.leavetype,req.body.from_date,req.body.to_date,req.body.no_days,req.body.applied_on,req.body.utype,req.body.status,req.body.comment, (err, user) => {
      console.log(user, " 88")

      if(err) { throw err; }
      
       else {


console.log(useremail)
nodemailer.createTestAccount((err, users) => {
console.log(user)
let transporter = nodemailer.createTransport({
  host: 'fortristha@gmail.com',
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
      user: 'fortristha@gmail.com', 
      pass: 'tristhaTGPL'  
  },
  tls:{
    rejectUnauthorized:false
  }
});
console.log(useremail)
let mailOptions = {
  from: 'fortristha@gmail.com', 
  to: useremail, 
  subject: 'Leave Status', 
  text: 'mytouch', 
  // html: '<table border="1"><tr><td><b>Firstname </b></td><td>'+ leavefirst+'</td></tr><tr><td><b><pre class="tab"></pre>Lastname</b></td><td>'+leavelast+'</td></tr><tr><td><b><pre class="tab"></pre>No Of Days</b></td><td>'+leavedays+'</td></tr><tr><td><b><pre class="tab"></pre>From Date </b></td><td>'+leavefrom+'</td></tr><tr><td><b><pre class="tab"></pre>To Date</b></td><td>'+leaveto+'</td></tr><td><b><pre class="tab"></pre>Leave Reason</b></td><td>'+leavereason+'</td></tr></table>'
  html: '<h2>The below leave has been '+leavestatus+'</h5><table cellpadding="10" bgcolor="seashell"  width="400" height="auto" border="1"><tr><td align="center"><b>Username </b></td><td align="center">'+ userusername+'</td></tr><tr><td align="center"><b>Leave Type</b></td><td align="center">'+userleavetype+'</td></tr><tr><td align="center"><b>From_Date</b></td><td align="center">'+userfromdate+'</td></tr><tr><td align="center"><b>To_Date</b></td><td align="center">'+usertodate+'</td></tr><tr><td align="center"><b>No_Days</b></td><td align="center">'+usernodays+'</td></tr><tr><td align="center"><b>Applied On</b></td><td align="center">'+userappliedon+'</td></tr><tr><td align="center"><b>Status</b></td><td align="center">'+leavestatus+'</td></tr><tr><td align="center"><b>Comment</b></td><td align="center">'+leavecomment+'</td></tr></table>'
};

  transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error,"13444");
  }else{
           User.getUserByEmail(leaveemail, (err, res) => {
                  console.log(res, '182')
                  // bcrypt.genSalt(10, (err, salt) => {
                  //     bcrypt.hash(res.password , salt, (err, hash) => {
                  //         if (err) throw err;
                  //         // res.password = hash;
                  //         console.log(res, '187')
                  //         /*resp.send({
                  //             msg: "password successfully changed",
                  //             success: true
                  //         })*/
                  //     });
                  // });
              })
          console.log('Message sent: %s', info.messageId);       
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          res.send({msg:"Leave Request has been sent to your mail address",value:true})
  }

});
});
                      return resp.json({
                          success: true,
                          msg: 'Leave Request has been sent to your mail address'
                      });
                  }
  })
})


  //////////////////////////////////////leave/////////////////////////////////////

 
  router.post('/leaverequest', (req, resp, next) => {
    console.log(req.body.email, "84")
    console.log(req.body.email1, "84")

    console.log(req.body.firstname, "84------->")

    var leaveemail=req.body.email;
    var leaveemailRp=req.body.email1;

    var leavefirst=req.body.firstname
     var leavelast=req.body.lastname;
    var leavedays=req.body.no_days;
    var leavetype=req.body.leavetype;
    var leavefrom=req.body.from_date;
    var leaveto=req.body.to_date;
    var leavereason=req.body.reason;
    var leavelimit=req.body.leavelimit;
    var comments=req.body.comments;
    User.leaveapply(req.body.email,req.body.email1,req.body.firstname,req.body.lastname,req.body.no_days,req.body.leavetype,req.body.from_date,req.body.to_date,req.body.reason,req.body.leavelimit,req.body.comments, (err, user) => {
      console.log(user, " 88")

      if(err) { throw err; }
      
       else {


console.log(leavefirst)
console.log(leavereason)
console.log(leavefrom)
console.log(leaveto)
nodemailer.createTestAccount((err, users) => {
console.log(user)
let transporter = nodemailer.createTransport({
  host: 'fortristha@gmail.com',
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
      user: 'fortristha@gmail.com', 
      pass: 'tristhaTGPL'  
  },
  tls:{
    rejectUnauthorized:false
  }
});
console.log(leaveemail)
// if(EMPHR){
let mailOptions = {
  from: 'fortristha@gmail.com', 
  to: leaveemail, 
  subject: 'Leave Application Of ' +leavefirst +' ' +leavelast, 
  text: 'mytouch', 
  // html: '<table border="1"><tr><td><b>Firstname </b></td><td>'+ leavefirst+'</td></tr><tr><td><b><pre class="tab"></pre>Lastname</b></td><td>'+leavelast+'</td></tr><tr><td><b><pre class="tab"></pre>No Of Days</b></td><td>'+leavedays+'</td></tr><tr><td><b><pre class="tab"></pre>From Date </b></td><td>'+leavefrom+'</td></tr><tr><td><b><pre class="tab"></pre>To Date</b></td><td>'+leaveto+'</td></tr><td><b><pre class="tab"></pre>Leave Reason</b></td><td>'+leavereason+'</td></tr></table>'
  html: '<table cellpadding="10" bgcolor="seashell"  width="400" height="auto" border="1"><tr><td align="center"><b>Firstname </b></td><td align="center">'+ leavefirst+'</td></tr><tr><td align="center"><b>Lastname</b></td><td align="center">'+leavelast+'</td></tr><tr><td align="center"><b>No Of Days</b></td><td align="center">'+leavedays+'</td></tr><tr><td align="center"><b>Leave Type</b></td><td align="center">'+leavetype+'</td></tr><tr><td align="center"><b>From Date </b></td><td align="center">'+leavefrom+'</td></tr><tr><td align="center"><b>To Date</b></td><td align="center">'+leaveto+'</td></tr><td align="center"><b>Leave Reason</b></td><td align="center">'+leavereason+'</td></tr><tr><td align="center"><b>Comments</b></td><td align="center">'+comments+'</td></tr></table>'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error,"13444");
  }else{
           User.getUserByEmail(leaveemail, (err, res) => {
                  console.log(res, '182')
                  bcrypt.genSalt(10, (err, salt) => {
                      bcrypt.hash(res.password , salt, (err, hash) => {
                          if (err) throw err;
                          // res.password = hash;
                          console.log(res, '187')
                          /*resp.send({
                              msg: "password successfully changed",
                              success: true
                          })*/
                      });
                  });
              })
          console.log('Message sent: %s', info.messageId);       
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
          res.send({msg:"Leave Request has been sent to your mail address",value:true})
  }

});
// }
//  else if(leaveemail[2]){
  let mailOptions1 = {
    from: 'fortristha@gmail.com', 
    to: leaveemailRp, 
    subject: 'Leave Application Of ' +leavefirst +' ' +leavelast, 
    text: 'mytouch', 
    // html: '<table border="1"><tr><td><b>Firstname </b></td><td>'+ leavefirst+'</td></tr><tr><td><b><pre class="tab"></pre>Lastname</b></td><td>'+leavelast+'</td></tr><tr><td><b><pre class="tab"></pre>No Of Days</b></td><td>'+leavedays+'</td></tr><tr><td><b><pre class="tab"></pre>From Date </b></td><td>'+leavefrom+'</td></tr><tr><td><b><pre class="tab"></pre>To Date</b></td><td>'+leaveto+'</td></tr><td><b><pre class="tab"></pre>Leave Reason</b></td><td>'+leavereason+'</td></tr></table>'
    html: '<table cellpadding="10" bgcolor="seashell"  width="400" height="auto" border="1"><tr><td align="center"><b>Firstname </b></td><td align="center">'+ leavefirst+'</td></tr><tr><td align="center"><b>Lastname</b></td><td align="center">'+leavelast+'</td></tr><tr><td align="center"><b>No Of Days</b></td><td align="center">'+leavedays+'</td></tr><tr><td align="center"><b>Leave Type</b></td><td align="center">'+leavetype+'</td></tr><tr><td align="center"><b>From Date </b></td><td align="center">'+leavefrom+'</td></tr><tr><td align="center"><b>To Date</b></td><td align="center">'+leaveto+'</td></tr><tr><td align="center"><b>Leave Reason</b></td><td align="center">'+leavereason+'</td></tr><tr><td align="center"><b>Leave Limit</b></td><td align="center">'+leavelimit+'</td></tr><tr><td align="center"><b>Comments</b></td><td align="center">'+comments+'</td></tr></table>'
  };
  transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
        return console.log(error,"13444");
    }else{
             User.getUserByEmail(leaveemailRp, (err, res) => {
                    console.log(res, '182')
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(res.password , salt, (err, hash) => {
                            if (err) throw err;
                            // res.password = hash;
                            console.log(res, '187')
                            /*resp.send({
                                msg: "password successfully changed",
                                success: true
                            })*/
                        });
                    });
                })
            console.log('Message sent: %s', info.messageId);       
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send({msg:"Leave Request has been sent to your mail address",value:true})
    }
  
  });
// }
  
});
                      return resp.json({
                          success: true,
                          msg: 'Leave Request has been sent to your mail address'
                      });
                  }
  })
})


/////////////////////////////////newuser///////////////////////////////////
  router.post('/newuser', (req, resp, next) => {
    console.log(req.body.email, "84")
    console.log(req.body.username, "84------->")
     var abc1=req.body.username;
    var abc=req.body.email;
    var abc2=req.body.password;
    var abc3=req.body.utype;
    var abc4=req.body.employee_OId
    console.log(abc4);

 
    User.newUser(req.body.email,req.body.username,req.body.password,req.body.utype,req.body.employee_OId, (err, user) => {
        console.log(user, " 88")

        if(err) { throw err; }
        // if(!user) {  return resp.json({
        //                 success: false,
        //                 msg: 'Please Enter Valid Email'
        //             }); }
         else {

// var newpwd=makepwd();
/*var user={username:req.body.username,password:newpwd,oldpasswrd:req.body.old_passorwd}
var flag=changepassword(user,resp);
console.log(flag)*/
console.log(abc2)
nodemailer.createTestAccount((err, users) => {
  console.log(user)
let transporter = nodemailer.createTransport({
    host: 'fortristha@gmail.com',
    service: "gmail",
    port: 587,
    secure: false, 
    auth: {
        user: 'fortristha@gmail.com', 
        pass: 'tristhaTGPL'  
    },
    tls:{
      rejectUnauthorized:false
    }
});
console.log(abc)
let mailOptions = {
    from: 'fortristha@gmail.com', 
    to: abc, 
    subject: 'New Password', 
    text: 'mytouch', 
    html: '<b>Your Username is :</b>'+abc1+'<br><b>Your Password is :</b>'+abc2+'<br><b>Your User Profile is:</b>'+abc3
};

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error,"13444");
    }else{
             User.getUserByEmail(abc, (err, res) => {
                    console.log(res, '182')
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(res.password , salt, (err, hash) => {
                            if (err) throw err;
                            // res.password = hash;
                            console.log(res, '187')
                            /*resp.send({
                                msg: "password successfully changed",
                                success: true
                            })*/
                        });
                    });
                })
            console.log('Message sent: %s', info.messageId);       
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send({msg:"New password has been sent to your mail address",value:true})
    }

});
});
                        return resp.json({
                            success: true,
                            msg: 'New password has been sent to your mail address'
                        });
                    }
    })
})

router.post('/register', (req, res) => {
  console.log(req.body,"---------------------------------------------------------------------")
  console.log(req.body.alternateemail);
  // Check if email was provided
  if (!req.body.email) {
    res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
  } else {

      if (!req.body.utype) {
          res.json({ success: false, message: 'You must provide an utype' }); // Return error
        } else {

    // Check if username was provided
    if (!req.body.username) {
      res.json({ success: false, message: 'You must provide a username' }); // Return error
    } else {
      // Check if password was provided
      if (!req.body.password) {
        res.json({ success: false, message: 'You must provide a password' }); // Return error
      } else {
        if(!req.body.alternateemail){
          res.json({ success: false, message: 'You must provide a Alternate Email' }); // Return error
        }
        else{
        // Create new user object and apply user input

        User.encrypt(req.body.password, (err, password) => {

          console.log(password,"fdsdf");
          console.log(req.body.alternateemail);
              let user = new User(
        {
          email: req.body.email,
          username: req.body.username,
          password: password,
          employee_id:req.body.employee_id,
          employee_OId:req.body.employee_OId,
          utype:req.body.utype,
          alternateemail:req.body.alternateemail,
          status:req.body.status,
          enddate:req.body.enddate,
          employeestatus:req.body.employeestatus,
        });
        // Save user to database
        user.save((err) => {
          // Check if error occured
          if (err) {
            // Check if error is an error indicating duplicate account
            if (err.code === 11000) {
              res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
            } else {
              // Check if error is a validation error
              if (err.errors) {
                // Check if validation error is in the email field
                if (err.errors.email) {
                  res.json({ success: false, message: err.errors.email.message }); // Return error
                } else {
                  // Check if validation error is in the username field
                  if (err.errors.username) {
                    res.json({ success: false, message: err.errors.username.message }); // Return error
                  } else {
                      if (err.errors.utype) {
                          res.json({ success: false, message: err.errors.utype.message }); // Return error
                        } else {
                    // Check if validation error is in the password field
                    if (err.errors.password) {
                      res.json({ success: false, message: err.errors.password.message }); // Return error
                    } else {
                      if (err.errors.employee_OId) {
                        res.json({ success: false, message: err.errors.employee_OId.message }); // Return error
                      }
                      else{
                      res.json({ success: false, message: err });
                      // Return any other error not already covered
                      }
                    }
                  }
                }
              }
              } else {
                res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
              }
            }
          } else {
            res.json({ success: true, message: 'Account registered!' }); // Return success
          }
        });

        }); 
      }
      }
    }
  }
}
});


// router.post('/register', (req, res) => {
//   console.log(req.body,"---------------------------------------------------------------------")
//   console.log(req.body.alternateemail);
//   // Check if email was provided
//   if (!req.body.email) {
//     res.json({ success: false, message: 'You must provide an e-mail' }); // Return error
//   } else {

//       if (!req.body.utype) {
//           res.json({ success: false, message: 'You must provide an utype' }); // Return error
//         } else {

//     // Check if username was provided
//     if (!req.body.username) {
//       res.json({ success: false, message: 'You must provide a username' }); // Return error
//     } else {
//       // Check if password was provided
//       if (!req.body.password) {
//         res.json({ success: false, message: 'You must provide a password' }); // Return error
//       } else {
//         if(!req.body.alternateemail){
//           res.json({ success: false, message: 'You must provide a Alternate Email' }); // Return error
//         }
//         else{
//         // Create new user object and apply user input

//         User.encrypt(req.body.password, (err, password) => {

//           console.log(password,"fdsdf");
//           console.log(req.body.alternateemail);
//               let user = new User(
//         {
//           email: req.body.email,
//           username: req.body.username,
//           password: password,
//           employee_id:req.body.employee_id,
//           employee_OId:req.body.employee_OId,
//           utype:req.body.utype,
//           alternateemail:req.body.alternateemail
//         });
//         // Save user to database
//         user.save((err) => {
//           // Check if error occured
//           if (err) {
//             // Check if error is an error indicating duplicate account
//             if (err.code === 11000) {
//               res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error
//             } else {
//               // Check if error is a validation error
//               if (err.errors) {
//                 // Check if validation error is in the email field
//                 if (err.errors.email) {
//                   res.json({ success: false, message: err.errors.email.message }); // Return error
//                 } else {
//                   // Check if validation error is in the username field
//                   if (err.errors.username) {
//                     res.json({ success: false, message: err.errors.username.message }); // Return error
//                   } else {
//                       if (err.errors.utype) {
//                           res.json({ success: false, message: err.errors.utype.message }); // Return error
//                         } else {
//                     // Check if validation error is in the password field
//                     if (err.errors.password) {
//                       res.json({ success: false, message: err.errors.password.message }); // Return error
//                     } else {
//                       if (err.errors.employee_OId) {
//                         res.json({ success: false, message: err.errors.employee_OId.message }); // Return error
//                       }
//                       else{
//                       res.json({ success: false, message: err });
//                       // Return any other error not already covered
//                       }
//                     }
//                   }
//                 }
//               }
//               } else {
//                 res.json({ success: false, message: 'Could not save user. Error: ', err }); // Return error if not related to validation
//               }
//             }
//           } else {
//             res.json({ success: true, message: 'Acount registered!' }); // Return success
//           }
//         });

//         }); 
//       }
//       }
//     }
//   }
// }
// });







  
    router.put('/changepassword', (req, resp, next) => {
       console.log(req.body)
       /* var user={username:req.body.username,password:req.body.password,oldpasswrd:req.body.old_passowrd}
       var status= changepassword(user,resp);
       console.log(status)*/

        const username = req.body.username;
        const password = req.body.password;
        const oldpasswrd = req.body.old_passwrd;
       // console.log(users, "175555555555555555555555555")
        User.getUserByUsername(username, (err, user) => {
            if (err) {
                throw err;
            }
            if (!user) {
                return resp.send({
                    success: false,
                    msg: 'wrong username'
                });
            }
            console.log(oldpasswrd, "18666666666666666666666666666")
            User.comparePassword(oldpasswrd, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    // res.send({message:"correct password",success:true});
                    User.getUserByUsername(username, (err, res) => {
                        console.log(res, '83')
                        bcrypt.genSalt(150, (err, salt) => {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if (err) throw err;
                                res.password = hash;
                                console.log(res, '88')
                                res.save();
                                resp.send({
                                    msg: "password successfully changed",
                                    success: true
                                })
                            });
                        });
                    })
                } else {
                    return resp.send({
                        success: false,
                        msg: 'please enter correct password'
                    });
                }
            });
        });
    })
 

    router.post('/user', (req, resp, next) => {
      console.log(req.body.email, "84 WOW");
      console.log(req.body.employee_OId, "Omer");
      console.log(req.body.username, "UName");
// var validuser;
//  User.getUserById()

 User.getUserByUsername(req.body.username, (err, user) => {
          console.log(user, " 88")

          if(err) { throw err; }
          if(!user) {  return resp.json({
                          success: false,
                          msg: 'Please Enter Valid Email'
                      }); }
            else {

var newpwd=makepwd();
/*var user={username:req.body.username,password:newpwd,oldpasswrd:req.body.old_passorwd}
var flag=changepassword(user,resp);
console.log(flag)*/
console.log(newpwd)
  nodemailer.createTestAccount((err, users) => {
    console.log(user)
  let transporter = nodemailer.createTransport({
      host: 'fortristha@gmail.com',
      service: "gmail",
      port: 587,
      secure: false, 
      auth: {
          user: 'fortristha@gmail.com', 
          pass: 'tristhaTGPL'  
      },
      tls:{
        rejectUnauthorized:false
      }
  });
console.log(req.body.email)
  let mailOptions = {
      from: 'fortristha@gmail.com', 
      to: req.body.email, 
      subject: 'Password update', 
      text: 'mytouch', 
      html: 'User Name : '+req.body.username+'<br>Your New password is : '+ newpwd+'<br>Email Id : '+req.body.email
  };

      transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error,"13444");
      }else{
               User.getUserByEmail(user.email, (err, res) => {
                      console.log(res, '182')
                      bcrypt.genSalt(10, (err, salt) => {
                          bcrypt.hash(newpwd, salt, (err, hash) => {
                              if (err) throw err;
                              res.password = hash,
                              res.email= req.body.email;
                              res.username=req.body.username;
                              console.log(res, '187')
                              res.save();
                              /*resp.send({
                                  msg: "password successfully changed",
                                  success: true
                              })*/
                          });
                      });
                  })
              console.log('Message sent: %s', info.messageId);       
              console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
              res.send({msg:"New password has been sent to your mail address",value:true})
      }

  });
});
                          return resp.json({
                              success: true,
                              msg: 'New password has been sent to your mail address'
                          });
                      }
      })
  })



  router.post('/forgetpassword', (req,res,next) => {
    console.log(req.body.username, "84 WOW");
    console.log(req.body.password);
  
  User.getUserByUsername(req.body.username, (err,user) => 
    {
      if(err) { throw err; }
      if(!user) {  return resp.json({
                      success: false,
                  }); }
        else {
          User.getUserByUsername(user.username, (err, res) => {
            console.log(res, '182')
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                    if (err) throw err;
                    res.password = hash,
                    // res.email= req.body.email;
                    console.log(res, '187')
                    res.save();
                });
            });
        })
    // console.log('Message sent: %s', info.messageId);       
    res.send({msg:"Password has been Updated",value:true})
        }
    })
  })



  router.post('/changestatua', (req,res,next) => {
    console.log(req.body.username, "84 WOW");
      console.log(req.body);
    User.getUserByUsernameUtypeOldEmail(req.body.username,req.body.utype,req.body.email, (err,user) => 
      {
        console.log(user);
        if(err) { throw err; }
        if(!user) {  return res.json({
                        success: false,
                  }); }
          else {
            User.getUserByUsernameUtypeOldEmail(req.body.username,req.body.utype,req.body.email, (err, res) => {
              console.log(res, '182')
              res.employeestatus=req.body.employeestatus;
              res.save();
          })    
      res.send({msg:"Employee Status has been Updated",value:true})
          }
      })
    })
    
  
  
  
  router.post('/checkuser', (req,res,next) => {
    console.log(req.body.username, "84 WOW");
    console.log(req.body.password);
  
  User.getUserByUsernameUtypeEmail(req.body.username,req.body.utype,req.body.alternateemail, (err,user) => 
    {
      if(err) { throw err; }
      if(!user) {  
        return res.json({
                      success: false,
                      msg : 'Please Enter Valid Details.' 
                  }); 
                }
        else {
          User.getUserByUsernameUtypeEmail(user.username,user.utype,user.alternateemail, (err, res) => {
            console.log(res, '182')
        })     
    res.send({msg:"Details Matched",value:true})
        }
    })
  })
  
  
  
  router.post('/forgetuser', (req, resp, next) => {
    console.log(req.body.email, "84 WOW");


User.getUserByEmail(req.body.email, (err, user) => {
        console.log(user, " 88")

        if(err) { throw err; }
        if(!user) {  return resp.json({
                        success: false,
                        msg: 'Please Enter Valid Email'
                    }); }
          else {
            console.log(user.enddate);
            let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let newdate = year + "-" + month + "-" + date
console.log(newdate);
if(user.enddate<newdate)
{
  return resp.json({
    success: false,
    msg: 'Sorry You are not able to use these service.'
});
}
else
{
var newpwd="http://192.168.194.110:/forgetpassword";
// makepwd();
console.log(newpwd)
nodemailer.createTestAccount((err, users) => {
  console.log(user)
let transporter = nodemailer.createTransport({
    host: 'fortristha@gmail.com',
    service: "gmail",
    port: 587,
    secure: false, 
    auth: {
        user: 'fortristha@gmail.com', 
        pass: 'tristhaTGPL'  
    },
    tls:{
      rejectUnauthorized:false
    }
});
console.log(req.body.email)
let mailOptions = {
    from: 'fortristha@gmail.com', 
    to: req.body.email, 
    subject: 'Forget Password', 
    text: 'mytouch', 
    html: '<br>For Forget Password <a href="http://192.168.194.110:4200/forgetpassword">'+'Click Here'+'</a>'
};

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error,"13444");
    }else{
             User.getUserByEmail(user.email, (err, res) => {
                    console.log(res, '182')
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newpwd, salt, (err, hash) => {
                            if (err) throw err;
                            console.log(res, '187')
                        });
                    });
                })
            console.log('Message sent: %s', info.messageId);       
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.send({msg:"Change Password link has been sent to your mail address",value:true})
    }

});
});
return resp.json({
     success: true,
     msg: 'Change Password link has been sent to your mail address'
    });
     }
    }
    })
})




router.post('/changestatua', (req,res,next) => {
  console.log(req.body.username, "84 WOW");
    console.log(req.body);
  User.getUserByUsernameUtypeOldEmail(req.body.username,req.body.utype,req.body.email, (err,user) => 
    {
      console.log(user);
      if(err) { throw err; }
      if(!user) {  return res.json({
                      success: false,
                }); }
        else {
          User.getUserByUsernameUtypeOldEmail(req.body.username,req.body.utype,req.body.email, (err, res) => {
            console.log(res, '182')
            res.employeestatus=req.body.employeestatus;
            res.save();
        })    
    res.send({msg:"Employee Status has been Updated",value:true})
        }
    })
  })

  


    router.post('/login', (req, res, next) => {
      const username = req.body.username;
      const password = req.body.password;
      const utype = req.body.utype;
      console.log(req, "85");

      User.getUserByUsernameUtype(username,utype, (err, user) => {
          if (err) {
              throw err;
          }
          if (!user ) {
              return res.json({
                  success: false,
                  msg: 'Invalid User or Invalid Password or Invalid User Profile'
              });
          }

          console.log(user);

          if (user.employeestatus=="inactive" ) {
            return res.json({
                success: false,
                msg: 'You are not able to use these service.'
            });
        }
        else{
       User.comparePassword(password, user.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                  const token = jwt.sign(user, config.secret, {
                      expiresIn: 604 // 1 week
                  });
                  res.json({
                      success: true,
                      token: 'JWT ' + token,
                      user: {
                          id: user._id,
                          employee_id: user.employee_id,
                          username: user.username,
                          email: user.email,
                          employee_OId: user.employee_OId,
                          utype:user.utype
                      }
                  });
              } else {
                  return res.json({
                      success: false,
                      msg: 'Invalid User or Invalid Password '
                  });
              }
          });
        }
        // });
      });      
});






/*
router.post('/siteconfig', (req,res) => {
  let business= new Business(req.body);

  business.save((err)=>{

if(err){
  res.json({success:false, message:'error'});
} else{

  res.json({success:true, message:' business account registered'})
}

  });
});


router.get('/siteconfig', (req,res)=>{

Business.find({},(err,business)=>{
if(err){

  res.json({success:false, message:'could not register'})
} else{

res.json({success:true, business:business})

}
})



});
*/

  router.get('/profile',  (req,res,next) => {

console.log(req.body,"dgfdg")
console.log(req.header,"dgfdg")
   console.log(req.decode)
    User.findOne({_id:req.decoded.userId}).select('username email').exec((err, user) =>{
      if(err){
        res.json({ success:false, message: "uuuuuu"});
      }else{
        if(!user){
          res.json({success:false, message: 'User not found'});
        }else{
          res.json({success:true, user:user});;
        }
      }
    });
      res.json({user: req.user});
  });


function makepwd() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
/*function changepassword(users,resp)
{
  console.log(users,"2866666666666666666666666 ")
  const username = users.username;
        const password = users.password;
        const oldpasswrd = users.oldpasswrd
        console.log(users, "175555555555555555555555555")
        User.getUserByUsername(username, (err, user) => {
            if (err) {
                throw err;
            }
            if (!user) {
                return resp.send({
                    success: false,
                    msg: 'wrong username'
                });
            }
            console.log(oldpasswrd, "18666666666666666666666666666")
            User.comparePassword(oldpasswrd, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    // res.send({message:"correct password",success:true});
                    User.getUserByUsername(username, (err, res) => {
                        console.log(res, '83')
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if (err) throw err;
                                res.password = hash;
                                console.log(res, '88')
                                res.save();
                                resp.send({
                                    msg: "password successfully changed",
                                    success: true
                                })
                            });
                        });
                    })
                } else {
                    return resp.send({
                        success: false,
                        msg: 'please enter correct password'
                    });
                }
            });
        });
}*/

  return router; // Return router object to main index.js
}
