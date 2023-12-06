<template>
    <nav class="navbar">
      <!-- Logo Image -->
      <img src="https://seeklogo.com/images/U/ufone-logo-B4CC6DDF9B-seeklogo.com.png" alt="Company Logo" class="navbar-logo" />
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sell">Sell</router-link></li>
        <li><router-link to="/purchase">Purchase</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem;
    display: flex; /* Align the logo and the nav-links */
    align-items: center; /* Center items vertically */
  }
  
  .navbar-logo {
    height: 3rem; /* Set the height of your logo */
    margin-right: 60rem; /* Add some space between the logo and the nav links */
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center; /* Adjust this as needed */
    margin: 0;
    padding: 0;
    font-size: 20px;
    flex-grow: 1; /* Allow nav-links to take up the remaining space */
  }
  
  .nav-links li {
    margin: 0 1rem;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .nav-links li a.router-link-exact-active {
    color: #007aff;
  }
  </style>  