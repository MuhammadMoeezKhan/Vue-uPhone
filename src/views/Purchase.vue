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
      @confirm-purchase="confirmPurchase"
    />
    <!-- Confirmation Popup -->
    <div v-if="confirmData" class="confirmation-popup">
      <p>Name: {{ userName }}</p>
      <p>Email: {{ userEmail }}</p>
      <p>Locale: {{ userLocale }}</p>
      <p>Confirm purchase of {{ confirmData.title }} for ${{ confirmData.price }}?</p>
      <button @click="executePurchase">Yes</button>
      <button @click="confirmData = null">No</button>
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

export default {
  components: {
    Card,
  },
  setup() {
    const iphones = ref([]);
    const activeDescription = ref(null);
    const confirmData = ref(null);
    const db = getFirestore();

    // Replace these with actual user data fetching logic
    const userName = 'John Doe';
    const userEmail = 'john@example.com';
    const userLocale = 'en-US';

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      iphones.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    const confirmPurchase = (id) => {
      const iphone = iphones.value.find(phone => phone.id === id);
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
    };

    return {
      iphones,
      activeDescription,
      confirmData,
      executePurchase,
      showDescriptionPopup,
      userName,
      userEmail,
      userLocale,
      showConfetti,
    };
  },
};
</script>

<style>
/* Existing styles */
.popup, .confirmation-popup {
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
</style>