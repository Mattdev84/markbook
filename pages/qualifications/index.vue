<template>
    <v-container fluid >
        <v-layout   >
            <v-flex xs12>
            <ul>
                <li v-for="(qual,key) in qualifications" :key='key'><a @click="loadqual(qual.id)" prevent>{{qual.title + ' ' + key}}</a></li>
            </ul>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        data () {
            return{

            }
        },
        computed: 
        {
        ...mapGetters({
           'qualifications':'qualifications/getQualifications'}
        )},
        methods : {
            loadQual(qualId) {
            this.$router.push('/qualifications/'+qualId)
        }
        }
        
    }
</script>