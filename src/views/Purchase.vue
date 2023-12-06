<template>
  <div>
    <h1>Purchase iPhones</h1>
    <Card
      v-for="iphone in iphones"
      :key="iphone.id"
      :id="iphone.id"
      :title="iphone.name"
      :image="iphone.picture"
      :rating="iphone.condition"
      :price="iphone.price"
      :description="iphone.description"
      @view-description="showDescriptionPopup"
      @confirm-purchase="confirmPurchase(iphone.id)"
    />

    <!-- Purchase Confirmation Popup -->
    <div v-if="confirmData" class="confirmation-popup">
      <div class="confirmation-content">
        <p>Name: {{ userData.name }}</p>
        <p>Email: {{ userData.email }}</p>
        <p>Locale: {{ userData.locale }}</p>
        <p>Confirm purchase of {{ confirmData.title }} for ${{ confirmData.price }}?</p>
        <div class="confirmation-buttons">
          <button @click="executePurchase">Yes</button>
          <button @click="confirmData = null">No</button>
        </div>
      </div>
    </div>

    <!-- Simple Popup for Description -->
    <div v-if="activeDescription" class="popup">
      <p>{{ activeDescription }}</p>
      <button @click="activeDescription = null">Close</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
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
    const db = getFirestore();
    const auth = getAuth();

    const userData = ref({
      name: null,
      email: null,
      locale: null,
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user details
        userData.value.name = user.displayName;
        userData.value.email = user.email;
        // Add more user data fetching logic if needed
      }
    });

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'inventory'));
      iphones.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });

    const confirmPurchase = (id) => {
      const iphone = iphones.value.find((phone) => phone.id === id);
      if (iphone) {
        confirmData.value = { ...iphone, id };
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
      executePurchase,
      showDescriptionPopup,
      userData,
      showConfetti,
      confirmPurchase, // Expose the confirmPurchase function
    };
  },
};
</script>

<style scoped>
/* Existing styles */

.popup, .confirmation-popup {
  display: none;
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
  z-index: 1001;
}

.confirmation-popup.show, .popup.show {
  display: block;
}

.confirmation-content {
  text-align: center;
}

.confirmation-buttons {
  margin-top: 20px;
}

</style>