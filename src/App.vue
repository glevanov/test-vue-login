<template>
  <div id="app">
    <header class="header">
      <div class="wrapper header__wrap">
        <h1 class="header__heading">
          Кабинет пользователя
        </h1>
        <router-link
          to="/"
          class="header__home"
          aria-label="Вернуться на главную"
        >
          <img
            src="./assets/home.svg"
            alt="Иконка дома"
            height="38"
          >
        </router-link>
      </div>
    </header>
    <main class="main">
      <div class="wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import '~normalize.css';
  @import './root.css';
  @import './App.css';
</style>
