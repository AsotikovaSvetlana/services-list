# Services List

[![Build status](https://ci.appveyor.com/api/projects/status/q877vjsyhyqk1iuq?svg=true)](https://ci.appveyor.com/project/AsotikovaSvetlana/services-list)

### [Demo](https://asotikovasvetlana.github.io/services-list/)

CRUD-приложение на React. Состояние хранится в Redux Store, для взаимодействия с HTTP используется Fetch и Redux Thunk. Для демонстрации процесса загрузки и обработки ошибок на сервере выполняется генерация задержки/ошибки.

**Environment:** Redux, Redux Thunk, React Router, Fetch API, JavaScript, HTML5, CSS3.

## Старт

Cклонируйте репозиторий и установите зависимости
```
npm install
```

Запустите проект
```
npm start
```

## Описание

При переходе на главную страницу пользователь автоматически перенаправляется на адрес '/services', на котором загружается список услуг (GET /api/services).

При загрузке данных (GET) отображается спиннер (лоадер):

![](./assets/spinner.png)

При получении ошибки:
 
![](./assets/error.png)

При нормальных загруженных данных:

![](./assets/list.png)

Для главной страницы сервер присылает данные в формате:
```json
[
    {"id":1,"name":"Замена стекла","price":21000},
    {"id":2,"name":"Замена дисплея","price":25000},
    {"id":3,"name":"Замена аккумулятора","price":4000},
    {"id":4,"name":"Замена микрофона","price":2500}
]
```

При нажатии на кнопку удалить происходит удаление записи с последующей загрузкой всего списка (DELETE /api/serviced/:id, где id - id сервиса).

При нажатии на кнопку редактировать происходит переход по адресу: '/services/:id`, где id - это id сервиса.

В форму подтягиваются данные через GET-запрос:

![](./assets/edit.png)

При нажатии на кнопку Сохранить, происходит сохранение записи:
1. Отображается спиннер
1. Если сохранение прошло успешно, выполняется переход на страницу со списком
1. Если сохранение прошло с ошибкой, переход не осуществляется, высвечивается сообщение об ошибке.

При нажатии на кнопку Отмена, происходит возврат к предыдущей странице.
