module.exports = require("./webpack.config.js")({
    env: 'test',
    debug: true,
    devtool: "inline-source-map",
    linter: true,
    test: true
});