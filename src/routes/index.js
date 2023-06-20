const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/course', coursesRouter);
    app.use('/', siteRouter);

}

module.exports = route;
