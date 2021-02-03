import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../styles/header'
import Icon from 'react-native-vector-icons/Ionicons'

class Header extends Component{
    render() {
        return (
            <View style={{width:'100%'}}>
                <View style={styles.container}>
                    <View style={styles.view}> 
                        <TextInput placeholder='buscar' style={styles.input}/>
                        <Icon name='search' size={20} style={styles.icon}/>
                    </View>
                    <Icon name='log-in' size={30} color='#fff'/>
                    <Icon name='cart' size={30} color='#fff'/>
                    <Icon name='menu' size={35} color='#fff'/>
                </View>
                <View style={styles.category}>
                    <TouchableHighlight style={styles.button}>
                        <Text>Novidades</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <Text>Promoções</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <Text>Feminino</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <Text>Masculino</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default Header