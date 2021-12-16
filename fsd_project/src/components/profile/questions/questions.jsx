import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import classes from './questions.module.css';

function Item(props) {
  const { sx, ...other } = props;
  
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Questions() {
    const qns = ["How to reach there", "Can you explain feature y", "What are the timings", "Is there any special offers", "Is there online booking", "How is the online services"];
  return (
    <div>
    {qns.map((question) => (
        <div className={classes.like}>
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
            <Item>{question} <br /> <ThumbUpIcon/> <ThumbDownIcon/></Item>
        </Box>
        </div>
        
    ))}
    </div>
  );
};


