<template>
    <footer class="footer">
      <a href="#" @click.prevent="scrollToTop" class="back-to-top">
        <img src="@/assets/icons/media/up_arrow.svg" alt="Facebook" />
        <h4>BACK TO TOP</h4>
      </a>
      <div class="social-icons">
        <a href="#" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div class="copyright">
        <b>&copy; 2024 Erick Gonzalez</b> All Rights Reserved.
      </div>
    </footer>
  </template>
  
<script>

export default {
    name: 'FooterComponent',
    methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
  
  <style scoped>
  .footer {
    height: 20vh;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--text-color);
    color: #fff;
    font-family: 'Monserrat', sans-serif;
    font-size: 0.9rem;
  }
  
  .back-to-top {
    width: fit-content;
    color: #fff;
    text-decoration: none;
  }
  
  .back-to-top h4 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  
  .social-icons a {
    margin: 0 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
  }
  
  .copyright {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
  </style>
  