# fetch-api

### Eng

When I was working in vue 2, I noticed that there is no easy way to get data in components.
You have to make a query and wait for a response, use computed. It wasn't very concise.
Then I started to get familiar with vue 3, and discovered suspense-components.
I implemented getting data in asynchronous components.
It worked well enough, although not very convenient for me.

Then I went further and realized that I needed to implement caching.
I found a handy tool called "swrv". (Thanks to the author, I was inspired by this tool).
However, I ran into the fact that this tool does not allow me to pass fetcher with args,
and I could not get the data to display properly. So I had to make my own implementation of caching.
I use the acronyms here:

SWR - "Stale-While-Revalidate".

CO - "Cache-Only".

P.S. I'm impressed by how cool ref() works, allowing us to use it even outside of components :)

### Ru

Когда я работал в vue 2, я заметил что нет простого пути для получения данных в компонентах. 
Нужно делать запрос и ждать ответ, использовать computed. Это было не очень лаконично. 
Затем я начал знакомиться с vue 3, и открыл для себя suspense-components. 
Я реализовал получение данных в асинхронных компонентах. 
Это работало достаточно хорошо, хоть и не очень удобно для меня. 

Затем я пошел дальше, и понял что мне нужно реализовать кеширование. 
Я нашел удобный инструмент "swrv". (Спасибо автору, я был вдохновлен этим инструментом).
Однако я столкнулся с тем, что этот инструмент не позволяет передать fetcher with args, 
и я не мог правильно получать данные для отображения. Поэтому мне пришлось делать собственную реализацию кеширования.

Я использую здесь аббревиатуры:

SWR - "Stale-While-Revalidate"

CO - "Cache-Only"

P.S. Я впечатлен тем, как круто работает ref(), позволяя нам использовать его даже вне компонентов :)
