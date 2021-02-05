import React,{Component} from 'react';
import {ScrollView,View,Text,Image, TouchableOpacity,TouchableHighlight, Linking} from 'react-native'
import styles from '../styles/index'
import Header from './Header'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
    
  }


  render(){
    const capa = require('../img/model.jpg')
    const feminino = require('../img/feminino1.jpg')
    const feminino2 = require('../img/feminino2.jpg')
    const feminino3 = require('../img/feminino3.jpg')
    const feminino4 = require('../img/feminino4.jpg')
    const masculino = require('../img/masculino1.jpg')
    const masculino2 = require('../img/masculino2.jpg')
    const masculino3 = require('../img/masculino3.jpg')
    const masculino4 = require('../img/masculino4.jpg')
    return (
      <View style={styles.container}>

        <Header/>

        <ScrollView style={styles.Scrollcontainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>BAZZAAR</Text>
          <View style={styles.line}/>

          <View style={styles.thumb}>
            <View style={styles.buy}>
              <Text style={styles.off}>Até 50% de desconto</Text>
              <TouchableOpacity style={styles.button} accessible={true}accessibilityLabel={'Toque no centro esquerdo para enviar!'}>
                <Text style={styles.comprar}>Comprar</Text>
              </TouchableOpacity>
            </View>
            <Image source={capa} style={styles.image}/>
          </View>
          <Text onPress={()=>Linking.openURL('https://br.freepik.com/fotos/verao')}>Verão foto criado por halayalex - br.freepik.com</Text>

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


          
        </ScrollView>
      </View>
    )
  }
}

export default Home;