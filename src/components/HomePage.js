import React,{Component} from 'react';
import {ScrollView,View,Text,Image, TouchableOpacity,TouchableHighlight, Linking} from 'react-native'
import styles from '../styles/index'
import Header from './Header'

class Home extends Component {
  render(){
    const capa = require('../img/model.jpg')
    return (
      <View style={styles.container}>

        <Header/>

        <ScrollView style={styles.Scrollcontainer} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>BAZZAAR</Text>
          <View style={styles.line}/>

          <View style={styles.thumb}>
            <View style={styles.buy}>
              <Text style={styles.off}>Até 50% de desconto</Text>
              <TouchableOpacity style={styles.button} accessible={true} accessibilityLabel={'Toque no centro esquerdo para enviar!'} onPress={
                ()=>this.props.navigation.navigate('Categorias',{screen:'Categorias',params:{promocoes:true,show:false,text:'Expandir',name:'arrow-down',feminino: false,masculino:false,novidades: false}})
                //
                }>
                <Text style={styles.comprar}>Comprar</Text>
              </TouchableOpacity>
            </View> 
            <Image source={capa} style={styles.image}/>
          </View>
          <Text onPress={()=>Linking.openURL('https://br.freepik.com/fotos/verao')}>Verão foto criado por halayalex - br.freepik.com</Text>
         
        </ScrollView>
      </View>
    )
  }
}

export default Home;