<template>
  <div class="app">
    <SideBar></SideBar>
    <RouterView/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import {RouterLink, RouterView} from 'vue-router'

export default {
  name: "App",
  components: {SideBar},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
@import 'assets/css/bundle.css';


:root {
  //--blue: #033043;
  //--dark: #121E31;
  //--skobeloff: #0A7273;
  //--white-coffie: #E9E3D5;
  //--yellow: #FDA521;
  //--dark-light: #22284F;
  //--grey-dark: #343a40;
  //--grey-middle: #495057;

  --white: #ffffff;
  --grey: #9E9E9E;
  --black: #1f1f1f;
  --black-light: #292929;
  --purpule: #8259c7;
  --grey-light: #CCCCCC;
}
* {
  top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
</style>
