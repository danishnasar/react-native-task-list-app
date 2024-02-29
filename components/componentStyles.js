import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    image: {
        width: 170
    },
    subtitle: {
        fontSize: 20,
        color: '#ABABAB',
        marginTop: -20
    },
    img: {
        width: 25,
        height: 25
    },
    title: {
        fontSize: 25
    },
    card: {
        backgroundColor: '#fff',
        height: 115,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    bottomMenuRoot: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    btn: {
        position: 'absolute',
        bottom: 60,
        right: 20,
        backgroundColor: '#C2DAFF',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 7
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2F76E5'
    }
  });