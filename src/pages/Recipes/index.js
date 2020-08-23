import React from 'react';
import { connect } from 'react-redux';
import { Container, MyRecipeList } from '../../components';
import { fetchRecipes } from '../../actions';

class Recipes extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  render() {
    return (
      <Container className="container px-8 py-4 mx-8 my-4">
        <h1>My Recipes</h1>
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.isLoading === false && <MyRecipeList recipes={this.props.recipes} />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.recipes.isFetching,
    recipes: state.recipes.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => { dispatch(fetchRecipes()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
