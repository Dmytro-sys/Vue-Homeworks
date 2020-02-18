import '@babel/polyfill';
import Vue from 'vue/dist/vue.esm.js';
import _ from 'Lodash';
import axios from 'axios';
import Siema from 'siema';

document.addEventListener('DOMContentLoaded', () => {

Vue.filter('currency', function (value) {
  return '$' + value.toFixed(2);
});

const demo = new Vue({
  el: '#main',
  data: {
      newServiceName: '',
      newServicePrice: '',
      showServiceModal: false,

      services: [
        {
          name: 'Web developing',
          price: 100,
          active:false
        },{
          name: 'Design',
          price: 120,
          active:false
        },{
          name: 'Integration',
          price: 85,
          active:false
        },{
          name: 'Training',
          price: 135,
          active:false
        },
      ],
      
  },
  methods: {
    toggleActive: function(service){
      service.active = !service.active;
    },
    toggleModal: function(){
      this.showServiceModal = !this.showServiceModal;
    },
    total: function(){

        let total = 0;

        this.services.forEach(function(service){
          if (service.active){
            total += service.price;
          }
        });

       return total;
      },

      addService: function(){
        if(!this.showServiceModal && this.newServiceName && this.newServicePrice) {
          this.services.push({
            name: this.newServiceName,
            price: Number(this.newServicePrice),
            active: false
          })
        }

        this.newServiceName = '',
        this.newServicePrice = ''
        } 
  }
});
});