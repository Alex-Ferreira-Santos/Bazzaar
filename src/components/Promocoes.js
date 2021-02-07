import React,{Component} from 'react';
import {View,Text,ScrollView,Image,TouchableNativeFeedback} from 'react-native'
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
                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(feminino,'Roupa 1','R$40,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 1, preço de 40 reais'>
                        <View style={styles.produto}>
                            <Image source={feminino} style={styles.roupa}/>
                            <Text>Roupa 1</Text>
                            <Text>De <Text style={styles.last}>R$60,00</Text> por <Text style={styles.now}>R$40,00</Text></Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(feminino2,'Roupa 2','R$60,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 2, preço de 60 reais'>
                        <View style={styles.produto}>
                            <Image source={feminino2} style={styles.roupa}/>
                            <Text>Roupa 2</Text>
                            <Text>De <Text style={styles.last}>R$80,00</Text> por <Text style={styles.now}>R$60,00</Text></Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(masculino3,'Roupa 3','R$80,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 3, preço de 80 reais'>
                        <View style={styles.produto}>
                            <Image source={masculino3} style={styles.roupa}/>
                            <Text>Roupa 3</Text>
                            <Text>De <Text style={styles.last}>R$120,00</Text> por <Text style={styles.now}>R$80,00</Text></Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(masculino4,'Roupa 4','R$110,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 4, preço de 110 reais'>
                        <View style={styles.produto}>
                            <Image source={masculino4} style={styles.roupa}/>
                            <Text>Roupa 4</Text>
                            <Text>De <Text style={styles.last}>R$140,00</Text> por <Text style={styles.now}>R$110,00</Text></Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default Promocoes