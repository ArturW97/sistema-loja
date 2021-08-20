<template>
  <div class="detalhes">
    <Header />

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Detalhes do Produto</h1>
          <img
            class="imagemProduto"
            src="../assets/As-veias-abertas-da-america-latina.jpg"
          />
        </div>
        <div class="col-md-6">
          <h2>Nome do Produto</h2>
          <div class="preco">R$ {{ precoUnd.toFixed([2]) }}</div>
        </div>
        <div class="col-md-6">
          <h2 class="quantidadeTitulo">Quantidade</h2>
          <input
            type="number"
            class="quantidade"
            v-model="quantidade"
            @click="toCalculate"
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <h3>Descrição</h3>
        <p class="descricao">
          `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.`
        </p>
        <div class="total">
          Total: {{ quantidade }} x {{ precoUnd.toFixed([2]) }} = R$ {{ precoTotal.toFixed([2]) }}
        </div>
      </div>
      <button class="fazerPedido">Fazer Pedido</button>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "DetalhesProdutos",
  data: function() {
    return {
      precoUnd: 20.0,
      quantidade: 0,
      precoTotal: 0,
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    toCalculate : function() {
      if (this.quantidade >= 0 && this.quantidade < 999) {
        this.precoTotal = this.precoUnd * this.quantidade;
        return this.precoTotal;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style>
.detalhes {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: rgb(206, 229, 230);
}
.detalhes h1 {
  top: 0;
}
.imagemProduto {
  width: 30%;
  height: 15%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.preco {
  font-size: 16px;
  font-weight: bold;
}
.quantidadeTitulo {
  text-align: center;
}
.quantidade {
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  display: block;
}
.detalhes h3 {
  margin-top: 30px;
}
.descricao {
  margin-bottom: 20px;
}
.total {
  font-weight: bold;
  margin-bottom: 20px;
}
.fazerPedido {
  text-align: center;
  margin: 30px auto;
  width: 170px;
  height: 40px;
}
.final {
  margin-bottom: 50px;
}
</style>
