<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <button @click="loginWithGoogle" class="login-button">Login with Google</button>

      <!-- Display user information if signed in -->
      <div v-if="user" class="user-info">
        <p>Email: {{ user.email }}</p>
        <p>Name: {{ user.displayName }}</p>
        <p>Locale: {{ user.locale }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../../firebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      userEmail: null,
      user: null, // Add a property to store user information
    };
  },
  methods: {
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      try {
        const result = await signInWithPopup(auth, provider);
        this.userEmail = result.user.email; // Store the signed-in user's email
      } catch (error) {
        console.error('Google login error:', error);
        // Optionally show an error message to the user
      }
    },
    async checkUserInCollection() {
      if (this.userEmail) {
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection, where('email', '==', this.userEmail));

        try {
          const querySnapshot = await getDocs(q);

          if (querySnapshot.size > 0) {
            // User's email is present in the "users" collection
            console.log('User exists in the collection');

            // Assuming there is only one document with the given email, get the user data
            querySnapshot.forEach((doc) => {
              this.user = doc.data();
            });
          } else {
            // User's email is not present in the "users" collection
            console.log('User does not exist in the collection');
          }
        } catch (error) {
          console.error('Error checking user in collection:', error);
        }
      } else {
        console.error('User email not available.');
      }
    },
  },
  mounted() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is signed in, set the userEmail and check in the collection
        this.userEmail = user.email;
        this.checkUserInCollection();
      }
    });
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.login-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
}

.login-button:hover {
  background-color: #45a049;
}

.user-info {
  margin-top: 20px;
  font-size: 14px;
}
</style>