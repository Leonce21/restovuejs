<template>
    <div class="home-item">
        <AppHeader />
            <main>
                <h1>Hello {{username}}</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in restaurant" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.namerestaurant}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.address}}</td>
                            <td> 
                                <router-link :to="'/update/'+item.id">update</router-link>
                                <button type="button" class="btn" v-on:click="deleterestaurant(item.id)">delete</button>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </main>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import axios from 'axios'

export default {
    name: 'HomeItem',

    components:{
        AppHeader,
        AppFooter,
    },

    data(){
        return {
            username: '',
            restaurant: []
        }
    },

    methods:{
        async deleterestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            console.warn(result)
            if(result.status == 200){
                this.loadData()
            }
        },

        async loadData(){
            let user = localStorage.getItem('user-info');
        
            this.username = JSON.parse(user).username;
            if(!user){
                this.$router.push({username:'SignUp'})
            }

            // display all the restaurant 
            let result = await axios.get("http://localhost:3000/restaurant");
            console.warn(result)
            this.restaurant = result.data

        }
    },

    async mounted() {
       this.loadData()

    },
}
</script>

<style>
main{
    text-align: center;
}
</style>