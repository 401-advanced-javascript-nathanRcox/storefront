import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// AppBar color options: "default","inherit","primary","secondary","transparent".
// variant for the cart's link button include: "h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline","srOnly","inherit"

const mapDispatchToProps = { };

function Header(props){

  useEffect(() => console.log('Props on header:', props), [props]);

  return(
  <AppBar className="AppBar" color="transparent" position="static">
    <Container maxWidth='md'>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Typography variant="h1">
          <Link to="/">
          StoreFrontPorch
          </Link>
        </Typography>
        <Typography >
          <Link to="/cart" variant="h5">
            Cart ({props.cartCount})
          </Link>
        </Typography>
      </Grid>
    </Container>
  </AppBar>
  )
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  cartCount: state.cart.cartCount
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
