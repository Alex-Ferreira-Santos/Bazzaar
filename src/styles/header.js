import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#403123',
        width: '100%',
        paddingVertical: 10,
        flexDirection:'row',
    },
    input: {
        backgroundColor: 'white',
        height: 25,
        borderRadius: 20,
        paddingVertical: 0,
        width:'100%',
        paddingLeft: 10,
    },
    view:{
        flexDirection:'row',
        width: '70%',
        marginRight: 5
    },
    icon:{
        position: 'absolute',
        right: 5
    },
    category:{
        backgroundColor: 'orange',
    },
    button:{
        borderColor:'#D7CCCC',
        borderWidth: 1,
        backgroundColor: '#F6F6F6',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles