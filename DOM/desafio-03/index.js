new Vue({
  el: '#challenge',
  data: {
    total: 0
  },
  computed: {
    result() {
      return this.total == 37 ? 'Valor igual' : 'Valor diferente'
    }
  },
  watch: {
    result() {
      setTimeout(() => {
        this.total = 0
      }, 7000)
    }
  }
})
