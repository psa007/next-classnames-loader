var loaderUtils = require('loader-utils');
var path = require('path');

module.exports = function(source, map) {
    this.callback(null, source, map);
};

module.exports.pitch = function(remainingRequest) {
    this.cacheable();
    return `
        var classNames = require('classnames/bind');
        var locals = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
        var css = classNames.bind(locals);
        for (var style in locals) css[style] = locals[style];
        module.exports = css;
    `;
}
