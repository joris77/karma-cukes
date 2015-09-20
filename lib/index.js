var path = require('path')

var createPattern = function (path) {
    return {pattern: path, included: true, served: true, watched: false}
}

var initMocha = function (files, cucumberjsConfig) {
    var mochaPath = path.dirname(require.resolve('cucumberjs'))
    files.unshift(createPattern(__dirname + '/adapter.js'))
    files.unshift(createPattern(mochaPath + '/mocha.js'))

    if (mochaConfig && mochaConfig.reporter) {
        files.unshift(createPattern(mochaPath + '/mocha.css'))
    }
}

initMocha.$inject = ['config.files', 'config.client.mocha']

module.exports = {
    'framework:mocha': ['factory', initMocha]
}