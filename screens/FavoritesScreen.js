import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux'
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import {View,StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText'
import {DrawerActions} from 'react-navigation-drawer'


const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  
  if (!favMeals || favMeals.length === 0) {
        return <View style = {styles.content}>
          <DefaultText>No Favourite Meals Found. Start adding some</DefaultText>
        </View>
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (() => {
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    }
    )
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
