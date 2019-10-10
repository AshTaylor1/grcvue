<template>
    <div id="sidebar">
        <p>IT Services</p>
        <div v-for="(item, index) in items" :key="index">
            <button v-on:click="select(item)">
                {{item}}
            </button>
        </div>
    </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "SideNav",
    data: function () {
      return {
        items: []
      }
    },
    methods: {
      select: function (item) {
        this.$emit('service-change', item);
      }
    },
    mounted() {
        var url = "http://localhost:9080/grcapi/services";
        if (graphendpoint != undefined)
          url = graphendpoint + 'services';
        // eslint-disable-next-line no-console
        axios.get(url)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data);
            this.items = response.data;
          })
          .catch(e => {
            // eslint-disable-next-line no-console
            console.log(e);
          });
      },

    }

</script>

<style scoped>
    #sidebar {
        height: 100%;
        width: 200px;
        color: darkslategray;
        background: aquamarine;
    }
</style>
