const Faqs = require('../../models/faqs')
exports.add = async (req, res) => {
    const { question, answer } = req.body
    try {
        if (!question || !answer) {
            return res.json({
                status: false,
                message: 'name, image, description are required'
            })
        }
        const data = new Faqs({ question, answer});
        const result = await data.save();
        if (!result) {
            return res.json({
                status: false,
                message: 'Could not add Faqs'
            })
        }
        res.json({
            status: true,
            message: 'Added successfully',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.update = async (req, res) => {
    const { question, answer, _id } = req.body
    try {
        if (!_id) {
            return res.json({
                status: false,
                message: '_id is required'
            })
        }
        let data = {};
        if (question) {
            data.question = question
        }
        if (answer) {
            data.answer = answer
        }
       
        let result = await Faqs.findOneAndUpdate({ _id: _id }, { $set: data })
        if (!result) {
            return res.json({
                status: false,
                message: 'Faq does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'Update',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.get = async (req, res) => {
    let { limit, page } = req.query;
    try {
        let result;
        if (!limit || !page) {
            result = await Faqs.find()
        }
        else {
            const skip = (page - 1) * limit;
            result = await Faqs.find().skip(skip).limit(limit)
        }
        if (result.length < 1) {
            return res.json({
                status: false,
                message: 'No data found'
            })
        }
        res.json({
            status: true,
            message: 'Fetched',
            count: result.length,
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.delete = async (req, res) => {
    let { _id } = req.query;
    try {
        if (!_id) {
            return res.json({
                status: false,
                message: '_id is required'
            })
        }
        const result = await Faqs.findOneAndDelete({ _id: _id });
        if (!result) {
            return res.json({
                status: false,
                message: 'Faq with this id does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'Faq deleted',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.search = async (req, res) => {
    let { text } = req.query;
    try {
        if (!text) {
            return res.json({
                status: false,
                message: 'text is required'
            })
        }
        const result = await Faqs.find({ question: { $regex: text, $options: 'i' } });
        if (!result) {
            return res.json({
                status: false,
                message: 'No Results found'
            })
        }
        res.json({
            status: true,
            message: 'Results found',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}