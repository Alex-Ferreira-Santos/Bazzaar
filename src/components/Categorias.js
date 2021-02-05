import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import styles from '../styles/category'
import Masculino from './Masculino'
import Feminino from './Feminino'
import Icon from 'react-native-vector-icons/Ionicons'

class Categorias extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'arrow-up-sharp',
            show: true,
            text:'Ocultar',
            feminino:false
        }
    }
    render() {
        return (
            <View style={{flex:1,}}>
                <TouchableHighlight style={styles.expandir} onPress={()=>{
                    if(this.state.show){
                        this.setState({show: false})
                        this.setState({text:'Expandir'})
                        this.setState({name:'arrow-down'})
                        
                    }else{
                        this.setState({show: true})
                        this.setState({text:'Ocultar'})
                        this.setState({name:'arrow-up-sharp'})
                    }
                }} underlayColor='#EA9700'>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.buttonText}>{this.state.text}</Text>
                        <Icon name={this.state.name} size={25} color='black'/>
                    </View>
                </TouchableHighlight>

                {this.state.show && (<View style={styles.category}>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                        <Text>Novidades</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                        <Text>Promoções</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{this.setState({feminino: true})}}>
                        <Text>Feminino</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                        <Text>Masculino</Text>
                    </TouchableHighlight>

                </View>)}
                    {this.state.feminino && ( 
                        <ScrollView>
                            <Text style={styles.subtitle}>Moda Feminina</Text>
                            <Feminino/>
                        </ScrollView>
                    )}
            </View>
        )
    }
}

export default Categorias;