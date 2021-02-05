import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/produto'

class Masculino extends Component {
    render(){
        const masculino = require('../img/masculino1.jpg')
        const masculino2 = require('../img/masculino2.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>
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
            </View>
        )
    }
}

export default Masculino;