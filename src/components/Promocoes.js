import React,{Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native'
import styles from '../styles/produto'

class Promocoes extends Component {
    render() {
        const feminino = require('../img/feminino3.jpg')
        const feminino2 = require('../img/feminino4.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>
                <ScrollView contentContainerStyle={styles.moda}>
                <View style={styles.produto}>
                    <Image source={feminino} style={styles.roupa}/>
                    <Text>Roupa 1</Text>
                    <Text>De <Text style={styles.last}>R$60,00</Text> por <Text style={styles.now}>R$40,00</Text></Text>
                </View>

                <View style={styles.produto}>
                    <Image source={feminino2} style={styles.roupa}/>
                    <Text>Roupa 2</Text>
                    <Text>De <Text style={styles.last}>R$80,00</Text> por <Text style={styles.now}>R$60,00</Text></Text>
                </View>

                <View style={styles.produto}>
                    <Image source={masculino3} style={styles.roupa}/>
                    <Text>Roupa 3</Text>
                    <Text>De <Text style={styles.last}>R$120,00</Text> por <Text style={styles.now}>R$80,00</Text></Text>
                </View>

                <View style={styles.produto}>
                    <Image source={masculino4} style={styles.roupa}/>
                    <Text>Roupa 4</Text>
                    <Text>De <Text style={styles.last}>R$140,00</Text> por <Text style={styles.now}>R$110,00</Text></Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default Promocoes