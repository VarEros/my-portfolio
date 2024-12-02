<template>
<div class="flex main">
    <div class="home-texts">
        <h2>Hi, I am</h2>
        <h1>Erick Gonzalez</h1>
        <h3>Backend / Mobile Developer</h3>
    </div>
    <div class="home-bottom">
        <SocialIcons class="small-padding"/>
        <div class="pic-container">
            <img :src="myPic"/>
        </div>
    </div>
</div>
</template>

<script>
import myPic from '../assets/images/eros_vanna_pic.png'
import SocialIcons from './SocialIcons.vue';

export default {
    name: 'MobileTopDiv',
    components: {
        SocialIcons
    },
    data() {
      return  {
        myPic
      }
    }
};
</script>

<style scoped>
.main {
    align-items: start;
    justify-content: space-between;
    z-index: 10;
    height: 100vh;
    background-image: -webkit-linear-gradient(110deg, var(--primary-color) 60%, var(--background-color) 60%);
}

.home-texts{
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  justify-content: end;
  width: 80vw;
  height: 30vh;
  color: var(--primary-color);
  font-family: 'Monserrat', sans-serif;
}

.home-bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.pic-container {
    z-index: 9;
    margin-left: -200px;
    overflow: hidden;
}

img {
    width: 700px;
    height: auto;
    display: block;
}

.small-padding {
    padding-left: 30px;
}

h1 {
    font-size: 4rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary-color);
}
</style>