<template>
  <!-- <div
    style="border: 1px solid #DCDCDC;background-color:#ffffff;position: relative; margin-bottom: 15px; box-sizing: border-box;"
    :data-link="events.click.link"
    :data-diversion="JSON.stringify(events.click)"
  >
    <div style="word-break: break-all;" v-html="text"></div>
    <div style="margin-left: 5px;width: 0;height: 0;border-width: 8px;border-style: solid;border-color:#DCDCDC transparent transparent transparent;position: absolute;bottom: -16px;left: 15px;">
      <div style="margin-left: 5px;width: 0;height: 0;border-width: 6px;border-style: solid;border-color:rgba(255,255,255,1) transparent transparent transparent;position: absolute;bottom: -4px; left: -11px"></div>
    </div>
  </div> -->
  <div
    style="border: 1px solid #DCDCDC;background-color:#ffffff;position: relative; margin-bottom: 15px; box-sizing: border-box;"
  >
    <div style="word-break: break-all;" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: 'SpecialTextTwo',
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