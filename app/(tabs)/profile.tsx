import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Food genres for selection
const FOOD_GENRES = [
  'Italian', 'Mexican', 'Chinese', 'Japanese', 'Indian', 'Thai', 
  'Mediterranean', 'American', 'French', 'Greek', 'Vietnamese', 
  'Korean', 'Middle Eastern', 'Spanish', 'Brazilian', 'Caribbean'
];

export default function ProfileScreen() {
  // Account details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  
  // Food preferences
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [newAllergy, setNewAllergy] = useState('');
  const [allergies, setAllergies] = useState<string[]>([]);
  
  // UI state
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Load user data on component mount
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userPhone = await AsyncStorage.getItem('userPhone');
      const userBio = await AsyncStorage.getItem('userBio');
      const userGenres = await AsyncStorage.getItem('userGenres');
      const userAllergies = await AsyncStorage.getItem('userAllergies');
      
      if (userName) setName(userName);
      if (userEmail) setEmail(userEmail);
      if (userPhone) setPhone(userPhone || '');
      if (userBio) setBio(userBio || '');
      if (userGenres) setSelectedGenres(JSON.parse(userGenres));
      if (userAllergies) setAllergies(JSON.parse(userAllergies));
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const handleSave = async () => {
    try {
      // Save account details
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userPhone', phone);
      await AsyncStorage.setItem('userBio', bio);
      
      // Save food preferences
      await AsyncStorage.setItem('userGenres', JSON.stringify(selectedGenres));
      await AsyncStorage.setItem('userAllergies', JSON.stringify(allergies));
      
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      setMessage('Failed to update profile. Please try again.');
    }
  };

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const addAllergy = () => {
    if (newAllergy.trim() && !allergies.includes(newAllergy.trim())) {
      setAllergies([...allergies, newAllergy.trim()]);
      setNewAllergy('');
    }
  };

  const removeAllergy = (allergy: string) => {
    setAllergies(allergies.filter(a => a !== allergy));
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Your Profile
        </ThemedText>

        {message ? (
          <ThemedView style={styles.messageContainer}>
            <ThemedText style={styles.messageText}>{message}</ThemedText>
          </ThemedView>
        ) : null}

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.sectionTitle}>Account Details</ThemedText>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Full Name</ThemedText>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Your full name"
              editable={isEditing}
            />
          </ThemedView>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Email</ThemedText>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Your email"
              keyboardType="email-address"
              editable={isEditing}
            />
          </ThemedView>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Phone Number</ThemedText>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Your phone number"
              keyboardType="phone-pad"
              editable={isEditing}
            />
          </ThemedView>
          
          <ThemedView style={styles.inputGroup}>
            <ThemedText style={styles.label}>Bio</ThemedText>
            <TextInput
              style={[styles.input, styles.bioInput]}
              value={bio}
              onChangeText={setBio}
              placeholder="Tell us about yourself"
              multiline
              numberOfLines={4}
              editable={isEditing}
            />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.sectionTitle}>Food Preferences</ThemedText>
          
          <ThemedText style={styles.subtitle}>Favorite Cuisines</ThemedText>
          <ThemedView style={styles.genresContainer}>
            {FOOD_GENRES.map((genre) => (
              <TouchableOpacity
                key={genre}
                style={[
                  styles.genreButton,
                  selectedGenres.includes(genre) && styles.selectedGenreButton
                ]}
                onPress={() => isEditing && toggleGenre(genre)}
                disabled={!isEditing}
              >
                <ThemedText
                  style={[
                    styles.genreText,
                    selectedGenres.includes(genre) && styles.selectedGenreText
                  ]}
                >
                  {genre}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.sectionTitle}>Food Allergies</ThemedText>
          
          <ThemedView style={styles.allergiesContainer}>
            {allergies.map((allergy) => (
              <ThemedView key={allergy} style={styles.allergyItem}>
                <ThemedText style={styles.allergyText}>{allergy}</ThemedText>
                {isEditing && (
                  <TouchableOpacity
                    onPress={() => removeAllergy(allergy)}
                    style={styles.removeButton}
                  >
                    <ThemedText style={styles.removeButtonText}>×</ThemedText>
                  </TouchableOpacity>
                )}
              </ThemedView>
            ))}
          </ThemedView>
          
          {isEditing && (
            <ThemedView style={styles.addAllergyContainer}>
              <TextInput
                style={styles.allergyInput}
                value={newAllergy}
                onChangeText={setNewAllergy}
                placeholder="Add allergy"
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={addAllergy}
              >
                <ThemedText style={styles.addButtonText}>Add</ThemedText>
              </TouchableOpacity>
            </ThemedView>
          )}
        </ThemedView>

        <ThemedView style={styles.buttonContainer}>
          {isEditing ? (
            <>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
              >
                <ThemedText style={styles.buttonText}>Save Changes</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setIsEditing(false);
                  loadUserData(); // Reload original data
                }}
              >
                <ThemedText style={styles.buttonText}>Cancel</ThemedText>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => setIsEditing(true)}
            >
              <ThemedText style={styles.buttonText}>Edit Profile</ThemedText>
            </TouchableOpacity>
          )}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  messageContainer: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
  },
  messageText: {
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  genreButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    marginBottom: 10,
    color: 'black',
  },
  selectedGenreButton: {
    backgroundColor: '#F8B195',
  },
  genreText: {
    fontSize: 14,
    color: 'black',
  },
  selectedGenreText: {
    color: 'white',
    fontWeight: 'bold',
  },
  allergiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  allergyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  allergyText: {
    fontSize: 14,
    color: 'black',
  },
  removeButton: {
    marginLeft: 5,
  },
  removeButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addAllergyContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  allergyInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#F8B195',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#F8B195',
    height: 50,
    width: '100%',
    maxWidth: 400,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    height: 50,
    width: '100%',
    maxWidth: 400,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    height: 50,
    width: '100%',
    maxWidth: 400,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 