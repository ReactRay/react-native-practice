import { StyleSheet } from 'react-native';

import { Text, View } from 'react-native';

const NoteItem = ({ note }) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.noteText}>{note.text}</Text>
        </View>
    )
}

export default NoteItem

const styles = StyleSheet.create({
    noteItem: {
        padding: 16,
        backgroundColor: '#ceb99fff',
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',

    },
    noteText: {
        fontSize: 16,
        color: '#ffffffff',
        fontWeight: '400',
        letterSpacing: 4,
    }
});