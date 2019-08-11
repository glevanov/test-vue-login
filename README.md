# test-vue-login
Тестовое задание на создание формы логина.

## Быстрый старт
Готовое приложение доступно по ссылке [http://glevanov.github.io/test-vue-login/](http://glevanov.github.io/test-vue-login/).

Для локальной установки:
```
git clone https://github.com/glevanov/test-vue-login.git
cd test-login-server
yarn install
yarn run serve
```

## Стэк
При выполнении задания использованы Vue (включая vue-cli и vue-router), axios, ванильный CSS и сервер на Express.

## Описание
Приложение состоит из нескольких экранов:
1) Ввод имени пользователя
1) Ввод проверочного кода
1) Личный кабинет

Имя пользователя задаётся из адресной строки (пути вида ```/u/kate```), но возможно также ввести его вручную через форму ввода.

Для целей тестирования доступны:
* username: ```bob```
* code: ```marley```

Для работы приложения используется тестовый сервер [(см. на GitHub)](https://github.com/glevanov/test-login-server).
Готовый сервер развёрнут на [heroku](https://glevanov-test-login.herokuapp.com/).
