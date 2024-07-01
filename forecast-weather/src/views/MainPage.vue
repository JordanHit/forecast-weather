<template>
    <h1>lox</h1>
</template>
<script>
export default {
    name: 'MainPage',
    data(){
        return{
            responseData: [],
        }
    },
    mounted(){
        this.getweatherNow()
    },
    methods:{
        getweatherNow(){
            this.$http.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Горки&appid=3b5862a364fe4969ed8947f60c67cf3e`)
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
    h1{
        width: 100%;
        height: 100%;

    }
</style>