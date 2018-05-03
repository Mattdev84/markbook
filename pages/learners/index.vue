<template>
    <v-container>
        <v-layout >

            <ul>
                <li v-for="(learner,key) in learners" :key='key'><a @click="loadLearner(learner.id)" prevent>{{learner.forename + ' ' + learner.surname}}</a></li>
            </ul>
        </v-layout>
    </v-container>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        data () {
            return{
                test: 123
            }
        },
        computed : {
        ...mapGetters({
           'learners':'learners/getLearners'}
        )},
        methods : {
            loadLearner(userId) {
            this.$router.push('/learners/'+userId)
            //console.log(this.$router)
        },
        check : function (){
            console.log('this is a test')
        }
        }
        
    }
</script>