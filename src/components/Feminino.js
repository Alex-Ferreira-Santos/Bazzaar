import React,{Component} from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/produto'

class Feminino extends Component {
    render(){
        const feminino = require('../img/feminino1.jpg')
        const feminino2 = require('../img/feminino2.jpg')
        const feminino3 = require('../img/feminino3.jpg')
        const feminino4 = require('../img/feminino4.jpg')
        return (
            <View>
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
            </View>
        )
    }
}

export default Feminino