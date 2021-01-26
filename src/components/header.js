import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



function Header(props){
  return(
  <AppBar className="AppBar" color="white" position="static">
    <Container maxWidth='md'>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography variant="h1">StoreFrontPorch</Typography>
        <Typography >
          <Link
            component="button"
            variant="body2"
            color="inherit"
          >
            Cart
          </Link>
        </Typography>
      </Grid>
    </Container>
  </AppBar>
  )
};

export default Header;
