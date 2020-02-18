Vue.component('paralax-list', {
    data() {
        return {
            images: [
                { image: 'https://media.gettyimages.com/photos/abstract-network-background-picture-id836272842?s=612x612' },
                { image: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg' },
                { image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' },
                { image: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' }
              ],
             windowScroll: document.documentElement.scrollTop,
             windowHeight: document.documentElement.scrollHeight - document.documentElement.clientHeight,
        }
    },
    template: `<ul class="parallax__list">
    <paralax-item :article='image' v-for='image in images'></paralax-item>
    </ul>`,
    mounted() {
        console.log(this.windowScroll)
        console.log(this.windowHeight)
    }
  })

Vue.component('paralax-item', {
    props:['article'],
    template: `<li class="parallax__item">
    <img class="parallax__image" :src="article.image" alt=""></img>
    </li>`,
    methods: {
       handleScroll() {
         // тут знімаємо значення скролу та модифікуємо
         // якусь змінну з datа, яка відповідатиме за
         // зміщення бекграунду на компоненті
       },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    }
  })

  const app = new Vue({
    el: '#app',
  });