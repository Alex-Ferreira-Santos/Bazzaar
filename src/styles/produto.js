import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    subtitle:{
        fontSize: 25,
        width: '100%',
        marginVertical: 15,
        textAlign: 'center'
    },
    moda:{
        alignItems: 'center',
        borderColor: '#E5e5e5',
        borderWidth: 1,
    },
    produto:{
        backgroundColor: '#c4c4c4',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E5e5e5',
    },
    roupa:{
        maxHeight: height,
        width: width - 70
    },
})

export default styles