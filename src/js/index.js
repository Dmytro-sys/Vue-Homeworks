import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';
import _ from 'Lodash';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'Пока вы не зададите вопрос, я не могу ответить!',
      image: ''
    },
    watch: {
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Ожидаю, когда вы закончите печатать...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
          return
        }
        this.answer = 'Думаю...'
        this.image = 'Картинка...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.image = response.data.image
          })
          .catch(function (error) {
            vm.answer = 'Ошибка! Не могу связаться с API. ' + error
          })
      }
    }
  })

});