'use client'

import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';

import { Textarea, Divider, Box } from '@mui/joy';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import type { RootState } from '@/app/globalredux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setInquiryModalIsShown, setSnackbarSuccessIsShown } from '@/app/globalredux/features/app/appSlice';


const InquiryModal = () => {

    const InquiryModalIsShown = useSelector((state: RootState) => state.app.inquiryModalIsShown)
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        email: '',
        inquiry: ''
    });

    const handleEmailChange = (e: any) => {
        const { value } = e.target; // Get the value entered in the input field
        setInput((prevInput) => ({
            ...prevInput, // Keep the existing state
            email: value, // Update the email field with the new value
        }));
    };

    const handleInquiryChange = (e: any) => {
        const { value } = e.target; // Get the value entered in the input field
        setInput((prevInput) => ({
            ...prevInput, // Keep the existing state
            inquiry: value, // Update the email field with the new value
        }));
    };

    return (
        <Modal
            open={InquiryModalIsShown}
            onClose={() => { dispatch(setInquiryModalIsShown(false)) }}>
            <ModalDialog sx={{
                width: { xs: '90%', md: '50%', lg: '30%' },
                background: '#5353A4',
                color: '#fff',
                padding: '0',
                border: '0'
            }}>
                <Box className="p-5">

                    <DialogTitle className="mb-2">INQUIRE NOW</DialogTitle>

                    <FormControl className="mb-2">
                        <Textarea minRows={1} placeholder="Your email" onChange={handleEmailChange} />
                    </FormControl>

                    <FormControl className="mb-2">
                        <Textarea minRows={2} placeholder="Type your inquiry..." onChange={handleInquiryChange} />
                    </FormControl>


                    <Divider className="m-5" sx={{
                        color: '#fff'
                    }}>OR</Divider>

                    <Box className="m-auto" >
                        <Box className="flex mb-2">
                            <EmailIcon className="mr-3" /> sales@leaflens.io
                        </Box>

                        <Box className="flex mb-1">
                            <CallIcon className="mr-3" /> +12069473706
                        </Box>
                    </Box>

                </Box>

                <Box sx={{ width: '100%', textAlign: 'end', marginTop: '10px', background: '#fff', padding: '10px' }}>
                    <Button
                        onClick={async () => {

                            const response = await fetch('/api/inquiries', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(input),
                            });

                            if (response.ok) {
                                dispatch(setInquiryModalIsShown(false))
                                dispatch(setSnackbarSuccessIsShown(true))
                            }
                        }}
                        sx={{
                            width: { xs: '100%', md: '120px' }, background: '#5353A4',
                            '&:hover': {
                                backgroundColor: '#BABADD',
                                color: '#FFFFFF',
                            },
                        }}>
                        Submit
                    </Button>
                </Box>
            </ModalDialog>
        </Modal >
    )
}

export default InquiryModal