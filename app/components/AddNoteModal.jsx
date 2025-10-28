
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddNoteModal = ({ modalVisible, setModalVisible, addNote, setNewNote, newNote, }) => {
    return (
        <Modal
            visible={modalVisible}
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
    )
}

export default AddNoteModal

const styles = StyleSheet.create({
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
        backgroundColor: '#ceb99fff',
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
        flex: 1,
        borderRadius: 15,
        paddingHorizontal: 6,
        width: 30,
        height: 30,
        top: 10,
        alignItems: 'center',
        right: 10,
    },
    cancelText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
});