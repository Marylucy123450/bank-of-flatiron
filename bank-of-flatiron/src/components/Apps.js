import React from "react";
import Accounts from "./Accounts";
import {AppBar,Toolbar, IconButton, Typography} from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function App() {
  return (
    <div>
      <AppBar position='static' style={{ background: '#2E3B55', padding: 20 }} >
      <Toolbar>
      <IconButton size= 'large' edge='start' color='inherit' aria-label='logo'>
      <AccountBalanceIcon/>         
      </IconButton>
      <Typography variant="h6" component='div'>
      Bank of Flatiron
      </Typography>             
      </Toolbar>      
      </AppBar>   
      
      <Accounts />
    </div>
  );
}

export default App;
