{
  Vue.component('todo-item', {
    props: ['item'],
    template: `
      <li class="item"><h3>{{ item.title }}</h3></li>
    `,
  })

  const vm = new Vue({
    el: '#app',
    data: {
      items: [{
        title: "#0",
      }],
      title: 'Titre Calend.',
    },
    computed: {
      count: function() {
        return this.items.length
      },
    },
    methods: {
      add: function() {
        const index = this.items.length
        console.trace()
        this.items.push({
          title: "#" + (index + 1),
        })
      },
    },
  })
}
