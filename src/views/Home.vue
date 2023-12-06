<template>
  <div>
    <h1>Home</h1>
    <Card :title="'iPhone 14 Pro Max'" :image="iphone14MaxImage" :rating="4.5" :price="999.99" />
    <Card :title="'iPhone 15 Pro Max'" :image="iphone15MaxImage" :rating="5" :price="1099.99" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import iphone14MaxImage from '@/assets/images/iPhone14Max.jpg';
import iphone15MaxImage from '@/assets/images/iPhone15Max.jpeg';

export default {
  components: {
    Card,
  },
  data() {
    return {
      iphone14MaxImage,
      iphone15MaxImage,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>