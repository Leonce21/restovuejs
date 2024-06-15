<template>
    <div class="header">
        <img class="logo" src="https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food&drinks">
        <h1>Login</h1>
    </div>
   
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">

        <button v-on:click="login">Login</button>

        <p>
            <router-link to="/signup">Register</router-link>
        </p>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    name: 'SignIn',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
 
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: 'HomeItem'})
            }
            console.warn(result)
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomeItem'})
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
.login input{
    width:300px;
    height:40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.login button{
    width:300px;
    height:40px;
    padding-left: 20px;
    margin: 0 auto;
    border: none;
    display: block;
    background: skyblue;
}

.login p{
    text-align: center;
}
</style>
  