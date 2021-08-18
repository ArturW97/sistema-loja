<template>
  <div class="home">
    <Header />
    <Pesquisar />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Pesquisar from "../components/Pesquisar.vue";
import Footer from "../components/Footer.vue";


export default {
  name: "Home",

  components: {
    Header,
    Pesquisar,
    Footer
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
</style>