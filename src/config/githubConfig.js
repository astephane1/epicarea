const GITHUB_SCOPES = ['repo', 'user', 'read:org'];
const MONGOOSE_GITHUB_KEY = 'github';

const GITHUB_PASSPORT_CONFIG_WEB = {
    clientID: 'Iv1.3cdeaed7f5c706d0',
    clientSecret: 'b6cfd528a9cab0404a140b6d0ae3870e15e24353',
    callbackURL: 'http://localhost:8080/connect/github/callback',
    passReqToCallback: true
};

const GITHUB_PASSPORT_CONFIG_MOBILE = {
    clientID: '90d45db59b92aa76bd6d',
    clientSecret: 'cd5cf86e91d751f3c1cb0788926d75ef9ede4525',
    callbackURL: 'area.app://auth',
    passReqToCallback: true
};

module.exports = {
    MONGOOSE_GITHUB_KEY,
    GITHUB_SCOPES,
    GITHUB_PASSPORT_CONFIG_WEB,
    GITHUB_PASSPORT_CONFIG_MOBILE,
}