# UI-Swiper

*[Посмотреть демо ](https://alekseiturl.github.io/UI-Swiper/)*

Функция динамической инициализации слайдера на мобильных разрешениях. **Функция принимает следующие параметры:**

<br/>
* ***breakpoint*** - точка включения слайдера *(например max-width: 768px)*
* ***swiperClass*** - класс инициализации слайдера *(например slider-1)*
* ***swiperSettings*** - объект настроек слайдера
* ***callback*** - функция, которая будет вызвана после инициализации *(не обязательный параметр). Дефолтно принимает instance для взаимодействия с [методами Swiper](https://swiperjs.com/swiper-api#methods--properties).*
<br/>

***Примерный вызов функции:***
  
```js
 resizableSwiper(
        '(max-width: 768px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );
```

## Для корректной работы необходимо использовать следующую HTML разметку:
*При необходимости можно использовать [кастомные классы Swiper](https://swiperjs.com/swiper-api#param-slideActiveClass).*
<br/>

```html
  <div class="swiper slider-1"> <! -- Основной класс свайпера + класс инициализации -->
        <div class="swiper-wrapper some-container"> <! -- wrapper класс контейнер -->
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                <div class="content-card">Контент</div>  <! -- some content card -->
            </div>
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                 <div class="content-card">Контент</div> <! -- some content card -->
            </div>
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                 <div class="content-card">Контент</div>  <! -- some content card -->
            </div>
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                 <div class="content-card">Контент</div>  <! -- some content card -->
            </div>
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                 <div class="content-card">Контент</div>  <! -- some content card -->
            </div>
            <div class="swiper-slide some-container__item"> <! -- слайд -->
                 <div class="content-card">Контент</div>  <! -- some content card -->
            </div>
        </div>
        <div class="swiper-pagination"></div> <! -- swiper pagination-->
    </div>
```
## CSS стилизация: 
На dekstop задаются желаемые стили для отображения контента и переопределяются стили Swiper. После, с помощью медиа запроса важно отменить декстопные стили

```css
.some-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
  .some-container {
      display: flex;
      column-gap: 0;
  }
}
```
***CSS классы:***

<div style="margin: 0 auto">
  
| .slider-#      | .some-container         | .some-container__item | .content-card      | 
| :-------------:| :---------------------: | :-------------------: | :----------------: |
| Основной класс | wrapper класс контейнер | слайд                 | Some content card  |

</div>
