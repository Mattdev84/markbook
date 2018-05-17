<template>
  <v-flex style="max-width: 240px; min-width: 240px;">
    <nuxt-link :to="bookLink" class="noLink">
      <v-card style="min-height: 275px; max-height: 275px;">
        <!-- <v-card-media
          class="white--text"
          height="130px"
          
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media> -->

         <v-card-title primary-title class="white--text blue-grey darken-2">
                <div class="headline">{{title}}</div>
                <div>English AS</div>
              </v-card-title>
        <v-card-title>
          <div>
            <span class="grey--text">17/18</span><br>
            <span>Owner: Matthew philp</span><br>
            <span>Tasks: 42</span>
          </div>
        </v-card-title>
      </v-card></nuxt-link>
  </v-flex>
</template>

<script>
export default {
  name: 'MarkbookCard',
  props: {
    title: {
      type: String,
      required: true
    },
    bookId: {
      type: Number,
      required: true
    }
  },
  computed: {
    bookLink: function() {
      return "/mymarkbooks/"+this.bookId
    }
  }
}
</script>

<style>
  .noLink:link {
    text-decoration: none;
  }
</style>
