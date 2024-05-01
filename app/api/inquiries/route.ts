import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from '@/utils/database';
import InquiriesModel from '@/models/inquiries';

export const GET = async (req: Request) => {
    try {

        await connectToDB();
        var inquiries = await InquiriesModel.find({});
        return NextResponse.json(inquiries)

    } catch (error) {
        console.error('Error fetching clubs:', error);
        return NextResponse.json({
            "message": "There is an error in api"
        })
    }
}

export const POST = async (req: Request) => {
    try {

        await connectToDB();

        const inquiryInput = await req.json();

        const newInquiry = new InquiriesModel({
            email: inquiryInput.email,
            inquiry: inquiryInput.inquiry,
        });

        await newInquiry.save();

        return NextResponse.json({
            "message": "Inquiry sent"
        })

    } catch (error) {
        console.error('Error fetching clubs:', error);
        return NextResponse.json({
            "message": "There is an error in api"
        })
    }
}
