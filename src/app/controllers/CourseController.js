const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../utils/mongoose')

class CourseController {
    // [GET] /course/:slug
    show(req, res) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show');
            })
    }
}

module.exports = new CourseController;