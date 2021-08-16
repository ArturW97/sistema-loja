<template>
  <div class="home">
    <Pesquisar />
  </div>
</template>
<script>
import Pesquisar from "./Pesquisar.vue";

export default {
  name: "Home",

  components: {
    Pesquisar,
  },
};
</script>

<style>
.home {
  width: 100%;
  height: auto;
  background-color: #e2e2e2;
  overflow: hidden;
}
.banner__imgs {
  position: absolute;
  top: 0;
  width: 100%;
}
.images {
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0;
  transition: opacity linear 2.5s;
}
.active {
  opacity: 1;
}
.banner__content {
  position: relative;
}
.banner__content p {
  font-size: 20px;
  line-height: 25px;
  color: rgb(34, 34, 34);
  font-weight: bold;
}
</style>