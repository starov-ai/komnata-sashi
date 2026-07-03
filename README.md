# Komnata Sashi

Статический сайт с пятью концепциями ремонта комнаты Саши и отдельной страницей общего плана.

## Что публикуется

GitHub Pages берет содержимое папки `web-project` и публикует его как статический сайт.

Главная страница:

- `web-project/index.html`

Дополнительные страницы:

- `web-project/variant-1.html` ... `web-project/variant-5.html`
- `web-project/plan.html`

## Как опубликовать

1. Создать новый публичный репозиторий на GitHub.
2. Загрузить в него содержимое этой папки.
3. Убедиться, что основная ветка называется `main`.
4. В GitHub открыть `Settings -> Pages` и выбрать `Source: GitHub Actions`.
5. Запушить изменения в `main` или вручную запустить workflow `Deploy static site to GitHub Pages`.

После успешного выполнения workflow сайт будет доступен по адресу вида:

`https://USERNAME.github.io/REPOSITORY/`

Если репозиторий называется `USERNAME.github.io`, сайт откроется с корня домена:

`https://USERNAME.github.io/`
