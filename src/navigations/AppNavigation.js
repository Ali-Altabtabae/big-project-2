import { Text } from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
/* import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' */
import HomeScreen from "../screens/Home/HomeScreen";
import FieldsScreen from "../screens/Fields/FieldsScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import TeamsScreen from "../screens/Teams/TeamsScreen";
import MyTeamScreen from "../screens/MyTeam/MyTeamScreen";
import RecipeScreen from "../screens/Recipe/RecipeScreen";
import TeamDetailsScreen from "../screens/TeamDetails/TeamDetailsScreen";
import FieldDetailsScreen from "../screens/FieldDetails/FieldDetailsScreen";
import RecipesListScreen from "../screens/RecipesList/RecipesListScreen";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import IngredientScreen from "../screens/Ingredient/IngredientScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import IngredientsDetailsScreen from "../screens/IngredientsDetails/IngredientsDetailsScreen";
import TimeListScreen from "../screens/TimeList/TimeListScreen";
import Signin from "../screens/Signin/Signin";
import Signup from "../screens/Signup/Signup";

import JoinTeamButton from "../components/JoinTeamButton/JoinTeamButton"
/* const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} */

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Signin: Signin,
    Signup: Signup,
    Fields: FieldsScreen,
    Categories: CategoriesScreen,
    Teams: TeamsScreen,
    MyTeam: MyTeamScreen,
    Recipe: RecipeScreen,
    TeamDetails: TeamDetailsScreen,
    FieldDetails: FieldDetailsScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    TimeList: TimeListScreen,

  },
  {
    initialRouteName: "Signin",
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerRight: () => <Text>Ali</Text>,
    }),
  }
);

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  },{
    
  }
);

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;
