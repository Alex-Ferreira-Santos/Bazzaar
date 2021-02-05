import React,{Component} from 'react';
import {View,Text} from 'react-native'
import styles from '../styles/cartoes'
import Icon from 'react-native-vector-icons/FontAwesome'

class Cartoes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Aceitamos diversos tipos de cartões</Text>
                <View style={styles.cartoes}>
                    <Icon name="cc-visa" size={60} color="rgb(0,76,143)"/>
                    <Icon name='cc-mastercard' size={60} color='rgb(230,86,47)'/>
                    <Icon name='cc-amex' size={60} color='rgb(0,118,177)'/>
                </View>
                <View style={styles.cartoes}>
                    <Icon name='cc-paypal' size={60} color='rgb(36,42,94)'/>
                    <Icon name='cc-diners-club' size={60} color='rgb(0,98,161)'/>
                    <Icon name='cc-discover' size={60} color='rgb(235,124,44)'/>
                </View>
            </View>
        )
    }
}

export default Cartoes;