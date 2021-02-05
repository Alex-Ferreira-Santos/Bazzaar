import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import styles from '../styles/category'

class Categorias extends Component {
    render() {
        return (
            <View>
                <View style={styles.category} accessibilityLiveRegion="polite">

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                    <Text>Novidades</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                    <Text>Promoções</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                    <Text>Feminino</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>{}}>
                    <Text>Masculino</Text>
                </TouchableHighlight>

                </View>
            </View>
        )
    }
}

export default Categorias;