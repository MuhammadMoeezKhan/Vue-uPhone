<template>
  <div>
    <h1>Purchase iPhones</h1>
    <Card
      v-for="iphone in iphones"
      :key="iphone.id"
      :title="iphone.name"
      :image="iphone.picture"
      :rating="iphone.condition"
      :price="iphone.price"
      :description="iphone.description"
      @confirm-purchase="confirmPurchasePopup"
      @view-description="showDescriptionPopup"
    />

    <!-- Confirmation Popup -->
    <div v-if="confirmData" class="confirmation-popup">
      <p>Name: {{ userData.name }}</p>
      <p>Email: {{ userData.email }}</p>
      <p>Locale: {{ userData.locale }}</p>
      <p>Confirm purchase of {{ confirmData.title }} for ${{ confirmData.price }}?</p>
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
        //console.log("User's Name:", userData.value.name);
      } else {
        // If user data is not available, fetch it or wait for it
        //console.log("User's Name is not available yet. You may need to wait for user data.");
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

    // Stub for the confetti display function
    const showConfetti = () => {
      // Implement confetti display logic
      console.log('Confetti effect displayed!');
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
/* ... existing styles ... */
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: white;
  padding: 20px;
  z-index: 1000;
}

.confirmation-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background: white;
  padding: 20px;
  z-index: 1002;
}
</style>