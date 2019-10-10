<template>
    <div id="app">

           <a href="http://viosystems.com/" alt="VIO Systems">
                <img alt="VIO logo" src="./assets/logo.png" width="15%">
            </a>

      <SideNav id="nav" v-on:service-change="notifyGraph"/>
      <Intro v-bind:service="service"/>

    </div>
</template>

<script>
  import Intro from "@/components/Intro";
  import SideNav from "@/components/SideNav";

  export default {
    name: 'app',
    components: {
      Intro,
      SideNav
    },
    data() {
      return {
          service: 'Fake News'
      }
    },
    methods: {
      notifyGraph: function (item) {
        this.service = item;
      }
    },
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 5px;
        margin-left: 160px;
     }
  #nav
  {
    color: aliceblue;
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 160px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
  }

</style>
