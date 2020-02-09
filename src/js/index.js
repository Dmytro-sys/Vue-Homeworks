import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';

Vue.component('list-item', {
  props: ['value'],
  template: '<li>{{value.text}} - {{value.id}}</li>',
  methods: {
    removeTask(index) {
      this.mytasks.splice(index, 1);
    }
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#list',
    data: {
      title: 'Task list',
      items: [{
          text: "Task 1"
        },
        {
          text: "Task 2"
        },
        {
          text: "Task 3"
        },
        {
          text: "Task 4"
        },
        {
          text: "Task 5"
        },
        {
          text: "Task 6"
        },
        {
          text: "Task 7"
        },
        {
          text: "Task 8"
        },
        {
          text: "Task 9"
        },
      ]
    },

    methods: {
      deleteItem: function (index) {
        this.items.splice(index, 1);
      }
    }
  });

  const app2 = new Vue({
    el: '#listComponent',
    data: {
      title: 'Task list from components',
      mytasks: [{
          id: 1,
          text: "My task 1"
        },
        {
          id: 2,
          text: "My task 2"
        },
        {
          id: 3,
          text: "My task 3"
        },
        {
          id: 4,
          text: "My task 4"
        },
        {
          id: 5,
          text: "My task 5"
        },
        {
          id: 6,
          text: "My task 6"
        },
        {
          id: 7,
          text: "My task 7"
        },
        {
          id: 8,
          text: "My task 8"
        },
        {
          id: 9,
          text: "My task 9"
        },
      ]
    },

    methods: {
      deleteTask(item) {
        const todoIndex = this.mytasks.indexOf(item);
        this.mytasks.splice(todoIndex, 1);
      },
    },
  });

  const app3 = new Vue({
    el: '#randomList',
    data: {
      title: 'Random list',
      items: [{
          text: "Task 1"
        },
        {
          text: "Task 2"
        },
        {
          text: "Task 3"
        },
        {
          text: "Task 4"
        },
        {
          text: "Task 5"
        },
        {
          text: "Task 6"
        },
        {
          text: "Task 7"
        },
        {
          text: "Task 8"
        },
        {
          text: "Task 9"
        },
      ]
    },
    computed: {
      shuffleDeck() {
        for (let i = this.items.length - 1; i > 0; i--) {
          let randomIndex = Math.floor(Math.random() * i);

          let temp = this.items[i];
          Vue.set(this.items, i, this.items[randomIndex]);
          Vue.set(this.items, randomIndex, temp);
        }
      },
    },
  });
});