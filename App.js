import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './src/components/HomePage'
import Categorias from './src/components/Categorias'

import Icon from 'react-native-vector-icons/Ionicons'
import Sobre from './src/components/Sobre';
import Cartoes from './src/components/Cartoes';

const Tab = createBottomTabNavigator()
const icons = {
  Home:{
    name:'home'
  },
  Categorias:{
    name:'menu'
  },
  Sobre_a_loja:{
    name:'business'
  },
  Cartões:{
    name:'card-outline'
  }
}
class App extends Component {


  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=> ({
          tabBarIcon: ({color,size})=> {
            const {name} = icons[route.name]
            return <Icon name={name} size={size} color={color}/>
          }
        })}>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Categorias' component={Categorias}/>
          <Tab.Screen name='Sobre_a_loja' component={Sobre}/>
          <Tab.Screen name='Cartões' component={Cartoes}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
