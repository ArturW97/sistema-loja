<template>
  <div>
    <div class="card">
      <img
        src="../assets/As-veias-abertas-da-america-latina.jpg"
        class="imgCard"
      />
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button>Pesquisar</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    id: String,
    title: String,
    description: String,
  },
};
</script>
<style>
.card {
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 20px 10px;
  display: flex;
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
}
</style>