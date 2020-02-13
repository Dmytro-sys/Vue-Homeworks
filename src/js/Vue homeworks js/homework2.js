Vue.component('blog-list', {
    template: '<ul><slot></slot></ul>',
    created() {
      console.log("blog-list created");
    }
  });
  
  Vue.component('blog-item', {
    template: '<li>{{ title }}, {{ subtittle }}</li>',
    beforeCreate() {
      console.log("blog-item beforeCreate complete" +
        ", " + `data from app1 is ${ this.title }`);
    },
    created() {
      this.title = this.$root.title
      console.log("blog-item created complete" + ", " +
        `now we can get data from $root element, this.title = ${ this.title }`);
    },
    beforeMount() {
      this.subtittle = this.$root.subtittle
      console.log("blog-item beforeMount complete" + ", " +
        `let's take more data from app1, this.subtittle = ${ this.subtittle }.`,
        ` this.$el is ${this.$el} yet, but it will soon created!`);
    },
    mounted() {
      console.log("blog-item mounted complete" + ", " +
        `access to reactive component, templates and rendered DOM,
      this.$el.textContent = ${ this.$el.textContent }`);
      this.$el.style.color = 'red';
      this.$el.style.fontSize = '26px';
      this.$el.style.listStyle = 'square';
    },
  });
  
  Vue.component('first-component', {
    props: ['count'],
    template: `<input type="text" placeholder="Count + 1">`,
    created() {
      console.log("first-component created");
    }
  });
  
  Vue.component('second-component', {
    data: function () {
      return {
        count: 0
      }},
      template: '<p v-on:mouseover="count++">Count is {{ count }}</p>',
    created() {
      console.log("second-component created");
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const app1 = new Vue({
      el: '#app1',
      data: {
        title: 'Task list',
        subtittle: 'my task list name'
      },
      created() {
        console.log("app1 created");
      }
    });
  
    const app2 = new Vue({
      el: '#app2',
      methods: {
        countUp() {
          return this.count += 1;
        }
      },
      created() {
        console.log("app2 created");
      }
    });
  });