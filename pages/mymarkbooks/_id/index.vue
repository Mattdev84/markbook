<template>
<div>
    <v-container fluid grid-list-md>
        <v-layout>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title class="white--text blue-grey darken-2">
                        <div>
                            <div class="headline">{{markbook.title}}</div>
                            <div>English AS</div>
                        </div>
                    </v-card-title>
                    <v-card-title>
                        <div>
                            <span class="grey--text">17/18</span><br>
                            <span>Owner: Matthew philp</span><br>
                            <span>Tasks: 42</span>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>

            <v-layout row wrap>
              
              <v-flex xs12 md7>
                  <v-layout row wrap>
                    <v-flex d-flex xs12>
                
                <v-card>
                     <v-card-title primary-title class="white--text blue-grey darken-1">
                        <div >
                            <h1 class="headline">Assignments</h1>
                        </div>
                    </v-card-title>
                </v-card>

                    </v-flex>
                    <v-flex xs12>

                                <v-card>
                     <v-card-title>
                        <v-container text-xs-center>
                            <h3 class="headline mb-0">Create New</h3>                            
                        </v-container>
                    </v-card-title>
                </v-card>
                    </v-flex>

                    <v-flex xs12 v-for="(assignment, index) in markbookAssignments" :key="index">

                                <v-card>
                     <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{assignment.title}}</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                    </v-card-title>
                </v-card>
                    </v-flex>
                  </v-layout>
              </v-flex>

              <v-flex xs12 md5 >
                <v-card>
                     <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                        </div>
                    </v-card-title>
                </v-card>
              </v-flex>

            </v-layout>
            </v-container>

                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card>
        <v-toolbar dark color="primary" fixed>
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Create New Assignment</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
<v-content>
    
     <v-container>
<v-form ref="form" v-model="valid" lazy-validation>
    
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>


        <v-list three-line subheader>
          <v-subheader>Title</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
          <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Password</v-list-tile-title>
              <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
          </v-form>
            </v-container>
</v-content>
      </v-card>
    </v-dialog>
</div>
</template>

<script>



export default {
    data(){
        return {
          dialog: false
        }
    },
    computed: {
        markbook(){
            return this.$store.getters['markbooks/getMarkbook'](this.$route.params.id)
      },
        markbookAssignments(){
        return this.$store.getters['assignments/getAssignmentsByMarkbookId'](this.$route.params.id)
      },     
    }
    
}
</script>

<style>

</style>
