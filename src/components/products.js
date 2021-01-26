import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/products-reducer';
import { categorySelection } from '../store/categories-reducer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const mapDispatchToProps = { increment, categorySelection };

function Products(props) {
  
  const selectedProduct = (name) => {
    props.increment(name);
  }

  useEffect(() => console.log('Props on Products:', props), [props]);

  // Use to further style the cards: https://material-ui.com/components/cards/#simple-card
  return (
    <Container maxWidth='md'>
      <Container id="product-selection">
        {props.products.products.map((product, idx) => (
          <>
            {(props.activeCategory === product.category) ?
              <Card>
                <CardContent key={idx}>
                  <Typography>{product.description}</Typography>
                  <Typography>Price: {product.price}</Typography>
                  <Typography>Number in Stock: {product.inventoryCount}</Typography>
                  <button onClick={() => selectedProduct(product.name)}>Add to Cart</button>
                </CardContent>
              </Card>
              : ''
            }
          </>
        ))}
    </Container>
  </Container>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.active,
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
