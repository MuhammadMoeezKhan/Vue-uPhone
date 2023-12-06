<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  text-align: center;
}

.content {
  padding-top: 60px; /* Adjust this value based on the actual height of your navbar */
}

/* Styles for Navbar component if not already scoped within the component */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure the navbar stays on top of all other content */
}
</style>
