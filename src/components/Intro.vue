<template>
    <div>
        <h1>Governance Risk And Control Demo</h1>
        <span style="float: left; width: 50%; ">
        <div>
            <p>
                This is a demo to show CQRS patterns for graph queries using mediated micro-sevices connecting to a
                graph database.
                Data flows will be harvested from the telemetry exposed by each self documenting micro-service and
                correlated by Sleuth.
            </p>
        </div>
            <GraphDisplay v-bind:service="service"/>
        </span>
        <span style="float: right; width: 49%; margin-left: 1%; ">
            <div>
            <p>
                Graph Schema
            </p>
        <img src="../assets/Schema.png" alt="GRC Partial Schema" width="70%">
            </div>
        </span>
    </div>
</template>

<script>
  import GraphDisplay from "@/components/GraphDisplay";

  export default {
    name: 'Intro',
    components: {
      GraphDisplay
    },
    props: {
      service : {}
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 5px;
        margin-left: 20px;
    }

</style>
