import { Button, Link } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'

const FooterContent = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', backgroundColor: "#000125" }}>
                <Box>
                    <Link
                        component="button"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{ margin: "1.7em", color: "#a9abaa" }}
                        underline="none"
                    >
                        Terms of Service
                    </Link>
                </Box>
                <Box>
                    <Link
                        component="button"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{ margin: "1.7em", color: "#a9abaa" }}
                        underline="none"
                    >
                        Privacy
                    </Link>
                </Box>
                <Box>
                    <Link
                        component="button"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{ margin: "1.7em", color: "#a9abaa" }}
                        underline="none"
                    >
                        Content Policy
                    </Link>
                </Box>
                <Box sx={{ flexGrow: '1' }}>
                    <Link
                        component="button"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        sx={{ margin: "1.7em", color: "#a9abaa" }}
                        underline="none"
                    >
                        Help Center
                    </Link>
                </Box>
                <Button variant="contained"
                    sx={{ height: '2em', fontSize: '1em', mt: '1.4em', backgroundColor: '#5CDB95', color: '#05386B', fontWeight: '800', mr: '2em' }}>
                    Support Us
                </Button>
            </Box>
        </div>
    )
}

export default FooterContent