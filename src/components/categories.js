import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';
import { categorySelection } from '../store/categories-reducer';
// import { get } from '../store/API-reducer';

const mapDispatchToProps = { categorySelection };

function SelectCategory(props) {

  const selectedCategory = (name) => {
    props.categorySelection(name);
  };

  return (
    <Container maxWidth='md'>
        <Typography variant="h5">
          Browse Our Categories
        </Typography>
        <Typography variant="h5">
            {props.category.categories.map((
              selection, idx) => (
                <div key={idx}>
                  <Link to="/" component="button" variant="body2" color="inherit" onClick={() => selectedCategory(selection.name)}>
                    {selection.description}
                  </Link>
                </div>
              )
            )}
        </Typography>
    </Container>
  )
}

const mapStateToProps = state => ({ 
  category: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
