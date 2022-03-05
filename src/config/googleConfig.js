const GOOGLE_SECRET = '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';
const GOOGLE_SCOPES = ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/youtube.readonly'];
const MONGOOSE_GOOGLE_KEY = 'google';

const GOOGLE_PASSPORT_CONFIG_WEB = {
    clientID: '540951878906-pn9p55oig6dlni3qr9uahqju3vf7q1ho.apps.googleusercontent.com',
    clientSecret: GOOGLE_SECRET,
    callbackURL: 'http://localhost:8080/connect/google/callback',
    passReqToCallback: true
};

const GOOGLE_PASSPORT_CONFIG_MOBILE = {
    clientID: '540951878906-pn9p55oig6dlni3qr9uahqju3vf7q1ho.apps.googleusercontent.com',
    callbackURL: 'area.app:/auth',
    passReqToCallback: true
};

module.exports = {
    MONGOOSE_GOOGLE_KEY,
    GOOGLE_SCOPES,
    GOOGLE_PASSPORT_CONFIG_WEB,
    GOOGLE_PASSPORT_CONFIG_MOBILE,
};