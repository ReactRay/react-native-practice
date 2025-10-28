import { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const NoteScreen = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [notes, setNotes] = useState([
        { id: 1, text: 'First Note' },
        { id: 2, text: 'Second Note' },
        { id: 3, text: 'Third Note' },
    ]);

    // Function to add a new note

    function addNote() {
        if (newNote.trim() === '') return; // Prevent adding empty notes
        setNotes([...notes, { id: notes.length + 1, text: newNote }]);
        setNewNote('');
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Notes</Text>

            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <Text style={styles.noteText}>{item.text}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add Note</Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={ModalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Add Your Note</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter text"
                            value={newNote}
                            onChangeText={setNewNote}
                            placeholderTextColor="#888"
                        />

                        <TouchableOpacity style={styles.saveButton} onPress={addNote}>
                            <Text style={styles.saveButtonText} >Save Note</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancel} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelText}>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f8f9',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        color: '#2d4a53',
        marginBottom: 20,
        textAlign: 'center',
    },
    noteItem: {
        backgroundColor: '#e0f2f1',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4,
        elevation: 3,
    },
    noteText: {
        fontSize: 16,
        color: '#2d4a53',
    },
    addButton: {
        position: 'absolute',
        bottom: 40,
        left: 30,
        right: 30,
        backgroundColor: '#00cc66',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#00cc66',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
    },
    addButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        elevation: 6,
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 15,
        color: '#2d4a53',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#b5d6d2',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#00cc66',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    cancel: {
        position: 'absolute',
        backgroundColor: '#ff4d4d',
        width: 30,
        height: 30,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        right: 10,
    },
    cancelText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
});

export default NoteScreen;
