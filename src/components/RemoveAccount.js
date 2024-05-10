import { Alert, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

export default function RemoveAccount() {
    const [isOpened, setOpened] = useState(false)

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleSubmit = async () => {
        setOpened(true);
        fetch('https://api.restful-api.dev/objects/6', {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete object');
                }
                console.log('Object deleted successfully');
            })
            .catch(error => {
                console.error('Error:', error);
            });
        await delay(2000);
        setOpened(false);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '100vh',
            width: '100%',
            background: 'linear-gradient(#FFFFFF, #FB6562)',
        }}>

            {/* Left */}
            <Box sx={{
                display: "flex",
                height: '100%',
                width: '100%',
                justifyContent: "center",
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: "column",
                    height: '50%',
                    width: '30%',
                    marginTop: 20
                }}>
                    {/* Logo */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                    }}>
                        <Box sx={{
                            height: "15vh",
                            width: "15vh",
                            backgroundImage: "url('/adaptive-icon.png')",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }} />
                        <Typography fontSize={"2vw"}>WhatEat</Typography>
                    </Box>
                    <Box sx={{
                        marginTop: "10%",
                        marginBottom: "10%"
                    }}>
                        <Typography fontSize={"2vw"} textAlign={"center"}>Xác nhận xóa tài khoản của bạn?</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                borderRadius: 10,
                                textTransform: "none",
                                width: "50%",
                                background: "black",
                                color: "white",
                                '&:hover': {
                                    background: 'black',
                                    opacity: 0.7
                                },
                            }}
                            onClick={
                                () => {
                                    handleSubmit()
                                }}>
                            XÓA TÀI KHOẢN
                        </Button>
                    </Box>
                    {
                        isOpened &&
                        <Alert sx={{ marginTop: "10%" }} icon={<CheckIcon fontSize="inherit" />} severity="success">
                            Xóa thành công
                        </Alert>
                    }
                </Box>
            </Box>
        </Box>
    )
}
