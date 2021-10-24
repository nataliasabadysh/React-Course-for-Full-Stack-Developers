# Нужно реализовать продвинутый Health трекер.
## Техническое задание

```
Приложение должно уметь регистрировать новых пользователей (in LS). 

Все поля формы регистрации кроме имени, фамилии, возраста и роста, являются обязательными.
Форма регистрации должна выводить текст ошибки на экран в тех ситуациях когда
форма заполнена неправильно.
Приложение должно уметь выполнять операцию Login для зарегистрированных
пользователей. В случае успешного входа необходимо переадресовать
пользователя на главную страницу.



В приложении должна быть отдельная страница profile на которой у пользователя
будет возможность редактировать данные своей учетной записи.

/fitness/profile


При клике на кнопку выйти необходимо выйти из приложения, а также сделать
редирект на страницу login


На главной странице необходимо отобразить набор ссылок на разные страницы. 

К примеру кнопка Добавить завтрак является ссылкой на отдельную страницу для
заполнения информации про завтрак.

Виджет на главной странице должен получать все необходимые данные с "json-server".  
И необходимо посчитать на основании Values -  Life Score. 

Сохранение данных в этом проекте нужно реализовать с помощью Redux
Приложение должно уметь работать в нашем случае с LocalStorage
```



```js
age: 30
email: "nataliasabadysh@gmail.com"
fname: "Natalia"
hash: "1635099854445"
height: 123
lname: "Sabadysh"
sex: "f"
weight: 32
```

# data 

```js
data : {
    reports: 40
}
```

# Pages 
```
Страница регистрации пользователя: 1-registration
Страница логина пользователя: 2-login
Страница профиля пользователя: 3-profile
Главная страница: 4-home

Страница добавления завтрака: 5-breakfast
Страница добавления обеда: 6-lunch
Страница добавления ужина: 7-dinner
Страница добавления активностей: 8-activity
Страница добавления фруктов: 9-fruits
Страница добавления овощей: 1-vegetables
Страница добавления фастфуд: 11-fastfood
Страница добавления воды: 12-water
Страница добавления сна: 13-dream
Страница добавления кофе: 14-coffe
```

```json
[
   {
      "breakfast":{
         "value":"light" // "heavy"
      },
      "lunch":{
         "value":"light", // "heavy"
      },
      "dinner":{
         "value":"light", // "heavy"
      },
      "activity":{
         "value":1000 
      },
      "fruits":{
         "value":false,
      },
      "vegetables":{
         "value":false,
         
      },
      "fastfood":{
         "value":false,
      },
      "water":{
         "value":1 // max 10, / 4 * 250 = 1000ml
      },
      "dream":{
         "value":2  // max 24
      },
      "coffe":{
         "value": false // true"
      }
   }
]
```
