<template>
  <div class="dialog_add_user">
    <div class="dialog-body">
      123
    </div>
  </div>
</template>>

<script>
export default {
  data () {
    return {
    }
  }
  
}
</script>

<style lang="" scoped>
  .dialog_add_user {
    position: fixed;
    z-index: 9999;
    width: 1001px;
    height: 1000px;
    background: #f00;
  }
  .dialog-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 450px;
    z-index: 100;
    background: blue;
  }
</style>