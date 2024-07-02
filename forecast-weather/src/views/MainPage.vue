<template>
  <main>
    <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    <h1>dsfd</h1>
  </main>
</template>
<script>
export default {
  name: 'MainPage',
  data() {
    return {
      ipAddressData:[],
      responseData: [],
    }
  },
  mounted() {
    this.getIpAddress()
  },
  methods: {
    getIpAddress(){
      this.$http.get(`https://api.geoapify.com/v1/ipinfo?apiKey=d763ad9cb40348d186e5fc0447b3392f`)
          .then((res) => {
            this.ipAddressData = res.data
            console.log(this.ipAddressData)
            this.getWeatherNow(this.ipAddressData.location.latitude,this.ipAddressData.location.longitude)
          })
          .catch((error) => {
            console.error(error)
          });
    },
    getWeatherNow(lat,lon) {
      this.$http.get(`api/current.json?key=0e2bd886eb124156bcc192102240107&q=${lat},${lon}&lang=ru`)
          .then((res) => {
            this.responseData = res.data
            console.log(this.responseData)
          })
          .catch((error) => {
            console.error(error)
          });
    }
  }
}
</script>
<style scoped>
@import '../assets/css/bundle.css';

h1 {
  width: 100%;
  height: 100%;

}
</style>