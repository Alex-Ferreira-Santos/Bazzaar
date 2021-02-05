import React,{Component} from 'react';
import {ScrollView,View,Text,Image} from 'react-native'
import styles from '../styles/sobre'
import Icon from 'react-native-vector-icons/Ionicons'

class Sobre extends Component {
    render() {
        const loja = require('../img/loja.jpg')
        const loja2 = require('../img/loja2.jpg')
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={[styles.subtitle,styles.center,styles.welcome]}>Bem vindo a BAZZAAR</Text>
                <Text style={[styles.center,styles.text,styles.welcome]}>Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você. Descubra <Text style={{color:'red'}}>our story</Text> e aproveite as promoções.</Text>
                <Image source={loja} style={[styles.image,{marginBottom:10}]}/>

                <View style={styles.address}>
                    <Image source={loja2} style={styles.image}/>
                    <Text style={[styles.center,styles.addressText]}>Rua Eusébio 10</Text>
                    <Text style={[styles.center,styles.addressText]}>Centro, Cidade das Águas</Text>
                    <Text style={[styles.center,{marginVertical: 10}]}>Aberto de segunda a sexta das 10:00 às 21:00</Text>
                </View>

                <Text style={styles.follow}>Siga-nos</Text>
                <View style={styles.redes}>
                    <Icon name='logo-twitter' size={30} color='#000'/>
                    <Icon name='logo-facebook' size={30} color='#000'/>
                    <Icon name='logo-pinterest' size={30} color='#000'/>
                    <Icon name='logo-instagram' size={30} color='#000'/>
                    <Icon name='logo-snapchat' size={30} color='#000'/>
                </View>
            </ScrollView>
        )
    }
}

export default Sobre