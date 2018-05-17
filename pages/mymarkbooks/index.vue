<template>
  <v-container fluid >
    <v-layout row>
      <v-flex xs12>
      <div>
    <!-- <div style="background: #505763;">
      <v-container style="max-width: 1375px;">
        <v-layout>
        <h1 class="headline white--text">Markbook</h1>
        </v-layout>
        <v-layout>
          </v-layout>
      </v-container>
  </div> -->
   <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1>Logged in {{currentStaff.forename}}</h1>
        <v-btn color="primary" dark @click.stop="dialog = true">Create Markbook</v-btn>
      </v-flex>
    </v-layout>
    <h1 class="headline">My Markbooks</h1>

<v-container grid-list-md style="max-width: 1000px; ">
  <v-layout row wrap justify-center>
    <Markbook-Card v-for="mb in staffMarkbooks" :key="mb.id" :title="mb.title" :bookId="mb.id" />

    <v-flex style="max-width: 240px; min-width: 240px;">
      <v-card>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

    <v-spacer></v-spacer>  </v-container>



    <h1 class="headline">Shared Markbooks</h1>


<v-container grid-list-md style="max-width: 1000px;">
  <v-layout row wrap align-start justify-center style="background-color: yellow;">
    <v-container>
      <v-layout style="background-color: red">
        Here be content
      </v-layout>
    </v-container>
  </v-layout>
