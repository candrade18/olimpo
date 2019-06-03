<template>
  <div id="app">
     <transition name="fade">
      <router-view/>
     </transition>
  </div>
</template>



<script>
export default {
  mounted () {
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700');  
@import "@/style/main.scss";
  
  body {
    font-family: 'Raleway', sans-serif;
  }


  
.VueCarousel-pagination{
    display: none;
}

  .wrap {
    margin: 0 auto;
    max-width: 1100px;
    width: 1100px;
    @include media_tablet() {
      padding: 0 23px;
      width: 100%;
    }
  }


</style>

