import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import styles from '../styles/header'
import Icon from 'react-native-vector-icons/Ionicons'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: false
        }
    }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.container}>
                    <View style={styles.view}> 
                        <TextInput placeholder='buscar' style={styles.input}/>
                        <Icon name='search' size={20} style={styles.icon}/>
                    </View>
                    <Icon name='log-in' size={30} color='#fff'/>
                    <Icon name='cart' size={30} color='#fff'/>
                    <Icon name='menu' size={35} color='#fff' onPress={()=>this.setState({category: true})}/>
                </View>
                {this.state.category && (<View style={styles.category}>
                    <TouchableHighlight style={styles.button} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                        <Text>Novidades</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                        <Text>Promoções</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                        <Text>Feminino</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                        <Text>Masculino</Text>
                    </TouchableHighlight>
                </View>)}
            </View>
        )
    }
}

export default Header