</v-container>


    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card tile>
        <v-toolbar card dark color="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Create Markbook</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="save">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>

          <v-container fluid grid-list-sm>
            <v-layout row wrap>
              <v-flex xs12 md7>
                <v-card>
                  <v-card color="cyan">
                    <v-card-media class="white--text" height="100px" color="cyan">

                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline">Create a Markbook</span>
                          </v-flex>
                        </v-layout>
                      </v-container>

                    </v-card-media>
                  </v-card>
                  <div class="main-container">

                    <v-form ref="form" lazy-validation>
                      <v-layout row wrap>
                        <v-flex xs12>

                          <v-list three-line subheader>
                            <v-subheader>Book Details</v-subheader>
                            <v-list-tile avatar>
                              <v-list-tile-content>
                                <v-text-field label="Name" :counter="10" required v-model="title"></v-text-field>
                              </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile avatar>
                              <v-list-tile-content>
                                <v-select :items="occurrences" v-model="selectedOccurrence" label="Year"></v-select>
                              </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile avatar>
                              <v-list-tile-content>
                                <!--Course Selection-->
                                <v-select label="Courses" :items="allQualifications" v-model="courses" item-text="title" item-value="id" multiple chips max-height="auto">
                                  <template slot="selection" slot-scope="data">
                                    <v-chip close @input="data.parent.selectItem(data.item)" :selected="data.selected" class="chip--select-multi" :key="JSON.stringify(data.item)">
                                      {{ data.item.title }}
                                    </v-chip>
                                  </template>

                                </v-select>


                              </v-list-tile-content>
                            </v-list-tile>
                            <!--Class Selection-->
                              <v-list-tile>
                              <v-list-tile-content>
                          <v-select label="Classes" :items="filteredClasses" v-model="selectedClasses" item-text="title" item-value="id" multiple chips max-height="auto">
                              <template slot="selection" slot-scope="data">
                                <v-chip close @input="data.parent.selectItem(data.item)" :selected="data.selected" class="chip--select-multi" :key="JSON.stringify(data.item)">
                                  {{ data.item.title }}
                                </v-chip>
                              </template>

                            </v-select>
                              </v-list-tile-content>
                            </v-list-tile>

                          </v-list>

                          <v-divider></v-divider>
                          <v-list three-line subheader>
                            <v-subheader>General</v-subheader>
                            <v-list-tile avatar>
                              <v-list-tile-action>
                                <v-checkbox v-model="visAll"></v-checkbox>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title>Disable</v-list-tile-title>
                                <v-list-tile-sub-title>Markbook will be hidden on all dashboards.</v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile avatar>
                              <v-list-tile-action>
                                <v-checkbox v-model="hidden"></v-checkbox>
                              </v-list-tile-action>
                              <v-list-tile-content>
                                <v-list-tile-title>Open Access</v-list-tile-title>
                                <v-list-tile-sub-title>Allow all staff to view your markbooks</v-list-tile-sub-title>
                              </v-list-tile-content>
                            </v-list-tile>
                          </v-list>


                        </v-flex>
                      </v-layout>
                    </v-form>
                  </div>
                </v-card>
              </v-flex>

              <!--Learner Panel -->

              <v-flex xs12 md5 left>

                <v-card>
                  <v-card color="cyan darken-3">
                    <v-card-media class="white--text" height="100px">

                      <v-container fill-height fluid>
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline">Learners</span>
                            <div>The following learners will be linked to this markbook</div>
                          </v-flex>
                        </v-layout>
                      </v-container>

                    </v-card-media>
                  </v-card>
                  <div style="max-height: 650px" class="scroll-y">
                    <v-list three-line>
                      <template v-for="(item, index) in filteredLearners">
                        <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                        <v-divider v-else-if="item.divider" :key="index"></v-divider>
                        <v-list-tile avatar v-else :key="item.title">
                          <v-list-tile-avatar>
                            <img :src="item.avatar">
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title>{{item.forename + ' '+item.surname}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{item.tutorGroup}}</v-list-tile-sub-title>
                          </v-list-tile-content>

                        </v-list-tile>
                        <v-divider inset :key="index"></v-divider>
                      </template>
                    </v-list>
                    <v-container text-xs-center style="max-height: 400px" class="scroll-y">

                      There is no spoon

                    </v-container>

                  </div>
                </v-card>

              </v-flex>


            </v-layout>
          </v-container>

          <ul>
            <li v-for="(item, index) in courses" :key='index'>
              {{item}}
            </li>
          </ul>



        </v-card-text>

        <div style="flex: 1 1 auto;"></div>
      </v-card>
    </v-dialog>




  </v-container>
 
  </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>

  import MarkbookCard from '@/components/markbooks/MarkbookCard'

  export default {
        
    data(){
      return {
        el: '#example-4',
        dialog: false,
        isEntering: false,
        isLeaving: false,
        hidden: false,
        widgets: false,
        visAll: false,
        userId : 1,
        courses: [],
        selectedClasses: [],
        occurrences: ['16/17','17/18','18/19'],
        selectedOccurrence: '',
        title: ''
      }
    },
    components:{
      MarkbookCard
    },

    computed : {
      currentStaff(){
        return this.$store.getters['staff/getStaffById'](this.userId)        
      },
      allQualifications(){
        return this.$store.getters['qualifications/getQualifications']
      },
      filteredClasses(){
        let classes = [{id: 'BIASLA1', title: 'BIASLA1' },{id: 'BIASLA2',title: 'BIASLA2'},{id: 'BIASLA3',title: 'BIASLA3'}]
        return classes
      },
      staffMarkbooks(){
        return this.$store.getters['markbooks/getMarkbooksForStaff'](1)
      },      
      
      filteredLearners(){
        let enrolments = this.$store.getters['enrolments/getLearnerIdsInQualIds'](this.courses)
        let learnerIds = []

        if(enrolments.length>0)
        {
          enrolments = enrolments.filter((enr)=>enr.occurrence===this.selectedOccurrence)
        
          enrolments.forEach(element => {
            learnerIds.push(element.learnerId)
          });
        }
        
        let learners = this.$store.getters['learners/getLearnersWithIds'](learnerIds)

        return learners
      }
    },
    methods: {
      save(){
        alert('We are saving')
        let createdMarkbook = {
          id:3,
          title: this.title,
          occurrence: this.selectedOccurrence,
          courses: this.courses,
          classes: this.selectedClasses,
          hidden: this.hidden,
          visAll: this.visAll,
          owner: this.userId
        }
        this.$store.dispatch('markbooks/addMarkbook', createdMarkbook)
        this.dialog=false
      }
    }
  }
</script>

<style scoped>
.main-container {
  padding: 25px
  
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

.contentContainer {
  animation: 1s ease-out 0s 1 slideInFromRight;
}

.slideOutLeft {
  animation: 1s ease-out 0s 1 slidePutToLeft;
}

</style>
