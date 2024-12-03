<template>
    <div class="contact-form">
      <form>
        <div class="form-group">
          <input type="text" id="name" placeholder="ENTER YOUR NAME*" />
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="ENTER YOUR EMAIL*" />
        </div>
        <div class="form-group">
          <input type="tel" id="phone" placeholder="PHONE NUMBER" />
        </div>
        <div class="form-group">
          <textarea id="message" rows="5" placeholder="YOUR MESSAGE*"></textarea>
        </div>
        <button class="special-button submit">
          <span>SUBMIT</span>
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactForm",
  };
  </script>
  
  <style scoped>
  .contact-form {
    padding-top: 100px;
    width: 80%;
  }

  form {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    position: relative;
  }
  
  input,
  textarea {
    font-family: 'Monserrat', sans-serif;
    font-weight: 600;
    width: 100%;
    border: none;
    border-bottom: 4px solid var(--primary-color);  
    border-left: 4px solid var(--primary-color);
    font-size: 16px;
    padding-bottom: 9px;
    padding-top: 18px;
    padding-left: 10px;
    outline: none;
    background-color: transparent;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: var(--secondary-color);
    font-family: 'Monserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
  
  textarea {
    resize: none;
  }
  
  input:focus,
  textarea:focus {
    border-bottom: 4px solid var(--text-color);
  }
  
  textarea::placeholder {
    text-transform: uppercase;
  }
  
  .submit {
    border-top: 0px;
    border-bottom: 0px;
    padding: 10px 50px;
  }
  </style>
  