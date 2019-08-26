const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// console.developers.google.com

//clientID :91233973303-1rsiae9u34u27cghp4k50ena6v2hu3m3.apps.googleusercontent.com
//clientSecret : nSXhuuLjmAuqP_NjaT7WTM9T


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/goolge/callback'
}, (accesToken) =>{
    console.log(accesToken);
})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);