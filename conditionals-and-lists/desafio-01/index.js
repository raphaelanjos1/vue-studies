new Vue({
  el: '#desafio',
  data: {
    alternarParagrafo: true,
    livro: {
      titulo: 'O senhor dos anéis',
      autor: 'J.R.R. Tolkiens',
      volume: '3'
    },
    aluno: {
      id: 10,
      nome: 'Maria',
      notas: [7.67, 8.33, 6.98, 9.21]
    },
    brands: ['nike', 'adidas', 'puma', 'new balance']
  },
  methods: {
    alternar() {
      this.alternarParagrafo = !this.alternarParagrafo
    }
  }
})
