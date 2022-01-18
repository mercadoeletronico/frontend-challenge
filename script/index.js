var app = new Vue({
  el: '#app',

  data () {
    return {
      infoHeader: null
    }
  },

  methods: {
    date: function (date) {
      return moment(date).format('DD/MM/YYYY');
    },
    dateHour: function (date) {
      return moment(date).format('DD/MM/YYYY, h:mm');
    }
  },

  mounted () {
    axios
      .get('https://me-frontend-challenge-api.herokuapp.com/orders/1')
      .then(response => {
        this.infoHeader = response.data
      })
      .catch(error => console.log(error))
  },
})
