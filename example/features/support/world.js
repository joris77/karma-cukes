var math = require('../../src/math.js');
function World(callback) {
    this.math = math;

    callback();
}
module.exports.World = World;