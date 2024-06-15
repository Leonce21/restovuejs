<template lang="">
    <div>
        <AppHeader />
            <div class="header">
                <img class="logo" src="https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food&drinks">
                <h1>update your restaurant</h1>
            </div>
        
            <div class="resto">
                <input type="text" name="namerestaurant" v-model="restaurant.namerestaurant" placeholder="Enter name">
                <input type="text" name="email" v-model="restaurant.email" placeholder="Enter email">
                <input type="text" name="address" v-model="restaurant.address" placeholder="Enter address">
        
                <button v-on:click="updaterestaurant">Update restaurant</button>
        
            </div>
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import axios from 'axios'

export default {
    name: 'AppUpdate',

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
        async updaterestaurant(){
            console.warn(this.restaurant)
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                namerestaurant: this.restaurant.namerestaurant,
                email: this.restaurant.email,
                address: this.restaurant.address,
            });
            if(result.status == 200){
              
                this.$router.push({name: 'HomeItem'})
            }
            
        }
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        
        if(!user){
            this.$router.push({name:'SignUp'})
        }

        // prefill data in the form 
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
        //console.warn(this.$route.params.id)
        console.warn(result.data)
        this.restaurant=result.data

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
.resto input{
    width:300px;
    height:40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.resto button{
    width:300px;
    height:40px;
    padding-left: 20px;
    margin: 0 auto;
    border: none;
    display: block;
    background: skyblue;
}

.resto p{
    text-align: center;
}
</style>