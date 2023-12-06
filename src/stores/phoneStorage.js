import { defineStore } from 'pinia';
import  { db }  from '../../firebase.js'

export const usePhoneStorage = defineStore({
  id: 'phoneStorage',
  state: () => ({
    listedPhones: [],
  }),
  actions: {
    async sellIphone(iphone) {
      try {
        await db.collection('inventory').add(iphone);
      } catch (error) {
        console.error('Error selling iPhone:', error);
      }
    },
  },
});
