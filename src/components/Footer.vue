<template>
    <footer class="bg-dark text-light py-5">
      <div class="container">
        <div class="row">
          <!-- Contact Information -->
          <div class="col-md-4">
            <h4>Contact Us</h4>
            <address>
              408 South Locust Street<br />
              Greencastle, IN 46135<br />
              Phone: (123) 456-7890<br />
              Email: <a href="mailto:mkhan_2024@depauw.edu">mkhan_2024@depauw.edu</a><br>
              Email: <a href="mailto:hanantariq_2026@depauw.edu">hanantariq_2026@depauw.edu</a>
            </address>
          </div>
  
          <!-- Quick Links -->
          <div class="col-md-4">
            <h4>Quick Links</h4>
            <ul class="list-unstyled">
              <li><a href="https://www.apple.com/" class="text-light">Apple Website</a></li>
              <li><a href="https://www.apple.com/iphone/" class="text-light">iphones</a></li>
            </ul>
          </div>
  
          <!-- Social Media Links -->
          <div class="col-md-4">
            <h4>Connect with Us</h4>
            <ul class="list-unstyled">
              <li><a href="https://www.instagram.com/apple/" class="text-light">Instagram</a></li>
              <li><a href="https://www.facebook.com/apple/" class="text-light">Facebook</a></li>
              <li><a href="https://twitter.com/Apple" class="text-light">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Custom Styles */
  footer {
    font-size: 14px;
    background-color: #343a40; /* Darker background color */
    color: #fff;
    padding: 40px 0;
  }
  
  h4 {
    font-weight: bold;
    color: #fff;
  }
  
  address {
    margin-bottom: 0;
  }
  
  ul.list-unstyled {
    padding-left: 0;
  }
  
  ul.list-unstyled li {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  a {
    text-decoration: none;
    color: #bbb;
  }
  
  a:hover {
    color: #fff;
  }
  
  i {
    font-size: 24px;
  }
  </style>
  