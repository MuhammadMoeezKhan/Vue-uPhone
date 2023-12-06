<template>
  <div class="apple-theme">
    <!-- Intro Video Section -->
    <section class="video-section">
      <video controls autoplay loop id="header-video">
        <source src="@/assets/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>

    <!-- Latest Release Section -->
    <section class="latest-release-section">
      <div class="latest-release-content">
        <div class="latest-release-image">
          <img src="@/assets/images/latest_iphone.png" alt="Latest Phone" />
        </div>
        <div class="latest-release-description">
          <h2 class="latest-release-heading">Latest Release</h2>
          <p>
            Behold the iPhone 15 Pro Max, a technological marvel encased in a sleek titanium body. This premium device combines the strength of titanium with cutting-edge features, offering a durable and sophisticated smartphone experience. With a stunning display, powerful performance, and advanced camera capabilities, the iPhone 15 Pro Max in titanium redefines luxury in the world of smartphones.
          </p>
          <a href="https://www.apple.com/iphone-15-pro/" target="_blank" class="learn-more-button">Learn More</a>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-us-section">
      <div class="about-us-content">
        <h2>About Us</h2>
        <p>
          Introducing Ufone, your gateway to seamless peer-to-peer iPhone transactions. With Ufone, the power to buy and sell iPhones directly from individuals is at your fingertips. Our platform ensures a secure and user-friendly experience, connecting iPhone enthusiasts for hassle-free transactions. Whether you're looking to upgrade your device or sell your current iPhone, Ufone simplifies the process, creating a community where iPhone enthusiasts can connect, trade, and enjoy the latest in peer-to-peer selling innovation. Embrace the future of iPhone transactions with Ufone – where convenience meets community.
        </p>
      </div>
    </section>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* Add your specific styles for the Home view here */

.apple-theme {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333; /* Adjust text color */
  margin: 0 auto; /* Center the content */
  max-width: 1200px; /* Set maximum width for content */
}

.video-section {
  margin-bottom: 40px;
}

video {
  width: 100%;
  max-height: 500px;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.latest-release-section {
  padding: 40px;
  background-color: #fff; /* Light gray background color */
  border-radius: 8px;
  margin-bottom: 40px;
}

.latest-release-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.latest-release-image img {
  max-width: 500px; /* Adjust the image width */
  height: auto;
  border-radius: 8px;
}

.latest-release-heading {
  font-size: 36px; /* Adjust the heading font size */
}

.latest-release-description {
  max-width: 600px;
}

.learn-more-button {
  display: inline-block;
  padding: 12px 24px;
  margin-top: 20px;
  background-color: #787878; /* Apple blue color */
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

.learn-more-button:hover {
  background-color: #575757; /* Darker shade on hover */
}

.about-us-section {
  padding: 40px;
  background-color: #fff; /* White background color */
  border-radius: 8px;
  margin-bottom: 40px;
}

.about-us-content {
  max-width: 800px;
  margin: 0 auto;
}

/* Add more styles as needed */
</style>
<!-- sinvso -->