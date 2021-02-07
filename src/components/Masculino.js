import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableWithoutFeedback} from 'react-native'
import styles from '../styles/produto'

class Masculino extends Component {
    render(){
        const masculino = require('../img/masculino1.jpg')
        const masculino2 = require('../img/masculino2.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>

                <ScrollView contentContainerStyle={styles.moda}>
                <View style={styles.produto}>
                    <TouchableWithoutFeedback onPress={()=>{
                        this.props.image(masculino2)
                    }}>
                        <Image source={masculino} style={styles.roupa}/>
                    </TouchableWithoutFeedback>
                    <Text>Roupa 1</Text>
                    <Text>R$40,00</Text>
                </View>

                <View style={styles.produto}>
                    <TouchableWithoutFeedback onPress={()=>{
                        this.props.image(masculino2)
                    }}>
                        <Image source={masculino2} style={styles.roupa}/>
                    </TouchableWithoutFeedback>
                    <Text>Roupa 2</Text>
                    <Text>R$60,00</Text>
                </View>

                <View style={styles.produto}>
                    <TouchableWithoutFeedback onPress={()=>{
                        this.props.image(masculino3)
                    }}>
                        <Image source={masculino3} style={styles.roupa}/>
                    </TouchableWithoutFeedback>
                    <Text>Roupa 3</Text>
                    <Text>R$80,00</Text>
                </View>

                <View style={styles.produto}>
                    <TouchableWithoutFeedback onPress={()=>{
                        this.props.image(masculino4)
                    }}>
                        <Image source={masculino4} style={styles.roupa}/>
                    </TouchableWithoutFeedback>
                    <Text>Roupa 4</Text>
                    <Text>R$140,00</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default Masculino;