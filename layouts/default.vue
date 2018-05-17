<template>
  <v-app>

    <v-container id="backgroundContainer" fluid fill-height style="padding: 0px; background-color: #f8f8f8;">
      <v-layout>
        <v-flex xs12>
  <v-toolbar fixed app>
    <v-toolbar-items>
      <v-btn flat router to="/mymarkbooks" >My Markbooks</v-btn>
      <v-btn flat router to="/learners">Learners</v-btn>
      <v-btn flat router to="/staff" >Staff</v-btn>
      <v-btn flat router to="/qualifications">Qualifications</v-btn>
      <v-btn flat router to="/markbooks" >Markbooks</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>

    <!-- <div class="topBar">
      <ul class="navigation-list">
        <li class="navigation-item" @click="entering = !entering; "></li>
        <li class="navigation-item" @click="entering = !entering;"><nuxt-link to="/learners" replace>Learners</nuxt-link></li>
        <li class="navigation-item" @click="entering = !entering;"><nuxt-link to="/staff" replace>Staff</nuxt-link></li>
        <li class="navigation-item" @click="entering = !entering;"><nuxt-link to="/qualifications" repalce>Qualifications</nuxt-link></li>
        <li class="navigation-item" @click="entering = !entering;"><nuxt-link to="/markbooks" repalce>Markbooks</nuxt-link></li>
      </ul>
    </div> -->
    <v-content>
    <v-container>
    <transition name="contentContainer" @after-leave="afterLeave" appear>

      <nuxt v-if="entering"/>

    </transition>
    </v-container>
    </v-content>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      entering: true
    }
  },

  mounted(){

    this.entering=true
  },

  beforeDestroyed(){

     this.entering=false
  },

  methods: {
    afterLeave(el){

      this.entering=true
    }
  }
}


</script>

<style scoped>
.topBar .navigation-list {
  background-color: #102131;
  
}

.backgroundRed {
  background-color: red
}

.backgroundGreen {
  background-color: green
}

.backgroundYellow {
  background-color: yellow
}

.backgroundOrange {
  background-color: orange
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



.slideOutLeft {
  animation: 0.5s ease-out 0s 1 slidePutToLeft;
}

.contentContainer-enter {
  opacity: 0
}

.contentContainer-leave-active {
  animation: slideOutToLeft 0.5s ease-out forwards
}

.contentContainer-enter-active {
  /* animation: slideInFromRight 1s ease-out forwards */
  transition: opacity 0.5s
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOutToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>