<template>
  <header>
    <nav>
      <ul class="nav-left">
        <li><a href="">Главная</a></li>
        <li><a href="">О нас</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
      <div class="nav-right">
                <a href="" class="nav-end__link" >Корзина<span id="basket_total_num">
                        (0)
                </span></a>
            </div>
    </nav>
  </header>
  <main>
    <!-- <RestPage/> -->
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import RestPage from './components/RestPage.vue'
export default {
  name: 'App',
  components: {
    RestPage
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

header{
  width: 100%;
  height: 100px;
  text-align: center;
  background: linear-gradient(#220000, #580005);
}
h1{
  font-size: 42px;
  color: #fff;
  line-height: 230px;
  text-transform: uppercase;
  font-weight: 100;
  transition:all .3s ease;
}
nav {
  max-width: 950px;
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
}
nav a {
  text-decoration: none;
  color: white;
}
nav a:hover {
  color: rgb(255, 213, 0);
}
.nav-left {
  max-width: 450px;
    width: 100%;
    list-style-type: none;
    display: flex;
}
.nav-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 330px;
  width: 100%;
}
footer {
  width: 100%;
  height: 300px;
  text-align: center;
  background: linear-gradient(#580005, #220000);
}
</style>
