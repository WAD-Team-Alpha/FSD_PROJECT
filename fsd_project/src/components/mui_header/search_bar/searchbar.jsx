import React from 'react';
import useSearchStyles from './search.style';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
    const [Search, SearchIconWrapper, StyledInputBase] = useSearchStyles();
    return (
        <Search fullWidth>
          <SearchIconWrapper>
            <SearchIcon sx={{ fontSize: '1.6em', }}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
    )
}

export default Searchbar;
