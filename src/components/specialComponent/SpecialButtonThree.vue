<template>
  <!-- <div style="word-break: break-all;"
    v-html="text"
    :data-link="events.click.link"
    :data-diversion="JSON.stringify(events.click)"
  ></div> -->
  <div style="word-break: break-all;"
    v-html="text"
  ></div>
</template>

<script>
export default {
  name: 'SpecialButtonThree',
  props: {
    text: [String],
    events: {
      type: Object,
    },
  }
}
</script>

<style scoped>

</style>