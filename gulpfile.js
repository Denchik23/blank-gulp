const { series, parallel } = require('gulp');

const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const serve = require('./gulp/tasks/serve')
/*
const svgSprite = require('./gulp/tasks/svgSprite')
*/

const dev = parallel(pug2html, styles, script, fonts, imageMinify)

module.exports.start = series(
    clean,
    dev,
    serve
);

module.exports.build = series(
    clean,
    dev
);
