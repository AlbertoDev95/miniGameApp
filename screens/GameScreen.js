import { Text, View, StyleSheet} from 'react-native'
import Title from '../components/title';


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}

            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 12
    }

});