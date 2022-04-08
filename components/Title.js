import { Text, } from 'react-native'

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 12,
    },

});