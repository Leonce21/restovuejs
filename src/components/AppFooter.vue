<template>
    <footer class="app-footer">
        <div class="container">
          <p>&copy; {{ year }} My Awesome App</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'AppFooter',

    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
}
</script>
<style>

.app-footer {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
}

.app-footer p {
  margin: 0;
}

.app-footer a {
  color: #333;
  text-decoration: none;
  margin-left: 10px;
}

.app-footer a:hover {
  color: #666;
}  
</style>