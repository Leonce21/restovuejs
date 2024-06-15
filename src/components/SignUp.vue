<template>
    <div class="header">
        <img class="logo" src="https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food&drinks">
        <h1>Sign up</h1>
    </div>
   
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter your name">
        <input type="text" v-model="phone" placeholder="Enter your phone">
        <input type="email" v-model="email" placeholder="Enter your email">
        <input type="password" v-model="password" placeholder="Enter your password">

        <button v-on:click="signUp">Signup</button>

        <p>
            <router-link to="/signin">login</router-link>
        </p>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data(){
        return{
            username: '',
            phone: '',
            email: '',
            password:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/user", {
                username: this.username,
                email: this.email,
                phone: this.phone,
                password: this.password
            });

            console.warn(result);
            if(result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: 'HomeItem'})
            }
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
    margin-top: 20px;
    text-align: center;
}
.register input{
    width:300px;
    height:40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.register button{
    width:300px;
    height:40px;
    padding-left: 20px;
    margin: 0 auto;
    border: none;
    display: block;
    background: skyblue;
}

.register p{
    text-align: center;
}
</style>
  