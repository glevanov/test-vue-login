<template>
  <div id="app">
    <header class="header">
      <div class="wrapper">
        <h1 class="header__heading">
          Кабинет пользователя
        </h1>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style>
  @import '~normalize.css';
  @import './root.css';

  #app {
    font-family: -apple-system,
    BlinkMacSystemFont,
    Segoe UI, Roboto,
    Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue,
    sans-serif;
  }

  .wrapper {
    max-width: 512px;
    margin-left: auto;
    margin-right: auto;
  }

  .header {
    background-color: var(--color-primary);
  }

  .header__heading {
    margin: 0;

    color: var(--color-text-contrast);
  }
</style>
