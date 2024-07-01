<template>
  <div class="app">
    <NavBar></NavBar>
    <RouterView />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: "App",
    components: {NavBar},
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lobster&display=swap');


:root {
  --primary: #dae1e7;
  --blue: #142850;
  --blue-light: #00909E;
  --primary-dark: #a9acb4;
  --blue-dark: #101f41;
  --primary-bright: #e8f1f8;
  --blue-bright: #193469;
  --black: #1A1A1A;
  --black-light: #262626;
  --focus-element: #ededed;
  --white: #ffffff;
  --red: #c72929;
  --red-black: #a42222;

}

*{
  top: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
</style>
