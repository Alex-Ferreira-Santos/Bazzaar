import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import styles from '../styles/category'
import Masculino from './Masculino'
import Feminino from './Feminino'
import Novidades from './Novidades'
import Promocoes from './Promocoes'
import Icon from 'react-native-vector-icons/Ionicons'

class Categorias extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: true,
            feminino: false,
            masculino: false,
            novidades: false,
            promocoes: false,
        }
        this.atribuiParams = this.atribuiParams.bind(this)
        this.navegar = this.navegar.bind(this)
        this.atribuiParams()
    }

    atribuiParams(){
        const params = this.props.route.params
        this.state.promocoes = params.promocoes
        if(this.state.promocoes){
            this.state.show = params.show
            this.state.masculino = params.masculino
            this.state.feminino = params.feminino
            this.state.novidades = params.novidades
        }
    }

    navegar(imagem,nome,preco){
        this.props.navigation.navigate('Produto',{image:imagem,nome:nome,preco:preco})
    }

    render() {
        const params = this.props.route.params
        if(params.promocoes){
            this.atribuiParams()
        }
        return (
            <View style={{flex:1}}>
                <TouchableHighlight style={styles.expandir} onPress={()=>{
                    if(this.state.show){
                        params.show = false
                        params.text = 'Expandir'
                        params.name = 'arrow-down'
                        this.setState({show:params.show})
                    }else{
                        params.show = true 
                        params.text = 'Ocultar'
                        params.name = 'arrow-up-sharp'
                        this.setState({show:params.show})
                    }
                }} underlayColor='#EA9700'>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.buttonText}>{params.text}</Text>
                        <Icon name={params.name} size={25} color='black'/>
                    </View>
                </TouchableHighlight>

                {this.state.show && (<View style={styles.category}>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{
                        
                        params.promocoes = false
                        this.setState({feminino: false})
                        this.setState({masculino: false})
                        this.setState({novidades: true})
                        this.setState({promocoes: params.promocoes})
                    }}>
                        <Text>Novidades</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{
                        params.promocoes = false
                        this.setState({feminino: false})
                        this.setState({masculino: false})
                        this.setState({novidades: false})
                        this.setState({promocoes: true})
                    }}>
                        <Text>Promoções</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{
                        params.promocoes = false
                        this.setState({feminino: true})
                        this.setState({masculino: false})
                        this.setState({novidades: false})
                        this.setState({promocoes: params.promocoes})
                        }}>
                        <Text>Feminino</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{
                        params.promocoes = false
                        this.setState({masculino: true})
                        this.setState({feminino: false})
                        this.setState({novidades: false})
                        this.setState({promocoes: params.promocoes})
                        }}>
                        <Text>Masculino</Text>
                    </TouchableHighlight>

                </View>)}
                    {this.state.feminino && ( 
                        <ScrollView>
                            <Text style={styles.subtitle}>Moda Feminina</Text>
                            <Feminino image={this.navegar}/>
                        </ScrollView>
                    )}
                    {this.state.masculino && ( 
                        <ScrollView>
                            <Text style={styles.subtitle}>Moda Masculina</Text>
                            <Masculino image={this.navegar}/>
                        </ScrollView>
                    )}
                    {this.state.novidades && ( 
                        <ScrollView>
                            <Text style={styles.subtitle}>Novidades</Text>
                            <Novidades image={this.navegar}/>
                        </ScrollView>
                    )}
                    {this.state.promocoes && ( 
                        <ScrollView>
                            <Text style={styles.subtitle}>Promoções</Text>
                            <Promocoes image={this.navegar}/>
                        </ScrollView>
                    )}
                    
            </View>
        )
    }
}

export default Categorias;