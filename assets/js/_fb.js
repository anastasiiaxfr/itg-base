  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  const addUserQuestionToFirestore = async (userData) => {
    try {
      // Add user Question data to Firestore
      await firestore.collection('UserQuestion').add(userData);
      console.log('User added to Firestore');
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  };
