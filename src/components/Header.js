import React,{Component} from 'react';
import {View,TextInput,t} from 'react-native'
import styles from '../styles/header'
import Icon from 'react-native-vector-icons/Ionicons'

class Header extends Component{
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.container}>
                    <View style={styles.view}> 
                        <TextInput placeholder='buscar' style={styles.input}/>
                        <Icon name='search' size={20} style={styles.icon}/>
                    </View>
                    <Icon name='log-in' size={30} color='#fff' accessible={true}accessibilityLabel={'Toque no canto superior direito e depois para a esquerda para fazer login!'}/>
                    <Icon name='cart' size={30} color='#fff' accessible={true}accessibilityLabel={'Toque no canto superior direito e depois um pouco para a esquerda para ir para o carrinho!'}/>
                    <Icon name='menu' size={35} color='#fff' onPress={()=>{this.props.categoria()}} accessible={true} accessibilityLabel={'Toque no canto superior direito para ver as categorias!'}/>
                </View>
            </View>
        )
    }
}

export default Header