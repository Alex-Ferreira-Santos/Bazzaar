import React,{Component} from 'react'
import {View,Text,Image,TouchableHighlight} from 'react-native'
import styles from '../styles/produtoPage'

class Produto extends Component {
    constructor(props){
        super(props)
        this.state = {
            unidades: 10
        }
    }
    render() {
        const params = this.props.route.params
        return (
            <View style={styles.container}>
                <Image source={params.image} style={styles.image}/>
                <View style={styles.main}>
                    <Text style={styles.nome}>{params.nome}</Text>
                    <Text style={styles.preco}>{params.preco}</Text>
                    <Text>Unidades disponiveis: {this.state.unidades}</Text>
                    <View style={styles.buttons}>
                        <TouchableHighlight style={styles.backButton} onPress={()=>{
                            this.props.navigation.goBack()
                        }} underlayColor='#bababa'>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buyButton} underlayColor='#3f77ab' onPress={()=>{
                            alert('produto comprado com sucesso')
                            this.setState({unidades: this.state.unidades-1})
                            this.props.navigation.goBack()
                        }}>
                            <Text style={styles.buttonText}>Comprar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default Produto