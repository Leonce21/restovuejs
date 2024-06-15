<template lang="">
    <div>
        <AppHeader />
            <div class="header">
                <img class="logo" src="https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food&drinks">
                <h1>Add your restaurant</h1>
            </div>
        
            <div class="restaurant">
                <form>
                    <input type="text" name="namerestaurant" v-model="restaurant.namerestaurant" placeholder="Enter name">
                    <input type="text" name="email" v-model="restaurant.email" placeholder="Enter email">
                    <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address">
                </form>
                
                <button v-on:click="addrestaurant" type="button">Add restaurant</button>
        
            </div>
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import axios from 'axios'

export default {
    name: 'AppAdd',
    components:{
        AppHeader,
        AppFooter,
    },
    data(){
        return{
            restaurant: {
                namerestaurant: '',
                email: '',
                address:''
            }
        }
    },
    methods:{
        async addrestaurant(){
            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurant", {
                namerestaurant: this.restaurant.namerestaurant,
                email: this.restaurant.email,
                address: this.restaurant.address,
            });
            if(result.status == 201){
              
                this.$router.push({name: 'HomeItem'})
            }
            console.warn("result",result);
           
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        
        this.name = JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'})
        }


    },
}
</script>
<style>

.logo{
    width:100px;
}

.header{
    text-align: center;
    margin-top: 20px;
}
.restaurant input{
    width:300px;
    height:40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.restaurant button{
    width:300px;
    height:40px;
    padding-left: 20px;
    margin: 0 auto;
    border: none;
    display: block;
    background: skyblue;
}

.restaurant p{
    text-align: center;
}
</style>