<template>
  <form @submit.prevent="showConfirmation" class="form">
    <div class="form-group">
      <label for="iphoneName">iPhone Name:</label>
      <input v-model="iphoneName" type="text" id="iphoneName" required />
    </div>

    <div class="form-group">
      <label class="form-label" for="rating">Rating:</label>
      <select v-model="rating" class="form-input" id="rating" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div class="form-group">
      <label for="description">Description:</label>
      <textarea v-model="description" id="description" required></textarea>
    </div>

    <div class="form-group">
      <label for="picture">Picture URL:</label>
      <input v-model="pictureURL" type="text" id="picture" required />
    </div>

    <div class="form-group">
      <label for="price">Price:</label>
      <input v-model.number="price" type="number" id="price" required />
    </div>

    <button type="button" @click="showConfirmation">Submit</button>

    <!-- Confirmation Dialog -->
    <div v-if="isConfirmationVisible" class="confirmation-dialog">
      <p>Are you sure you want to sell your iPhone?</p>
      <div class="confirmation-dialog-buttons">
        <button
          class="confirmation-dialog-button confirmation-dialog-button-confirm"
          @click="confirmSubmission"
        >
          Confirm
        </button>
        <button
          class="confirmation-dialog-button confirmation-dialog-button-cancel"
          @click="cancelSubmission"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      iphoneName: '',
      rating: 5,
      description: '',
      pictureURL: '',
      price: 0,
      isConfirmationVisible: false,
    };
  },
  methods: {
    async submitForm() {
      // ... (your existing form submission logic)
    },

    showConfirmation() {
      this.isConfirmationVisible = true;
    },

    confirmSubmission() {
      this.submitForm();
      this.isConfirmationVisible = false;
    },

    cancelSubmission() {
      console.log("User canceled submission");
      this.isConfirmationVisible = false;
    },
  },
};
</script>

<style scoped>
form {
  width: 30%;
  margin: 50px auto;
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 8px;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  background-color: #444;
  color: #fff;
}

button {
  background-color: #b30101;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #4d0000;
}

form::after {
  content: "";
  display: table;
  clear: both;
}

/* Styles for the Confirmation Dialog */
.confirmation-dialog {
  font-size: 16px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.confirmation-dialog-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.confirmation-dialog-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.confirmation-dialog-button-confirm {
  background-color: #4caf50;
  color: #fff;
}

.confirmation-dialog-button-cancel {
  background-color: #d9534f;
  color: #fff;
}

</style>
