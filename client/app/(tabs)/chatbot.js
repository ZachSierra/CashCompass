import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import {useState} from "react";

export default function Tab() {

    const [messages, setMessages] = useState([
        { id: '1', sender: 'bot', text: "Hello! How can I assist you today?" }
    ]);

    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: input }]);
            setInput('');
            /* open api logic here */
        }
    };

    const createMessage = ({ item }) => (
        <View style={item.sender === 'bot' ? styles.botMessage : styles.userMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={createMessage}
                keyExtractor={(item) => item.id}
                style={styles.messageList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type your message..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    messageList: {
        padding: 10,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e1f5fe',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#bbdefb',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        height: 70,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16
    },
});