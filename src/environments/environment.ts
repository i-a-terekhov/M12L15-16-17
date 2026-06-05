export const environment = {
  production: false,
};


// Переменные окружения используются для того, чтобы под разные сборки использовать разные значения

// В angular.json в секции fileReplacements указывается, в development-сборке нужно
// вместо       src/environments/environment.ts
// использовать src/environments/environment.development.ts
// таким образом, например, можно для разных сборок подставлять разные адреса серверов или проводить разные запросы/логирования и пр.
