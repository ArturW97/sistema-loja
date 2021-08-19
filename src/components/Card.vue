<template>
  <div>
    <div class="card">
      <img
        :src="imagemProduto"
        class="imgCard"
      />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button><router-link to="/detalhes">Fazer Pedido</router-link></button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    imagemProduto: Image
  },
};
</script>
<style>
.card {
  background: #edeec6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 20px 10px;
  display: flex;
  height: 548px;
  flex-direction: column;
  align-items: center;
}
.imgCard {
  width: 80px;
  height: 120px;
}
.card h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  height: 40px;
}
.card p {
  font-size: 14px;
  color: #000000;
}
.card button {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: #c3121c;
  color: #ffffff;
  border: none;
  margin-top: auto;
}
</style>