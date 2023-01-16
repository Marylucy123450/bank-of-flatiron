import React from "react";
import {AppBar,Toolbar, IconButton, Typography} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material";


function Search({Search}) {
  
  return (
    <div>





<AppBar>

<SearchIcon>
<input type="text" placeholder="Search Transactions"onChange={Search}/>
</SearchIcon>

</AppBar>  
    </div>
  );
}

export default Search;
