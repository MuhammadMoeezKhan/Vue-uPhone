<template>
  <div class="login-container">
    <button @click="loginWithGoogle" class="login-button">Login with Google</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  methods: {
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      try {
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error('Google login error:', error);
        // Optionally show an error message to the user
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Use the full height of the viewport */
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  /* Add any additional styling you want */
}
</style>