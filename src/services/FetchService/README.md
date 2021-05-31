# fetch-api

### Eng

When I was working in vue 2, I noticed that there is no easy way to get data in components.
You have to do a query and wait for a response, use computed. It wasn't very concise.
Then I started getting familiar with vue 3, and I discovered suspense-components.
I implemented fetching data in asynchronous components.
It worked well enough, although not very convenient for me.

Then I went further, and realized that I needed to implement caching.
I found a handy tool called "swrv". (Thanks to the author, I was inspired by this tool).
I faced with the fact that this tool doesn't allow implementing caching. So I had to make my own implementation of caching.

I use here abbreviations:

SWR - "Stale-While-Revalidate".

CO for "Cache-Only".

NF - "Newtwork-First".


### Ru

Когда я работал в vue 2, я заметил что нет простого пути для получения данных в компонентах. 
Нужно делать запрос и ждать ответ, использовать computed. Это было не очень лаконично. 
Затем я начал знакомиться с vue 3, и открыл для себя suspense-components. 
Я реализовал получение данных в асинхронных компонентах. 
Это работало достаточно хорошо, хоть и не очень удобно для меня. 

Затем я пошел дальше, и понял что мне нужно реализовать кеширование. 
Я нашел удобный инструмент "swrv". (Спасибо автору, я был вдохновлен этим инструментом).
Однако я столкнулся с тем, что этот инструмент не позволяет реализовать кеширование. Поэтому мне пришлось делать собственную реализацию кеширования.

Я использую здесь аббревиатуры:

SWR - "Stale-While-Revalidate"

CO - "Cache-Only"

NF - "Newtwork-First"
