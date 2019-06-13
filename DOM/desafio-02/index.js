new Vue({
  el: '#desafio',
  data: {
    value: ''
  },
  methods: {
    showAlert() {
      alert('Alert')
    },
    addValue(e) {
      this.value = e.target.value
    }
  }
})
