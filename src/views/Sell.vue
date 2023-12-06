<template>
  <div>
    <h1>Sell Your iPhone</h1>
    <SellForm />
  </div>
</template>

<script>
import SellForm from '@/components/SellForm.vue';
//import { usePhoneStorage } from '@/stores/phoneStorage';

export default {
  components: {
    SellForm,
  },
  setup() {
    //const store = usePhoneStorage();

    return {
      //store,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>