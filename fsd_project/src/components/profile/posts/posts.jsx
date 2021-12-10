//import { TextField } from '@mui/material';
//import React, { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import './posts.module.css';
import { useState } from 'react'
//import { grid } from '@mui/system';
//import { TextField } from '@mui/material';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { ClassNames } from '@emotion/react';
import classes from "./posts.module.css";

function Posts() {

    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
       // alert('You have posted the post.')
       setSubmitting(true);

       setTimeout(() => {
           setSubmitting(false);
       }, 3000)
    }

    const Input = styled('input')({
        display: 'none',
      });

    return (

        <div>
            {/* <h3 text-allign="left">Write your feed here</h3> */}
            
            <h4>
                Write your feed here
            </h4>
            {submitting &&
             <div>Submitting Form...</div>
            }
            <form>
                <fieldset>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                    >

                    <Grid container spacing={2}>
                        
                         
                    <Grid item xs={12} sm={12} md={12}>

                    <TextField
                        fullWidth
                        helperText=" "
                        id="Title_posts"
                        label="Tile"
                        size = "small"
                    />

                    </Grid>

                    <Grid item lg={12}>
                        
                    <TextField
                        fullWidth
                        helperText=" "
                        id="description_posts"
                        label="Description"
                        multiline
                        //rows={6}
                        size = "small"
                    />

                    </Grid>

                    <div className={classes.upload}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                        Upload
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                        </IconButton>
                    </label>
                    </div>

                    </Grid>

                </Box>
                    
                </fieldset>
                <div classname={classes.post_button}>
                <button type="submit">Post...</button>
                </div>
            </form>
        </div>
    )

}

export default Posts