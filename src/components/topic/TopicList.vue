<template lang="html">
  <div class="">
    <b-table striped hover :items="topicList"></b-table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'topicList'
    ])
  },
  mounted: function() {
    this.$store.dispatch('getTopicList')
  }
}
</script>

<style lang="css">
</style>
