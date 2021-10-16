const app = new Vue({
  el: '#app',
  data: {
    saludo: 'Vue lifecycle'
  },
  beforeCreate() {
    console.log('beforeCreate')
  }
})