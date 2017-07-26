<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


body {
  /* Location of the image */
  background-image: url(./assets/images/background-photo.jpg);
  
  /* Background image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Background image doesn't tile */
  background-repeat: no-repeat;
  
  /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;
  
  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;
}


@media only screen and (max-width: 767px) {
  body {
    /* The file size of this background image is 93% smaller
       to improve page load speed on mobile internet connections */
    background-image: url(./assets/images/background-photo-mobile-devices.jpg);
  }
}

.logo {
  margin-top: 150px;
  padding-bottom: 50px;
}

</style>
