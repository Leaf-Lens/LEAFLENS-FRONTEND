import { Schema, model, models } from 'mongoose'

const inquirySchema = new Schema({
    email: {
        type: String,
        required: true
    },
    inquiry: {
        type: String,
        required: true
    }
})

const InquiriesModel = models.inquiries || model('inquiries', inquirySchema)

export default InquiriesModel;