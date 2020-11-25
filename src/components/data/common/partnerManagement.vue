<template>
  <div class="partnerManagement">
    <header>1</header>
    <main>
      <nav>2</nav>
      <article>
        <div style="width: 500px; height: 300px; border: 1px solid red" class="big">
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
          <div style="width: 100px; height: 100px; border: 1px solid #333; margin: 10px"></div>
        </div>
      </article>
      <aside>4</aside>
    </main>
    <footer>5</footer>
  </div>
</template>

<script>
export default {
  name: 'PartnerManagement',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
body{
  display: flex;
  align-items: center;
}
header{
  height: 60px;
  background: #3399ff;
}
main{
  display: flex;
  flex: 1;
  justify-content: center;
  background: #eee;
  height: calc(100vh - 120px);
}
nav{
  background: #34ff65;
  width: 200px;
}
article{
  background: skyblue;
  flex: 1;
}
aside{
  /* height: 100%; */
  width: 200px;
  background: #3500ee;
}
footer{
  height: 60px;
  background: #333;
}

/* 屏幕小于800px切换视图 */
@media screen and (max-width: 800px) {
    main {
      flex-direction: column;
    }
    nav, aside {
      width: 100%;
    }
}

.big{
  display: flex;
}
</style>
