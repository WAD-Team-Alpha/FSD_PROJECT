import React from 'react';
import classes from './search_bar.module.css';

const SearchBar = () => {
    return <React.Fragment>
        <div className="col-md-2 col-sm-2"></div>
        <div className="col-md-5 col-sm-5 hey">
            <input type="text" className={classes.search_here} />
            <button className={classes.submit}>Search</button>
        </div>
    </React.Fragment>
}


export default SearchBar;