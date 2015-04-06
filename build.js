var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var highlight = require('highlight.js');
var templates = require('metalsmith-templates');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var define = require('metalsmith-define');
var handlebars = require('handlebars');
var moment = require('moment');
var fs = require('fs');

handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());
handlebars.registerHelper('formatDate', function(datetime) {
    return moment(datetime).format('DD MMM YYYY');
});

metalsmith(__dirname)
    .source('src')
    .use(define({
        blog: {
            uri: 'http://halvdan.github.io',
            title: 'halvdan',
            description: 'test description'
        },
        owner: {
            uri: 'http://halvdan.github.io/about',
            name: 'Dan Johansson'
        }
    }))
    .use(collections({
        posts: {
            pattern: 'posts/**/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown({
        gfm: true,
        tables: true,
        highlight: function (code, lang) {
            if (!lang) {
                return code;
            }
            try {
                return highlight.highlight(lang, code).value
            } catch (e) {
                return code;
            }
        }
    }))
    .use(permalinks({
        pattern: ':date/:title',
        date: 'YYYY'
    }))
    .use(templates({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .destination('build')
    .build(function (err) {
        if (err) {
            throw err;
        }
        console.log('build complete');
    });
