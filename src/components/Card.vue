<template>
  <div class="card">
    <img :src="image" alt="iPhone Image" class="card-image" />
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      
      
      <div class="rating">
        <span v-for="n in 5" :key="n" class="star" v-bind:class="{ 'filled': n <= rating }">★</span>
      </div>
      
      
      <p class="price">${{ price.toFixed(2) }}</p>
      <div class="buttons">
      <button class="btn" @click="redirectToApple">View iPhone Model</button>
      <button class="btn" @click="showDescription">View Description</button>
      <button class="btn primary" @click="confirmPurchase">Purchase iPhone</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image', 'rating', 'price', 'description', 'id'],

  methods: {
    confirmPurchase() {
      console.log('Emitting confirm-purchase event with ID:', this.title);
      this.$emit('confirm-purchase', this.id);
    },
    showDescription() {
      // Emit an event when the description button is clicked
      this.$emit('view-description', this.description);
    },
    redirectToApple() {
      window.location.href = 'https://www.apple.com/';
    },
  },
};
</script>
  

<style scoped>
.card {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  border: 1px solid #e1e1e8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 23%; /* Adjusted width to fit four cards in a row */
  margin: 1%; /* Added margin for spacing between cards */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

.card-image {
  width: 100%; /* Image takes the full width of the card */
  height: auto; /* Height is auto to maintain aspect ratio */
  display: block;
}

/* Add a media query if necessary for responsive design */
@media (max-width: 1200px) {
  .card {
    width: 48%; /* Adjust width for smaller screens */
    margin: 1%; /* Keep margin for spacing */
  }
}

@media (max-width: 768px) {
  .card {
    width: 98%; /* Full width on very small screens */
    margin: 1% auto; /* Center the card with auto margins */
  }
} 
  .card-content {
    padding: 16px;
    text-align: center;
  }
  
  .card-title {
    font-size: 24px;
    font-weight: 600;
    margin: 16px 0;
  }
  
  .rating {
    color: gold;
    font-size: 20px;
    margin: 8px 0;
  }
  
  .rating .star {
    color: #ddd; /* Default empty star color */
  }
  
  .rating .star.filled {
    color: gold; /* Filled star color */
  }
  
  .price {
    font-size: 20px;
    color: #333;
    margin: 8px 0;
  }
  
  .buttons {
    margin-top: auto;
  }
  
  .btn {
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    background-color: #f5f5f7;
    margin: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #e1e1e8;
  }
  
  .btn.primary {
    background-color: #007aff;
    color: white;
  }
  
  .btn.primary:hover {
    background-color: #005ecb;
  }
  </style>  