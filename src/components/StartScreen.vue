
```html
<!-- StartScreen.vue -->
<template>
  <div class="start-screen">
    <div class="content">
      <h2 class="title">Not only people <br> need a house</h2>
      <p class="description">
        We offer to give a chance to a little and nice puppy with an extremely <br>
        wide and open heart. He or she will love you more than anybody else <br>
        in the world, you will see!
      </p>
      <button class="make-friend-btn">Make a friend</button>
    </div>
    <img
      src="@/assets/img/start-screen-puppy.png"
      alt="Start screen puppy"
      class="puppy-image"
    />
  </div>
</template>

<script>
export default {
  name: 'StartScreen',
};
</script>

<style scoped>
.start-screen {
  width: 1200px;
  height: 728px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.content {
  width: 460px;
  height: 322px;
  margin-top: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-family: Georgia;
  font-size: 44px;
  font-weight: 400;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
}

.description {
  font-family: Arial;
  font-size: 15px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;
color: #CDCDCD;
}

.make-friend-btn {
width: 207px;
height: 52px;
background: #F1CDB3;
border-radius: 100px;
font-family: 'Georgia';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 130%;
letter-spacing: 0.06em;
color: #292929;
border: none;
cursor: pointer;
outline: none;
}

.make-friend-btn:hover {
background: rgba(253, 220, 196, 1);
}

.puppy-image {
width: 698px;
height: 728px;
}
</style>