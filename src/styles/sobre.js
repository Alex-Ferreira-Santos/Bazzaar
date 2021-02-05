import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center'
    },
    subtitle:{
        fontSize: 25,
        width: '100%',
        marginLeft: 30,
        marginBottom: 30
    },
    welcome:{
        marginVertical: 10
    },
    center:{
        textAlign:'center'
    },
    text:{
        width: '90%'
    },
    address:{
        backgroundColor: '#EEEEEE',
    },
    addressText:{
        fontSize: 15
    },
    image:{
        height: 300,
        width: width - 10,
    },
    follow:{
        fontSize: 20,
        marginBottom: 20
        
    },
    redes:{
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '80%'
    }
})

export default styles