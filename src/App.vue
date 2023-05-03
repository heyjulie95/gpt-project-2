<!-- App.vue -->
<template>
  <div id="app">
    <div class="app-start">
      <HeaderComponent />
      <StartScreen />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import StartScreen from './components/StartScreen.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    StartScreen,
  },
};
</script>

<style>
.app-start {
  width: 100%;
  background-image: url('@/assets/img/start-screen-gradient-background.png');
  background-size: cover;
  background-position: center;
}

@font-face {      /*Добавим шрифт */
    font-family: Georgia;
    src: url(assets/fonts/Georgia.ttf);
}

</style>



