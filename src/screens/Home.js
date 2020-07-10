import React, { useEffect } from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import {fetchRecipes}  from '../redux/actions/recipeActions'
import {Recipe} from '../components/Recipe'

const Home = ({ loading, hasErrors, recipes, dispatch}) => {
    useEffect(() => {
      dispatch(fetchRecipes())
    }, [dispatch])
    //let mappedRecipes = Object.keys(recipes).map (key => {})
  
    const renderRecipes = () => {
      if (loading) {
        return <Text>Loading posts...</Text>
      } else if (hasErrors) {
        return <Text>Unable to display posts.</Text>
      } else{
        return recipes.map(recipe => {
          return <Recipe key= {recipe.id} recipe ={recipe} />
        })
      }
    }

  return (
    <View style={styles.container}>
      <Text >Home...</Text>
      {renderRecipes()}
    </View>
  )
}

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  recipes: state.recipes.recipes,
  hasErrors: state.recipes.hasErrors,
});

export default connect (mapStateToProps) (Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
