import firestore from '@react-native-firebase/firestore';

const fetchRecipes = async () => {
  const snapshot = await firestore().collection('recipes').get();
  const recipes = snapshot.docs.map(doc => doc.data());
  
  recipes.forEach(recipe => {
    console.log(recipe);
  });
};

useEffect(() => {
  fetchRecipes();
}, []);
