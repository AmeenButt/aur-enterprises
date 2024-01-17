const ContactUs = require('../../models/contactUs');
exports.add = async (req, res) => {
    const { name, phone, email, postalCode, message } = req.body
    try {
        if (!name || !email || !message) {
            return res.json({
                status: false,
                message: 'Please fill all fields'
            })
        }
        const data = new ContactUs({ name, phone, email, postalCode, message });
        const result = await data.save();
        if (!result) {
            return res.json({
                status: false,
                message: 'Could not add form'
            })
        }
        res.json({
            status: true,
            message: 'Form Submitted',
            result: data
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.get = async (req, res) => {
    let { limit, page, id } = req.query;
    try {
        let result;
        if (!id) {
            if (!limit || !page) {
                result = await ContactUs.find()
            }
            else {
                const skip = (page - 1) * limit;
                result = await ContactUs.find().skip(skip).limit(limit)
            }
        }
        else {
            result = await ContactUs.find({ _id: id })
        }
        if (!result) {
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
        const result = await ContactUs.findOneAndDelete({ _id: _id });
        if (!result) {
            return res.json({
                status: false,
                message: 'Entry with this id does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'Deleted successfully',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.changeStatus = async (req, res) => {
    let { _id, status } = req.query;
    try {
        if (!_id) {
            return res.json({
                status: false,
                message: '_id is required'
            })
        }
        if (!status) {
            return res.json({
                status: false,
                message: 'Status is required'
            })
        }
        if(status != 'pending' && status != 'follow_up' &&status !='completed'){
            return res.json({
                status: false,
                message: 'Status can only be pending, follow_up or completed'
            })
        }
        const result = await ContactUs.findOneAndUpdate({ _id: _id }, { status: status });      
        if (!result) {
            return res.json({
                status: false,
                message: 'Entry with this id does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'Status changed successfully',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}