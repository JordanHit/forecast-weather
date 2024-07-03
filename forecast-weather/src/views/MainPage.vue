<template>
  <main>
    <div class="">
      <search-component :region="ipAddressData.region" :city="ipAddressData.city" :country="ipAddressData.country"></search-component>
    </div>
  </main>
</template>
<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  name: 'MainPage',
  components:{SearchComponent},
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
      this.$http.get(`http://ipwho.is/?lang=ru`)
          .then((res) => {
            this.ipAddressData = res.data
            console.log(this.ipAddressData)
            this.getWeatherNow(this.ipAddressData.latitude,this.ipAddressData.longitude)
          })
          .catch((error) => {
            console.error(error)
          });
    },
    getWeatherNow(lat,lon) {
      this.$http.get(`/api/forecast.json?key=0e2bd886eb124156bcc192102240107&days=10&q=${lat},${lon}&lang=ru`)
      // this.$http.get(`/api/weather?lat=${lat}&lon=${lon}`)
      // this.$http.get(`/api/current.json?key=0e2bd886eb124156bcc192102240107&q=${lat},${lon}`)
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