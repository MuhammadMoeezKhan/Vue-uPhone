<template>
  <nav class="navbar">
    <!-- Logo Image -->
    <img
      src="https://seeklogo.com/images/U/ufone-logo-B4CC6DDF9B-seeklogo.com.png"
      alt="Company Logo"
      class="navbar-logo"
    />
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link to="/sell" class="sell-link">
          Sell
        </router-link>
      </li>
      <li>
        <router-link to="/purchase" class="purchase-link">
          Purchase
        </router-link>
      </li>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 3rem;
  margin-right: 60rem;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-size: 20px;
  flex-grow: 1;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s; /* Add transition for smooth color change */
}

.sell-link:hover {
  color: red; /* Change color to red on hover for the sell tab */
}

.purchase-link:hover {
  color: green; /* Change color to green on hover for the purchase tab */
}

.nav-links li a.router-link-exact-active {
  color: #007aff;
}
</style>
