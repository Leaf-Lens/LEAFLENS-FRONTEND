'use client'

import React from 'react'
import { Snackbar, Button } from '@mui/joy'
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import { setSnackbarSuccessIsShown } from '@/app/globalredux/features/app/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/globalredux/store';

const SnackbarSuccess = () => {

    const dispatch = useDispatch();
    const snackbarIsShown = useSelector((state: RootState) => state.app.snackbarSuccessIsShown)

    const setSnackbarClosed = () => {
        dispatch(setSnackbarSuccessIsShown(false))
    }

    return (
        <Snackbar
            variant="soft"
            color="success"
            open={snackbarIsShown}
            onClose={setSnackbarClosed}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
            endDecorator={
                <Button
                    onClick={setSnackbarClosed}
                    size="sm"
                    variant="soft"
                    color="success"
                >
                    Dismiss
                </Button>
            }
        >
            Your inquiry has been sent to us.
        </Snackbar>
    )
}

export default SnackbarSuccess