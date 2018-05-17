<template>
    <v-container fluid >
        <v-layout >

            <ul>
                <li v-for="(staffMemeber,key) in staff" :key='key'><a @click="loadStaff(staffMemeber.id)" prevent>{{staffMemeber.forename + ' ' + staffMemeber.surname}}</a></li>
            </ul>
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
        computed : {
        ...mapGetters({
           'staff':'staff/getStaff'}
        )
        },
        methods : {
            loadStaff(userId) {
            this.$router.push('/staff/'+userId)
        }
        }
        
    }
</script>