'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs-extra');
const webpack = require('webpack');
const configFactory = require('../config/webpack.config');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;

const isInteractive = process.stdout.isTTY;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
    process.exit(1);
}

// Generate configuration
const config = configFactory('development');

// We require that you explicitly set browsers and do not fall back to
// browserslist defaults.
const {checkBrowsers} = require('react-dev-utils/browsersHelper');
checkBrowsers(paths.appPath, isInteractive)
    .then(() => {
        // Clean the output directory
        fs.emptyDirSync(paths.appBuild);
        // Start the webpack watch
        watch();
    }).catch(err => {
    if (err) {
        console.log(err);
    }
    process.exit(1);
});

// Watch for file changes.
function watch() {
    console.log('Watching for changes...');

    const compiler = webpack(config);
    compiler.watch({

    }, (err, stats) => {
        let messages = {
            errors: [],
            warnings: []
        };
        if (err) {
            if (!err.message) {
                console.error(err);
            } else {
                messages = formatWebpackMessages({
                    errors: [err.message],
                    warnings: [],
                });
            }
        } else {
            // Merge with the public folder
            copyPublicFolder();
            messages = formatWebpackMessages(
                stats.toJson({all: false, warnings: true, errors: true})
            );
        }
        if (messages.errors.length) {
            console.error(messages.errors.join('\n\n'))
        }

        if (messages.warnings.length) {
            console.error(messages.warnings.join('\n\n'))
        }

        console.log(`Compilation done in ${(stats.endTime - stats.startTime) / 1000}s`);
        console.log()
    });
}

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml,
    });
}
