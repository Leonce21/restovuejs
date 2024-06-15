<template>
    <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
            <router-link to="/">Home</router-link>
        </a>
        <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#"><router-link to="/add">Add</router-link></a>
              
            </div>
        </div>
        <a href="#about">About</a>
        <a v-on:click="signOut">logout</a>
       
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    methods:{
        signOut()
        {
            localStorage.clear();
            this.$router.push({username:'SignIn'});

        }
    }
}

</script>

<style>
.topnav {
overflow: hidden;
background-color: #333;
}

.topnav a {
float: left;
display: block;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color: #ddd;
color: black;
}

.topnav a.active {
background-color: #04AA6D;
color: white;
}

.topnav .icon {
display: none;
}

@media screen and (max-width: 600px) {
.topnav a:not(:first-child) {display: none;}
.topnav a.icon {
    float: right;
    display: block;
}
}

@media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}
/* The dropdown container */
.dropdown {
float: left;
overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
font-size: 16px;
border: none;
outline: none;
color: white;
padding: 14px 16px;
background-color: inherit;
font-family: inherit; /* Important for vertical align on mobile phones */
margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.topnav a:hover, .dropdown:hover .dropbtn {
background-color: red;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
float: none;
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
display: block;
}
</style>