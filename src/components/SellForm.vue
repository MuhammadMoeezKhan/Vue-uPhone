<template>
    <form @submit.prevent="submitForm">
      <label for="iphoneModel">iPhone Model:</label>
      <input v-model="iphoneModel" type="text" required />
  
      <label for="condition">Condition:</label>
      <select v-model="condition" required>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
  
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  //import { usePhoneStorage } from '@/stores/phoneStorage';
  
  export default {
    setup() {
      //const store = usePhoneStorage();
      const iphoneModel = ref('');
      const condition = ref('new');
  
      const submitForm = () => {
        //.sellIphone({ model: iphoneModel.value, condition: condition.value });
        // Additional logic if needed
      };
  
      return { iphoneModel, condition, submitForm };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>  