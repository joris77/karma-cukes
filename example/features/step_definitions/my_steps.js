var myStepDefinitionsWrapper = function () {
    this.World = require("../support/world.js").World;
    var result;

    this.When(/^I add (\d+) and (\d+)$/, function (arg1, arg2, callback) {
        result = this.math.add(parseFloat(arg1), parseFloat(arg2));
        callback();
    });

    this.Then(/^the result is (\d+)$/, function (arg1, callback) {
        if (result === parseFloat(arg1)) {
            callback();
        } else {
            callback.fail(new Error("Expected result " + arg1 + " but actual " + result));
        }
    });
};
module.exports = myStepDefinitionsWrapper;