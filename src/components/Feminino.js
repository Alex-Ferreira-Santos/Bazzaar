import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/produto'

class Feminino extends Component {
    render(){
        const feminino = require('../img/feminino1.jpg')
        const feminino2 = require('../img/feminino2.jpg')
        const feminino3 = require('../img/feminino3.jpg')
        const feminino4 = require('../img/feminino4.jpg')
        return (
            <View>
                <ScrollView contentContainerStyle={styles.moda}>
                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(feminino,'Roupa 1','R$40,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 1, preço de 40 reais'>
                        <View style={styles.produto}>          
                            <Image source={feminino} style={styles.roupa}/>
                            <Text>Roupa 1</Text>
                            <Text>R$40,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(feminino2,'Roupa 2','R$60,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 2, preço de 60 reais'>
                        <View style={styles.produto}>               
                            <Image source={feminino2} style={styles.roupa}/>   
                            <Text>Roupa 2</Text>
                            <Text>R$60,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(feminino3,'Roupa 3','R$80,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 3, preço de 80 reais'>
                        <View style={styles.produto}>     
                            <Image source={feminino3} style={styles.roupa}/>
                            <Text>Roupa 3</Text>
                            <Text>R$80,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                            this.props.image(feminino4,'Roupa 4','R$140,00')
                    }} accessibilityComponentType="button" accessible={true} accessibilityLabel='Roupa 4, preço de 140 reais'>
                        <View style={styles.produto}>                        
                            <Image source={feminino4} style={styles.roupa}/>
                            <Text>Roupa 4</Text>
                            <Text>R$140,00</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default Feminino