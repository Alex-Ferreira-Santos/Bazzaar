import React,{Component} from 'react';
import {ScrollView,View,Text,Image, TouchableOpacity,TouchableHighlight, Linking} from 'react-native'
import styles from '../styles/index'
import Header from './Header'
import Icon from 'react-native-vector-icons/Ionicons'

class Home extends Component {
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
    const capa = require('../img/model.jpg')
    const feminino = require('../img/feminino1.jpg')
    const feminino2 = require('../img/feminino2.jpg')
    const feminino3 = require('../img/feminino3.jpg')
    const feminino4 = require('../img/feminino4.jpg')
    const masculino = require('../img/masculino1.jpg')
    const masculino2 = require('../img/masculino2.jpg')
    const masculino3 = require('../img/masculino3.jpg')
    const masculino4 = require('../img/masculino4.jpg')
    const loja = require('../img/loja.jpg')
    const loja2 = require('../img/loja2.jpg')
    return (
      <View style={styles.container}>
        <Header categoria={this.setCategory}/>
        {this.state.category && (<View style={styles.category} accessibilityLiveRegion="polite">

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

          <View style={styles.line}/>

          <Text style={[styles.subtitle,styles.center,styles.welcome]}>Bem vindo a BAZZAAR</Text>
          <Text style={[styles.center,styles.text,styles.welcome]}>Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você. Descubra <Text style={{color:'red'}}>our story</Text> e aproveite as promoções.</Text>
          <Image source={loja} style={[styles.image,{marginBottom:10}]}/>

          <View style={styles.address}>
            <Image source={loja2} style={styles.image}/>
            <Text style={[styles.center,styles.addressText]}>Rua Eusébio 10</Text>
            <Text style={[styles.center,styles.addressText]}>Centro, Cidade das Águas</Text>
            <Text style={[styles.center,{marginVertical: 10}]}>Aberto de segunda a sexta das 10:00 às 21:00</Text>
          </View>

          <View style={styles.line}/>

          
          <Text style={styles.follow}>Siga-nos</Text>
          <View style={styles.redes}>
            <Icon name='logo-twitter' size={30} color='#000'/>
            <Icon name='logo-facebook' size={30} color='#000'/>
            <Icon name='logo-pinterest' size={30} color='#000'/>
            <Icon name='logo-instagram' size={30} color='#000'/>
            <Icon name='logo-snapchat' size={30} color='#000'/>
          </View>

          <View style={styles.line}/>

          <Text style={styles.follow}>Aceitamos diversos tipos de cartões</Text>
          
        </ScrollView>
      </View>
    )
  }
}

export default Home;