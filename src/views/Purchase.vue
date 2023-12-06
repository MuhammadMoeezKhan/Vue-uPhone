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
    />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  setup() {
    const iphones = ref([]);
    const db = getFirestore(); // Ensure this is the correct way to initialize your Firebase db

    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, "inventory"));
      iphones.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    return {
      iphones,
    };
  },
};
</script>
