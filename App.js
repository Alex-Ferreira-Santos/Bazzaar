import React,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './src/components/HomePage'
import Categorias from './src/components/Categorias'

import Icon from 'react-native-vector-icons/Ionicons'
import Sobre from './src/components/Sobre';
import Cartoes from './src/components/Cartoes';
import Produto from './src/components/Produto'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
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

function ProdutoNav(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Categorias' component={Categorias} initialParams={{promocoes: false, show: true, text: 'Ocultar', name: 'arrow-up-sharp',feminino: false,masculino:false,novidades: false}} options={{ headerShown: false }}/>
      <Stack.Screen name='Produto' component={Produto} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
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
          <Tab.Screen name='Categorias' component={ProdutoNav}/>
          <Tab.Screen name='Sobre_a_loja' component={Sobre}/>
          <Tab.Screen name='Cartões' component={Cartoes}/>
        </Tab.Navigator>    
      </NavigationContainer>
    )
  }
}

export default App;
