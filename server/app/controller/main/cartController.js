const Cart = require('../../models/cart')
exports.add = async (req, res) => {
    const { userID, categoryID } = req.body
    console.log(userID, categoryID)
    try {
        if (!userID || !categoryID) {
            return res.json({
                status: false,
                message: 'userID, categoryID are required'
            })
        }
        const data = new Cart({ userID, categoryID });
        const result = await data.save();
        if (!result) {
            return res.json({
                status: false,
                message: 'Could not add Cart'
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
    const { name, image, icon, description, _id, price } = req.body
    try {
        if (!_id) {
            return res.json({
                status: false,
                message: '_id is required'
            })
        }
        let data = {};
        if (name) {
            data.name = name
        }
        if (price) {
            data.price = price
        }
        if (image) {
            data.image = image
        }
        if (icon) {
            data.icon = icon
        }
        if (description) {
            data.description = description
        }
        let result = await Cart.findOneAndUpdate({ _id: _id }, { $set: data })
        if (!result) {
            return res.json({
                status: false,
                message: 'BlogCategory does not exsists'
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
    let { limit, page, userID } = req.query;

    try {
        let result;
        if (!limit || !page) {
            result = await Cart.find({ userID: userID }).populate('userID').populate('categoryID')
        }
        else {
            const skip = (page - 1) * limit;
            result = await Cart.find({ userID: userID }).skip(skip).limit(limit)
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
        const result = await Cart.findOneAndDelete({ _id: _id });
        if (!result) {
            return res.json({
                status: false,
                message: 'Blog with this id does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'Blog deleted',
            result: result
        })
    } catch (err) {
        res.json({
            status: false,
            message: err.message
        })
    }
}
exports.deleteAll = async (req, res) => {
    let { userID } = req.query;
    console.log(userID)
    try {
        if (!userID) {
            return res.json({
                status: false,
                message: 'userID is required'
            })
        }
         console.log(userID)
        const result = await Cart.deleteMany({ userID: userID });
        console.log(userID)
        console.log("result",result)
        if (!result) {
            return res.json({
                status: false,
                message: 'Blog with this id does not exsists'
            })
        }
        res.json({
            status: true,
            message: 'All deleted',
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
        const result = await Cart.find({ name: { $regex: text, $options: 'i' } });
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