const User = require('../models/user')

// const asyncHandler = require('express-async-handler')
// const { body, validationResult } = reuqire('express-validator')

export const myUser = (req, res, next) => {
    res.status(200).json({user: req.user})
}

export const updateMyUser = async(req, res, next) => {
    const SECRET_CODE = process.env.MEMBERSHIP_CODE

    try {
        if(SECRET_CODE === req.body.secret) {
            const updatedDoc = await User.findOneAndUpdate(
                { _id: req.params.id},
                { member_status: true},
            )
            .select('-password')
            .lean()

            if(!updatedDoc) {
                return res.status(400).end()
            }

            return res.status(200).json({ user: updatedDoc })
        }
        return res.status(400).json({ message: 'Invalid secret code.'})
    } catch(error) {
        console.error(error)
        res.status(500)
        next(error)
    }
}