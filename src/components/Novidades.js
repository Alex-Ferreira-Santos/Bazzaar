import React,{Component} from 'react';
import {View,Text,ScrollView,Image,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/produto'

class Novidades extends Component {
    render() {
        const feminino = require('../img/feminino1.jpg')
        const feminino2 = require('../img/feminino2.jpg')
        const masculino3 = require('../img/masculino3.jpg')
        const masculino4 = require('../img/masculino4.jpg')
        return (
            <View>
                <ScrollView contentContainerStyle={styles.moda}>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(feminino,'Roupa 1','R$40,00')
                    }}>
                        <View style={styles.produto}>
                            <Text style={styles.novo}>Novo!</Text>
                            <Image source={feminino} style={styles.roupa}/>
                            <Text>Roupa 1</Text>
                            <Text>R$40,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(feminino2,'Roupa 2','R$80,00')
                    }}>
                    <View style={styles.produto}>
                        <Text style={styles.novo}>Novo!</Text>
                        <Image source={feminino2} style={styles.roupa}/>
                        <Text>Roupa 2</Text>
                        <Text>R$80,00</Text>
                    </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(masculino3,'Roupa 3','R$120,00')
                    }}>
                        <View style={styles.produto}>
                            <Text style={styles.novo}>Novo!</Text>
                            <Image source={masculino3} style={styles.roupa}/>
                            <Text>Roupa 3</Text>
                            <Text>R$120,00</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={()=>{
                        this.props.image(masculino4,'Roupa 4','R$140,00')
                    }}>
                        <View style={styles.produto}>
                            <Text style={styles.novo}>Novo!</Text>
                            <Image source={masculino4} style={styles.roupa}/>
                            <Text>Roupa 4</Text>
                            <Text>R$140,00</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default Novidades