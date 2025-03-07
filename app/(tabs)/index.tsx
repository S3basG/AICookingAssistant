import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F8B195', dark: '#355C7D' }}
      headerImage={
        <Image
          //source={require('@/assets/images/cooking-background.jpg')} // Replace with your cooking-themed image
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Cooking Assistant AI</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Discover Recipes</ThemedText>
        <ThemedText>
          Explore a curated list of recipes that match your taste and dietary needs.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Customize Your Meal Plan</ThemedText>
        <ThemedText>
          Get personalized meal recommendations and modify ingredients to suit your preferences.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Cook with Confidence</ThemedText>
        <ThemedText>
          Follow detailed, step-by-step instructions and tips to create delicious dishes.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 20,
    marginHorizontal: 16,
  },
  stepContainer: {
    gap: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  headerImage: {
    height: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
