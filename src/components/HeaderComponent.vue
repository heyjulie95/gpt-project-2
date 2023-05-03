<!-- HeaderComponent.vue -->
<template>
  <header class="header-component">
    <div class="header">
      <div class="logo">
        <h1 class="logo-title">Cozy House</h1>
        <span class="logo-subtitle">Shelter for pets in Boston</span>
      </div>
      <nav class="navigation">
        <a href="#" class="nav-item">About the shelter</a>
        <a href="#" class="nav-item">Our pets</a>
        <a href="#" class="nav-item">Help the shelter</a>
        <a href="#" class="nav-item">Contacts</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};

</script>
<style scoped>
.header-component {
  width: 1200px;
  height: 180px;
  margin: 0 auto;
  display: flex;
  /* align-items: center;   Убрали лишнее */    
  justify-content: center;
}

.header {
  width: 100%;
  height: 60px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 186px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.logo-title {
  font-family: Georgia;
  font-size: 32px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.06em;
  text-align: center;
  color: #F1CDB3;
}

.logo-subtitle {
  font-family: Arial;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
}

.navigation {
  display: flex;
  align-items: center;
}

.nav-item {
  color: #CDCDCD;
  font-family: Arial;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 35px;       /*  Поменяли right на left  */
  text-decoration: none;
  position: relative;
}


.nav-item:hover,
.nav-item.active {
  color: rgba(250, 250, 250, 1);
}

.nav-item:hover::after,
.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #F1CDB3;
}
</style>







