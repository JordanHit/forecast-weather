<template>
  <div class="app">
    <SideBar></SideBar>
    <RouterView />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: "App",
    components: {SideBar},
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap');


:root {
  --blue: #033043;
  --dark: #121E31;
  --skobeloff: #0A7273;
  --white: #E9E3D5;
  --yellow: #FDA521;
  --dark-light: #22284F
}

*{
  top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
</style>
