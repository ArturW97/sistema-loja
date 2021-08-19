<template>
  <section class="pesquisar">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Produtos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="search" placeholder="Pesquisar" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="event in eventsFiltered" :key="event.id">
          <Card
            :imagemProduto="event.imagemProduto"
            :title="event.title"
            :description="event.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Pesquisar",
  components: {
    Card,
  },
  data: function() {
    return {
      search: "",
      events: [
        {
          id: 1,
          title: "As Veias Abertas da América Latina",
          description: `Remontando a 1970, sua primeira edição, atualizada em 1977, quando 
          a maioria dos países do continente padecia facinorosas ditaduras, este livro 
          tornou-se um 'clássico libertário', um inventário da dependência e da vassalagem 
          de que a América Latina tem sido vítima, desde que nela aportaram os europeus no 
          final do século XV. No começo, espanhóis e portugueses. Depois vieram ingleses, 
          holandeses, franceses, modernamente os norte-americanos, e o ancestral cenário 
          permanece - a mesma submissão, a mesma miséria, a mesma espoliação`,
          imagemProduto: require("../assets/As-veias-abertas-da-america-latina.jpg"),
        },
        {
          id: 2,
          title: "17 Contradições e o Fim do Capitalismo",
          description: `Para a sociedade ocidental moderna, o capital parece tão natural como 
          o ar que se respira, e quase ninguém pensa em questioná-lo. Mas saber o que faz o 
          capital funcionar - e o que, por outro lado, pode abalar suas bases - é crucial para 
          compreender sua saúde em longo prazo, bem como as vastas implicações de qualquer 
          mudança para a economia global. É o que faz o geógrafo britânico David Harvey nesta 
          obra incisiva, ao revelar a vanguarda de suas análises das dinâmicas do capital e 
          destrinchar as contradições internas desse motor econômico..`,
          imagemProduto: require("../assets/17-contradicoes-e-o-fim-do-capitalismo.jpg"),
        },
        {
          id: 3,
          title: "O que é Etnocentrismo",
          description: `Se comparássemos o Brasil com os Estados Unidos, e o parâmetro de 
          comparação fosse o futebol, teríamos o Brasil como o mais ´desenvolvido´ e os Estados
           Unidos como o mais ´atrasado´. Se, por outro lado, o referencial fosse o número de 
           grupos de rock, a ordem já seria outra. Cada sociedade possui sua própria cultura, 
           sua própria visão do mundo. A comparação e o confronto entre as diversas identidades
            é o objetivo de estudo do Etnocentrismo. Com isso, busca compreender melhor o 
            próprio ser humano e sua relação com o mundo que o cerca.`,
          imagemProduto: require("../assets/o-que-e-etnocentrismo.jpg"),
        },
        {
          id: 4,
          title: "Saber Envelhecer",
          description: `Límpido texto sobre a velhice, Cícero desenvolve a tese de que a arte de envelhecer 
          é encontrar o prazer que todas as idades proporcionam, pois todas têm as suas virtudes.Cícero vê 
          quatro razões para acharem a velhice detestável. 1)Ela nos afasta da vida ativa. 2)Ela
          enfraqueceria o nosso corpo. 3)Ela nos priva dos melhores prazeres. 4)Ela nos aproxima da morte.
          Ele analisa cada um desses elementos e vê as justezas e equívocos de cada um.`,
          imagemProduto: require("../assets/saber-envelhecer.jpg"),
        },
        {
          id: 5,
          title: "Psicologia de Massas Do Fascismo",
          description: `Este estudo clássico é uma contribuição única à compreensão de um dos fenômenos 
          cruciais do nosso tempo - o fascismo. Para W. Reich, o fascismo é a expressão da estrutura 
          irracional do caráter do homem médio, cujas necessidades biológicas e primárias e cujos impulsos
          são reprimidos há milênios. O autor analisa cuidadosamente a função social dessa opressão e o 
          papel decisivo que a família autoritária e a igreja desempenham.`,
          imagemProduto: require("../assets/psicologia-de-massas-do-fascismo.jpg"),
        },
        {
          id: 6,
          title: "Por uma Outra Globalização",
          description: `O geógrafo Milton Santos defende a ideia de que é preciso uma nova interpretação 
          do mundo contemporâneo, uma que tenha condições de destacar a 
          ideologia na produção da história, além de mostrar os limites do seu discurso frente à 
          realidade vivida pela maioria dos países do mundo. A informação e o dinheiro acabaram por se 
          tornar vilões, à medida que a maior parte da população não tem acesso a nenhum dos dois. São 
          os pilares de uma situação em que o progresso técnico é aproveitado por um pequeno número de 
          atores globais em seu benefício exclusivo.`,
          imagemProduto: require("../assets/por-uma-outra-globalizacao.jpg"),
        },
        {
          id: 7,
          title: "O Príncipe",
          description: `O Príncipe é um guia de como chegar ao poder e manter-se nele, buscando não apenas
          o ideal, mas o real. O livro assume a forma de manual de um bom governante, ensinando as 
          estratégias políticas necessárias, nem sempre corretas e aprovadas majoritariamente, de como 
          chegar ao poder e mantê-lo, garantindo a unificação e a estabilidade do Estado. Maquiavel criou 
          a noção de Estado como forma de organização de uma sociedade. O Príncipe é uma obra atemporal, 
          que deve, no entanto, ser contextualizada ao momento de cada sociedade e não seguida de forma 
          arbitrária.`,
          imagemProduto: require("../assets/o-principe.jpg"),
        },
        {
          id: 8,
          title: "O Ódio Como Política",
          description: `'Direitas', 'novas direitas', 'onda conservadora', 'fascismo', 'reacionarismo', 
          'neoconservadorismo' são algumas expressões que tentam conceituar e dar sentido a um fenômeno 
          que é indiscutível protagonista nos cenários nacional e internacional de hoje, após seguidas 
          vitórias dessas forças dentro do processo democrático. Trump, Brexit e a popularidade de 
          Bolsonaro integram as complexas dinâmicas das direitas que a coletânea busca aprofundar a 
          partir de ensaios escritos por grandes pensadores da atualidade.`,
          imagemProduto: require("../assets/o-odio-como-politica.jpg"),
        },
        {
          id: 9,
          title: "A Elite do Atraso",
          description: `No âmago da interpretação de Jessé Souza não está a corrupção política. Para 
          ele, a questão a partir da qual se deve explicar a história passada e atual do Brasil – e 
          de suas classes, portanto – não é outra senão a escravidão.Sob uma perspectiva inédita, 
          ele revela fatos cruciais sobre a vida nacional, demonstrando como funcionam as estruturas 
          ocultas que movem as engrenagens do podere de que maneira a elite do dinheiro exerce sua 
          força invisível e manipula a sociedade – com o respaldo das narrativas da mídia, do 
          judiciário e de seu combate seletivo à corrupção.`,
          imagemProduto: require("../assets/a-elite-do-atraso.jpg")
        }, 
      ],
    };
  },
  computed: {
    eventsFiltered: function() {
      return this.events.filter(
        (event) =>
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      );
    },
  },
};
</script>
<style>
.pesquisar {
  padding: 56px 0px;
  background-color: #e2e2e2;
  width: 100%;
  height: auto;
}
.pesquisar .row {
  align-items: flex-start;
}
.pesquisar input {
  border-radius: 50px;
  background-color: #f1f1f1;
  border: none;
  width: 70%;
  height: 30px;
  padding: 4px 14px;
  float: right;
}
</style>
