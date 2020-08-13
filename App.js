import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from'react'
import IndexScreen from './src/screens/IndexScreen'
import {Provider} from './src/context/BlogContext'
import showScreen from './src/screens/showScreen';
import createScreen from './src/screens/createScreen';
import EditScreen from './src/screens/EditScreen';

const navigator=createStackNavigator({
  Index: IndexScreen,
  Create: createScreen,
  Show:showScreen,
  Edit:EditScreen

},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Blogs'
  }
})

const App=createAppContainer(navigator);
export default ()=>{
  return <Provider>
    <App/>
  </Provider>
}