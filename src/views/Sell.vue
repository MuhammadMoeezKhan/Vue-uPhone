<template>
  <div class="sell-container">
    <video autoplay loop muted class="background-video">
      <!-- Replace 'your-video-file.mp4' with the actual path to your video file -->
      <source src="../assets/videos/sale-page.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content-overlay">
      <h1 class="sell-title">Sell Your iPhone</h1>
      <SellForm />
    </div>
  </div>
</template>

<script>
import SellForm from '../components/SellForm.vue';
import { usePhoneStorage } from '../stores/phoneStorage';

export default {
  name: 'Sell',
  components: {
    SellForm,
  },
  setup() {
    const store = usePhoneStorage();

    return {
      store,
    };
  },
};
</script>

<style scoped>
@import '../assets/main.css';

.sell-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Set the video behind the content */
}

.content-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  z-index: 1; /* Set the content above the video */
}

.sell-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #ffffff;
}

.sell-container .form {
  max-width: 800px;
}

</style>
