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
        border: '1px solid #a9cbadff',
        backgroundColor: '#3c3d3cff',
    },
    noteText: {
        fontSize: 16,
        color: '#f1eeeeff',
        fontWeight: '500',
    }
});