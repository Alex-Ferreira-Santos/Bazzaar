import React,{Component} from 'react';
import {View,Text} from 'react-native'

class Categorias extends Component {
    render() {
        return (
            <View>
                {this.state.category && (<View style={styles.category} accessibilityLiveRegion="polite">

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                    <Text>Novidades</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                    <Text>Promoções</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                    <Text>Feminino</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.categoryButton} underlayColor='#E3E3E3' onPress={()=>this.setState({category: false})}>
                    <Text>Masculino</Text>
                </TouchableHighlight>

                </View>)}
            </View>
        )
    }
}

export default Categorias;