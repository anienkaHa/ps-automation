expect = require('chai').expect;

const { LogInPage } = require('../../page-objects/login-logout-page-objects')
const { LastNameField, FirstNameField,
    EmailField, DueField,
    WebSiteField, ActionField } = require('../../page-objects/sortable-tables-page-objects')
const { scrollInfinite, selectDropDown, checkBoxes } = require('../../utility-methods/test-methods')

const logInPage = new LogInPage()
const lastNameField = new LastNameField()
const firstNameField = new FirstNameField()
const emailField = new EmailField()
const dueField = new DueField()
const webSiteField = new WebSiteField()
const actionField = new ActionField()

describe('Login and logout of the internet app', () => {
    it('should validate login and logout', () => {
        browser.url('http://the-internet.herokuapp.com/login');
        logInPage.usernameField.setValue('tomsmith')
        logInPage.passwordField.setValue('SuperSecretPassword!')
        logInPage.loginButton.click()
        expect(logInPage.confirmationText.getText()).to.include('You logged into a secure area!')
        logInPage.logoutButton.click()
        expect(logInPage.confirmationText.getText()).to.include('You logged out of the secure area!')
    });
});

describe('Test sortable tables on internet app', () => {
    before(function () {
        browser.url('http://the-internet.herokuapp.com/tables');
    })
    it('should verify column names', () => {
        expect(lastNameField.columnName.getText()).to.equal('Last Name')
        expect(firstNameField.columnName.getText()).to.equal('First Name')
        expect(emailField.columnName.getText()).to.equal('Email')
        expect(dueField.columnName.getText()).to.equal('Due')
        expect(webSiteField.columnName.getText()).to.equal('Web Site')
        expect(actionField.columnName.getText()).to.equal('Action')
    });
    it('should sort down (a-z) by last name', () => {
        lastNameField.columnSort.click()
        expect((lastNameField.columnSort).getAttribute('class')).to.equal('header headerSortDown')
        expect(lastNameField.firstRowValue.getText()).to.equal('Bach')
        expect(lastNameField.secondRowValue.getText()).to.equal('Conway')
        expect(lastNameField.thirdRowValue.getText()).to.equal('Doe')
        expect(lastNameField.fourthRowValue.getText()).to.equal('Smith')
    });
    it('should sort up (z-a) by last name', () => {
        lastNameField.columnSort.click()
        expect((lastNameField.columnSort).getAttribute('class')).to.equal('header headerSortUp')
        expect(lastNameField.firstRowValue.getText()).to.equal('Smith')
        expect(lastNameField.secondRowValue.getText()).to.equal('Doe')
        expect(lastNameField.thirdRowValue.getText()).to.equal('Conway')
        expect(lastNameField.fourthRowValue.getText()).to.equal('Bach')
    });
    it('should sort down (a-z) by first name', () => {
        firstNameField.columnSort.click()
        expect((firstNameField.columnSort).getAttribute('class')).to.equal('header headerSortDown')
        expect(firstNameField.firstRowValue.getText()).to.equal('Frank')
        expect(firstNameField.secondRowValue.getText()).to.equal('Jason')
        expect(firstNameField.thirdRowValue.getText()).to.equal('John')
        expect(firstNameField.fourthRowValue.getText()).to.equal('Tim')
    });
    it('should sort up (z-a) by first name', () => {
        firstNameField.columnSort.click()
        expect((firstNameField.columnSort).getAttribute('class')).to.equal('header headerSortUp')
        expect(firstNameField.firstRowValue.getText()).to.equal('Tim')
        expect(firstNameField.secondRowValue.getText()).to.equal('John')
        expect(firstNameField.thirdRowValue.getText()).to.equal('Jason')
        expect(firstNameField.fourthRowValue.getText()).to.equal('Frank')
    });
    it('should sort down (a-z) by email', () => {
        emailField.columnSort.click()
        expect((emailField.columnSort).getAttribute('class')).to.equal('header headerSortDown')
        expect(emailField.firstRowValue.getText()).to.equal('fbach@yahoo.com')
        expect(emailField.secondRowValue.getText()).to.equal('jdoe@hotmail.com')
        expect(emailField.thirdRowValue.getText()).to.equal('jsmith@gmail.com')
        expect(emailField.fourthRowValue.getText()).to.equal('tconway@earthlink.net')
    });
    it('should sort up (z-a) by email', () => {
        emailField.columnSort.click()
        expect((emailField.columnSort).getAttribute('class')).to.equal('header headerSortUp')
        expect(emailField.firstRowValue.getText()).to.equal('tconway@earthlink.net')
        expect(emailField.secondRowValue.getText()).to.equal('jsmith@gmail.com')
        expect(emailField.thirdRowValue.getText()).to.equal('jdoe@hotmail.com')
        expect(emailField.fourthRowValue.getText()).to.equal('fbach@yahoo.com')
    });
    it('should sort down (a-z) by due', () => {
        dueField.columnSort.click()
        expect((dueField.columnSort).getAttribute('class')).to.equal('header headerSortDown')
        expect(dueField.firstRowValue.getText()).to.equal('$50.00')
        expect(dueField.secondRowValue.getText()).to.equal('$50.00')
        expect(dueField.thirdRowValue.getText()).to.equal('$51.00')
        expect(dueField.fourthRowValue.getText()).to.equal('$100.00')
    });
    it('should sort up (z-a) by due', () => {
        dueField.columnSort.click()
        expect((dueField.columnSort).getAttribute('class')).to.equal('header headerSortUp')
        expect(dueField.firstRowValue.getText()).to.equal('$100.00')
        expect(dueField.secondRowValue.getText()).to.equal('$51.00')
        expect(dueField.thirdRowValue.getText()).to.equal('$50.00')
        expect(dueField.fourthRowValue.getText()).to.equal('$50.00')
    });
    it('should sort down (a-z) by web site', () => {
        webSiteField.columnSort.click()
        expect((webSiteField.columnSort).getAttribute('class')).to.equal('header headerSortDown')
        expect(webSiteField.firstRowValue.getText()).to.equal('http://www.frank.com')
        expect(webSiteField.secondRowValue.getText()).to.equal('http://www.jdoe.com')
        expect(webSiteField.thirdRowValue.getText()).to.equal('http://www.jsmith.com')
        expect(webSiteField.fourthRowValue.getText()).to.equal('http://www.timconway.com')
    });
    it('should sort up (z-a) by web site', () => {
        webSiteField.columnSort.click()
        expect((webSiteField.columnSort).getAttribute('class')).to.equal('header headerSortUp')
        expect(webSiteField.firstRowValue.getText()).to.equal('http://www.timconway.com')
        expect(webSiteField.secondRowValue.getText()).to.equal('http://www.jsmith.com')
        expect(webSiteField.thirdRowValue.getText()).to.equal('http://www.jdoe.com')
        expect(webSiteField.fourthRowValue.getText()).to.equal('http://www.frank.com')
    });
});

describe('Run Utility Methods', () => {
    it('should click both checkboxes random amount of tines (1-10)', () => {
        browser.url('http://the-internet.herokuapp.com/checkboxes');
        checkBoxes()
    })
    it('should scroll down the page as many times as supplied and allow 3 refreshes', () => {
        browser.url('http://the-internet.herokuapp.com/infinite_scroll');
        scrollInfinite(2)
    })
})

describe('Test drop down functionality on the Internet App', () => {
    it('should randomly select an option and confirm it is selected', () => {
        browser.url('http://the-internet.herokuapp.com/dropdown');
        expect(selectDropDown()).to.be.true
    })
})
