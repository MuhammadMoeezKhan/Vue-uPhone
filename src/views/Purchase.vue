<template>
  <div>
    <h1>Purchase iPhones</h1>

    <!-- Display phones in a row -->
    <div class="iphone-row">
      <Card
        v-for="iphone in iphones"
        :key="iphone.id"
        :title="iphone.name"
        :image="iphone.picture"
        :rating="iphone.rating"
        :price="iphone.price"
        :description="iphone.description"
        @confirm-purchase="confirmPurchasePopup"
        @view-description="showDescriptionPopup"
      />
    </div>

    <!-- Confirmation Popup -->
    <div v-if="confirmData" class="confirmation-popup">
      <p>Name: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
      <!-- <p>Locale: {{ userData.locale }}</p> -->
      <p>Locale: 46135</p>
      <p>Confirm purchase for ${{ confirmData.price }}?</p>
      <button @click="executePurchase">Yes</button>
      <button @click="cancelPurchase">No</button>
    </div>

    <!-- Simple Popup for Description -->
    <div v-if="activeDescription" class="popup">
      <p>{{ activeDescription }}</p>
      <button @click="activeDescription = null">Close</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Card from '@/components/Card.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import confetti from 'canvas-confetti'; // Import the canvas-confetti library


export default {
  components: {
    Card,
  },
  setup() {
    const iphones = ref([]);
    const activeDescription = ref(null);
    const confirmData = ref(null);
    const userData = ref({
      name: null,
      email: null,
      locale: null,
    });
    const db = getFirestore();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user details
        userData.value.name = user.displayName;
        userData.value.email = user.email;
        userData.value.locale = user.locale;
        // Add more user data fetching logic if needed
      }
    });

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      iphones.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    const confirmPurchasePopup = async (title) => {
      console.log('Confirm Purchase clicked for ID:', title);

      // Ensure that user data is available
      if (userData.value.name) {
        console.log("User's Name:", userData.value.name);
      } else {
        console.log("User's Name is not available yet. You may need to wait for user data.");
      }

      const iphone = iphones.value.find(phone => phone.title === title);
      if (iphone) {
        confirmData.value = { ...iphone, title };
      }
    };

    const executePurchase = async () => {
      if (confirmData.value) {
        try {
          await deleteDoc(doc(db, 'inventory', confirmData.value.id));
          showConfetti();
          confirmData.value = null;
        } catch (error) {
          console.error('Error removing iPhone:', error);
        }
      }
    };

    const cancelPurchase = () => {
      confirmData.value = null;
    };

    const showDescriptionPopup = (description) => {
      activeDescription.value = description;
    };

    const showConfetti = () => {
      const duration = 10 * 1000; // Duration in milliseconds (10 seconds)
      
      // Configure confetti settings
      confetti({
        particleCount: 200,
        spread: 200,
        origin: { y: 0.6 },
      });

      // Clear confetti after the specified duration
      setTimeout(() => confetti.reset(), duration);
    };

    return {
      iphones,
      activeDescription,
      confirmData,
      userData,
      showDescriptionPopup,
      confirmPurchasePopup,
      executePurchase,
      cancelPurchase,
    };
  },
};
</script>

<style>
.iphone-row {
  display: flex;
  justify-content: space-between; /* Adjust as needed */
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: #ffffff; /* White background */
  padding: 20px;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.popup p {
  color: #333; /* Dark text color */
}

.popup button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: #3498db; /* Blue button color */
  color: #fff; /* White button text color */
}

.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: #ffffff; /* White background */
  padding: 20px;
  z-index: 1002;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.confirmation-popup p {
  color: #333; /* Dark text color */
}

.confirmation-popup button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.confirmation-popup button.yes {
  background-color: #4caf50; /* Green button color */
  color: white;
}

.confirmation-popup button.no {
  background-color: #f44336; /* Red button color */
  color: white;
}
</style>