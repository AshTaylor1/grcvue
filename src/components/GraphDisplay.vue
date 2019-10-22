<template>
    <div>
        <d3-network :net-nodes="nodes" :net-links="links" :options="options"/>
        <p>{{service}} </p>
    </div>
</template>


<script>
  import D3Network from 'vue-d3-network'
  import axios from 'axios'

  var url = "https://demo.viosystems.com/grcapi/graph";
  if (graphendpoint != undefined)
    url = graphendpoint + 'graph/';

  export default {
    name: "GraphDisplay",
    components: {
      D3Network
    },
    props: {
      service: {}
    },


    mounted() {
     this.refreshGraph();
    },
    data() {
      return {
        nodes: [],
        links: [],
        nodeSize: 20,
        canvas: false
      }
    },
    computed: {
      options() {
        return {
          force: 7000,
          size: {w: 800, h: 600},
          nodeSize: this.nodeSize,
          nodeLabels: true,
          linkLabels: true,
          canvas: this.canvas,
          linkWidth: 4,
          fontSize : 15,
          strLinks : false
        }
      }
    },
    watch: {
      service: function (newVal, oldVal) {
        this.refreshGraph();
      }
    },
    methods: {
      lcb(link) {
        return link
      },
      refreshGraph: function () {
        axios.get(url + this.service)
          .then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data);
            this.nodes = response.data.nodes;
            this.links = response.data.links;
          })
          .catch(e => {
            // eslint-disable-next-line no-console
            console.log(e);
          });
      },
    }
  }
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>

