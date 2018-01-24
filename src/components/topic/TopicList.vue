<template lang="html">
  <div class="">
    <b-table striped hover :items="topics"></b-table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'topics'
    ])
  },
  mounted: function() {
    this.$store.dispath('getTopics')
  }
}
</script>

<style lang="css">
</style>
