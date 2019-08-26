class LogInPage {
    get usernameField() { return $('//*[@id="username"]') }
    get passwordField() { return $('//*[@id="password"]') }
    get loginButton() { return $('//*[@id="login"]/button') }
    get logoutButton() { return $('//*[@id="content"]/div/a') }
    get confirmationText() { return $('//*[@id="flash"]') }
}

module.exports = { LogInPage }