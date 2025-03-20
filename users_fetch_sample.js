import firestore from '@react-native-firebase/firestore';

const fetchUsers = async () => {
  const snapshot = await firestore().collection('users').get();
  const users = snapshot.docs.map(doc => doc.data());
  console.log(users);
};

useEffect(() => {
  fetchUsers();
}, []);
