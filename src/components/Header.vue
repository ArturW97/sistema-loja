<template>
      <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <h1 class="logo">
          </h1>
        </div>
        <div class="col-md-6 headerRight">
          <nav class="menu">
            <ul>
              <li>Clientes</li>
              <li><router-link to="/">Produtos</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
</script>
<style>
.header {
  background-color: rgb(64, 64, 228);
  height: 70px;
  width: 100%;
}
.headerRight {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.logo {
  width: 200px;
  padding: 0px;
  margin-top: 15px;
}
.logo__img {
  width: 100%;
}
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #e2e2e2;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.menu ul li {
  padding: 4px 14px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.menu ul li:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 1px;
  background-color: #e2e2e2;
  height: 13px;
  margin-left: 20px;
}
.menu ul li:hover {
  background-color: rgb(42, 42, 224);
}
</style>