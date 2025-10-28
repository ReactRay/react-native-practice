import { StyleSheet } from 'react-native'
import NoteItem from './NoteItem'

import { View } from 'react-native'


const NoteList = ({ notes }) => {
    return (
        <View style={list}>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </View>
    )
}

export default NoteList


const { list } = StyleSheet.create({
    list: {
        flex: 1,
        gap: 10,
        padding: 10,
        border: '1px solid #ccc',
        backgroundColor: '#dae8e7ff',
    },
})