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
    const capa = require('./src/img/model.jpg')
    const feminino = require('./src/img/feminino1.jpg')
    const feminino2 = require('./src/img/feminino2.jpg')
    const feminino3 = require('./src/img/feminino3.jpg')
    const feminino4 = require('./src/img/feminino4.jpg')
    const masculino = require('./src/img/masculino1.jpg')
    const masculino2 = require('./src/img/masculino2.jpg')
    const masculino3 = require('./src/img/masculino3.jpg')
    const masculino4 = require('./src/img/masculino4.jpg')
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
        <ScrollView style={styles.Scrollcontainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>BAZZAAR</Text>
          <View style={styles.line}/>

          <View style={styles.thumb}>
            <View style={styles.buy}>
              <Text style={styles.off}>Até 50% de desconto</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.comprar}>Comprar</Text>
              </TouchableOpacity>
            </View>
            <Image source={capa} style={styles.image}/>
          </View>

          <View style={styles.line}/>

          <Text style={styles.subtitle}>Moda Feminina</Text>

          <ScrollView horizontal={true} contentContainerStyle={styles.moda}>
            <View style={styles.produto}>
              <Image source={feminino} style={styles.roupa}/>
              <Text>Roupa 1</Text>
              <Text>R$40,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={feminino2} style={styles.roupa}/>
              <Text>Roupa 2</Text>
              <Text>R$60,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={feminino3} style={styles.roupa}/>
              <Text>Roupa 3</Text>
              <Text>R$80,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={feminino4} style={styles.roupa}/>
              <Text>Roupa 4</Text>
              <Text>R$140,00</Text>
            </View>
          </ScrollView>

          <View style={styles.line}/>

          <Text style={styles.subtitle}>Moda Masculina</Text>

          <ScrollView horizontal={true} contentContainerStyle={styles.moda}>
            <View style={styles.produto}>
              <Image source={masculino} style={styles.roupa}/>
              <Text>Roupa 1</Text>
              <Text>R$40,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={masculino2} style={styles.roupa}/>
              <Text>Roupa 2</Text>
              <Text>R$60,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={masculino3} style={styles.roupa}/>
              <Text>Roupa 3</Text>
              <Text>R$80,00</Text>
            </View>

            <View style={styles.produto}>
              <Image source={masculino4} style={styles.roupa}/>
              <Text>Roupa 4</Text>
              <Text>R$140,00</Text>
            </View>
          </ScrollView>

          <Text>'https://br.freepik.com/fotos/verao'Verão foto criado por halayalex - br.freepik.com</Text>
        </ScrollView>
      </View>
    )
  }
}

export default App;
