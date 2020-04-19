var fs                       = require('fs'),
gulp                         = require('gulp'),
plumber                      = require('gulp-plumber'),

// SCSS
// ---------------------------------------------------------------------
postcss                      = require('gulp-postcss'),
syntaxScss                   = require('postcss-scss'),
sass                         = require('gulp-sass'),
sourcemaps                   = require('gulp-sourcemaps'),
postcssReporter              = require('postcss-reporter'),
strip                        = require('postcss-discard-comments'),
cssnano                      = require('cssnano'),

// Extansions
// ---------------------------------------------------------------------
rucksack                     = require('rucksack-css'),
uncss                        = require('gulp-uncss'),
lost                         = require('lost'),

// Code Fixes
// ---------------------------------------------------------------------
postcss_normalize            = require('postcss-normalize'),
flexbugs                     = require('postcss-flexbugs-fixes'),
doiuse                       = require('doiuse'),
immutableCss                 = require('immutable-css'),
postcss_sorting              = require('postcss-sorting'),
autoprefixer                 = require('autoprefixer'),

// Optimization
// ---------------------------------------------------------------------
postcss_assets               = require('postcss-assets'),
mqpacker                     = require('css-mqpacker'),
postcss_merge_rules          = require('postcss-merge-rules'),
postcss_merge_longhand       = require('postcss-merge-longhand'),
combine_duplicated_selectors = require('postcss-combine-duplicated-selectors'),

// Stats
// ---------------------------------------------------------------------
cssstats                     = require('cssstats'),
statsReporter                = require('postcss-stats-reporter'),
browserSync                  = require('browser-sync').create();

module.exports  = function() {

    var processors           = [
        postcss_normalize,
        postcss_assets(),
        flexbugs,
        rucksack({
            fallbacks: false,
        }),
        autoprefixer({
            zindex: false
        }),
        lost,
        postcss_sorting(),
        postcss_merge_rules,
        postcss_merge_longhand,
        strip,
        mqpacker({
            sort: true,
        }),
        cssstats(),
        statsReporter(),
        cssnano({ zindex: false }),
    ];

    return gulp.src('resources/assets/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors, {syntax: syntaxScss}))
    .pipe(sourcemaps.write('/.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream({
        once: true
    }));

};

module.exports.dependencies  = [ ];