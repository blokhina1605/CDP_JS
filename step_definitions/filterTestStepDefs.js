var myStepDefinitionsWrapper = function () {

    this.Before(function() {
    });
    this.Given(/^I am on start page "http:\/\/pn\.com\.ua"$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^I select category "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^I select subcategory "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });

    this.Given(/^I set minimum "([^"]*)" and maximum "([^"]*)" prices$/, function (arg1, arg2, callback) {
        callback.pending();
    });
    
    this.Then(/^I see results matching search parameters "([^"]*)" "([^"]*)"$/, function (arg1, arg2, callback) {
        callback.pending();
    });

    this.Given(/^I select manufacturer:$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the number of products equals to the number next to the manufacturer$/, function (callback) {
        callback.pending();
    });

    this.Then(/^product names begin with the selected products$/, function (callback) {
        callback.pending();
    });

    this.Given(/^I sort product by price$/, function (callback) {
        callback.pending();
    });

    this.Given(/^I get the name of the cheapest product$/, function (callback) {
        callback.pending();
    });

    this.Given(/^enter product name into the search field and submit$/, function (callback) {
        callback.pending();
    });

    this.Then(/^Search Results Page has (\d+) product$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^product name is equal to specified name$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;