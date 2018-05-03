<template>
  <v-app>
    <div class="topBar">
      <ul class="navigation-list">
        <li class="navigation-item"><nuxt-link to="/" replace>Home</nuxt-link></li>
        <li class="navigation-item"><nuxt-link   to="/learners" replace>Learners</nuxt-link></li>
        <li class="navigation-item"><nuxt-link to="/staff" replace>Staff</nuxt-link></li>
        <li class="navigation-item"><nuxt-link to="/qualifications" repalce>Qualifications</nuxt-link></li>
        <li class="navigation-item"><nuxt-link to="/markbooks" repalce>Markbooks</nuxt-link></li>
      </ul>
    </div>
    <nuxt/>
  </v-app>
</template>

<script>

</script>

<style scoped>
.topBar .navigation-list {
  background-color: #102131;
  
}
.navigation-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  align-items: center;
  height: 100%;
}

.navigation-item {
  height:100%;
  
}

.navigation-item a {
  text-decoration: none;
  color: white;
  display: block;
  padding: 10px;
}

.navigation-item a:hover {
    color: white;
    background-color:#414E57
}

</style>