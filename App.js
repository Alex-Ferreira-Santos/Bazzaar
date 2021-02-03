import React,{Component} from 'react';
import {ScrollView,View,Text} from 'react-native'
import styles from './src/styles/index'

class App extends Component {
  render(){
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>BAZZAAR</Text>
      </ScrollView>
    )
  }
}

export default App;
