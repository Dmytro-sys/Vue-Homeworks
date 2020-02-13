import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';
import _ from 'Lodash';
import axios from 'axios';
import Siema from 'siema';

document.addEventListener('DOMContentLoaded', () => {
	var watchExampleVM = new Vue({
		el: '#watch-example',
		data: {
			question: '',
			answer: 'Пока вы не зададите вопрос, я не могу ответить!',
			image: '',
			isActive: false
		},
		watch: {
			question: function (newQuestion, oldQuestion) {
				this.answer = 'Ожидаю, когда вы закончите печатать...'
				this.debouncedGetAnswer()
				this.isActive = false
				this.image = ''
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
				var vm = this
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer)
						vm.image = response.data.image
						vm.isActive = true
					})
					.catch(function (error) {
						vm.answer = 'Ошибка! Не могу связаться с API. ' + error
					})
			}
		}
	})

const app = new Vue({
	el: '#app',
	data: {
		isActive: false,
	},
 mounted: function () {
	// this.siema = new Siema()
	this.isActive = true
	console.log("Hello");
 }
});

//////////////////////////////////////////////////////////
const mySiema = new Siema({
	selector: '.siema',
	duration: 200,
	easing: 'ease-out',
	perPage: 1,
	startIndex: 0,
	draggable: true,
	multipleDrag: false,
	threshold: 20,
	loop: false,
	rtl: false,
	onInit: () => {},
	onChange: () => {},
}); 

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
});

