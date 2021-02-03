import React,{Component} from 'react';
import {ScrollView,View,Text} from 'react-native'
import styles from './src/styles/index'
import Header from './src/components/Header'

class App extends Component {
  render(){
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Header/>
        <Text>BAZZAAR</Text>
      </ScrollView>
    )
  }
}

export default App;
