const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../utils/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        
        Course.find({})
            .then((data) => {
                res.render('home', { 
                    data: multipleMongooseToObject(data) 
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;