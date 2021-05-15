<template>
  <div class="home">
    <Heading></Heading>
  </div>
</template>

<script>
// import Card from '../components/Card.vue'
import Heading from '../components/Heading.vue'

export default {
  name: 'Feedback',
  components: {
    Heading
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js Admin App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
