// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

import { defineStore } from 'pinia';
import { db } from '@/firebase';

export const usePhoneStorage = defineStore({
  id: 'phoneStorage',
  state: () => ({
    soldIPHones: [],
  }),
  actions: {
    async sellIphone(iphone) {
      try {
        await db.collection('soldIPHones').add(iphone);
      } catch (error) {
        console.error('Error selling iPhone:', error);
      }
    },
  },
});
