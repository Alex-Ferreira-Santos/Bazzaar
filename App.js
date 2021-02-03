import React,{Component} from 'react';
import {ScrollView,View,Text,Image, TouchableOpacity,TouchableHighlight} from 'react-native'
import styles from './src/styles/index'
import Header from './src/components/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        category: false
    }
    this.setCategory = this.setCategory.bind(this)
  }

  setCategory(){
    if(this.state.category){
      this.setState({category: false})
    }else{
      this.setState({category: true})
    }
  }

  render(){
    const image = require('./src/img/model.jpg')
    return (
      <View style={styles.container}>
        <Header categoria={this.setCategory}/>
        {this.state.category && (<View style={styles.category}>

          <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
            <Text>Novidades</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
            <Text>Promoções</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
            <Text>Feminino</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
            <Text>Masculino</Text>
          </TouchableHighlight>

        </View>)}
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>BAZZAAR</Text>
          <View style={styles.line}/>

          <View style={styles.thumb}>
            <View style={styles.buy}>
              <Text style={styles.off}>Até 50% de desconto</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.comprar}>Comprar</Text>
              </TouchableOpacity>
            </View>
            <Image source={image} style={styles.image}/>
          </View>

          <View style={styles.line}/>

          <Text>'https://br.freepik.com/fotos/verao'Verão foto criado por halayalex - br.freepik.com</Text>
        </ScrollView>
      </View>
    )
  }
}

export default App;
