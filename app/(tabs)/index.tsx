import { Image, StyleSheet, Platform, View } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>Welcome to Cooking Assistant</ThemedText>
        </View>

        <View style={styles.cardContainer}>
          <ThemedView style={styles.card}>
            <View style={styles.cardIcon}>
              <Ionicons name="search" size={24} color="#FF6B6B" />
            </View>
            <View style={styles.cardContent}>
              <ThemedText type="subtitle" style={styles.cardTitle}>Discover Recipes</ThemedText>
              <ThemedText style={styles.cardText}>
                Explore a curated list of recipes that match your taste and dietary needs.
              </ThemedText>
            </View>
          </ThemedView>

          <ThemedView style={styles.card}>
            <View style={styles.cardIcon}>
              <Ionicons name="calendar" size={24} color="#4ECDC4" />
            </View>
            <View style={styles.cardContent}>
              <ThemedText type="subtitle" style={styles.cardTitle}>Customize Your Meal Plan</ThemedText>
              <ThemedText style={styles.cardText}>
                Get personalized meal recommendations and modify ingredients to suit your preferences.
              </ThemedText>
            </View>
          </ThemedView>

          <ThemedView style={styles.card}>
            <View style={styles.cardIcon}>
              <Ionicons name="restaurant" size={24} color="#45B7D1" />
            </View>
            <View style={styles.cardContent}>
              <ThemedText type="subtitle" style={styles.cardTitle}>Cook with Confidence</ThemedText>
              <ThemedText style={styles.cardText}>
                Follow detailed, step-by-step instructions and tips to create delicious dishes.
              </ThemedText>
            </View>
          </ThemedView>
        </View>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center', 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
  headerImage: {
    height: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
