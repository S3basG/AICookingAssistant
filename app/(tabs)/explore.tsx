import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const initialMessages: Message[] = [
  { id: '1', text: 'Hello! How can I help you today?', sender: 'bot' },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;
    const currentText = inputText; // preserve the current input for the bot reply
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      text: currentText,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate a bot response after a short delay.
    setTimeout(() => {
      const botMessage: Message = {
        id: (messages.length + 2).toString(),
        text: `You said: "${currentText}"`,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';
    return (
      <ThemedView
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}>
        <ThemedText style={styles.messageText}>{item.text}</ThemedText>
      </ThemedView>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ThemedView style={styles.chatContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messagesList}
        />
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <ThemedText style={styles.sendButtonText}>Send</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  messagesList: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginVertical: 4,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#000', // Force text to be black
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#2196F3',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;
