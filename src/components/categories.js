import React from 'react';
import { connect } from 'react-redux';
import { categorySelection } from '../store/categories-reducer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const mapDispatchToProps = { categorySelection };

function SelectCategory(props) {
  console.log('Props on Categories:', props);

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
                  <Link component="button" variant="body2" color="inherit" onClick={() => selectedCategory(selection.name)}>
                    {selection.description}
                  </Link>
                </div>
              )
            )}
        </Typography>

        {/* <section id="category-selection">
          {props.category.categories.map((selection, idx) => (
            <ul key={idx}>
              <li>{selection.display}</li>
              <li>{selection.description}</li>
            <button onClick={() => selectedCategory(selection.name)}>Select this Category</button>
            </ul>
          ))}
        </section> */}
    </Container>
  )
}

const mapStateToProps = state => ({ 
  category: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
