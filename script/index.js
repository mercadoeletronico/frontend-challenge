var app = new Vue({
  el: '#header',

  data () {
    return {
      infoHeader: null,
      infoHeaderContact: null
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