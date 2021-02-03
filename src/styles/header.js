import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#403123',
        width: '100%',
        paddingVertical: 10,
        flexDirection:'row',
    },
    header:{
        flex:1,
        width: '100%',
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
        width: '73%',
        marginHorizontal: 5
    },
    icon:{
        position: 'absolute',
        right: 5
    },
    category:{
        backgroundColor: 'orange',
        borderColor:'#D7CCCC',
        borderWidth: 1,
        position: 'absolute',
        right: 0,
        top: 58
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