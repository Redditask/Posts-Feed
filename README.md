# Posts-Feed

Этот небольшой проект я написал в целях закрепления практических навыков по React. Он представляет собой ленту постов с каким-то названием и содержанием.

Какой функционал релизован?
- Добавление и удаление постов (+ анимация этих действий);
- Подтягивание стандартного набора постов с jsonplaceholder (реализовано с помощью HTTP запроса GET);
- Фильтрация постов по названию (поле title) или по содержанию (поле body), поиск постов по названию;
- Пагинация;
- Полноценный роутинг между страницами;
- Несколько кастомных хуков;
- Авторизация (и храниние состояния авторизации в local storage);

Какие библиотеки использовались?
- React Transition Group (для анимаций)
- Axios (для http запросов)
- React Router (для роутинга между страницами)

При написании проекта также использовался препроцессор SASS (использовался с изолицияей стилей, то есть через модули);

В данном проекте упор шёл именно на функционал и возможности React-а, поэтому стилизация немного хромает.
