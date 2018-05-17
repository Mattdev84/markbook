<template>
    <v-container fluid >
        <v-layout >

            <ul>
                <li v-for="(markbook,key) in markbooks" :key='key'><a @click="loadMarkbook(markbook.id)" prevent>{{markbook.title + ' ' + key}}</a></li>
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
        methods : {
            loadMarkbook(bookId) {
            this.$router.push('/markbooks/'+id)
            //console.log(this.$router)
        }
        },
        // fetch(context){
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve({
        //                 loadedMarkbooks : [{bookId: 1, title: "Science book set"},
        //                 {bookId: 2, title: "Maths book set"}]
        //             })
        //         }, 1000)
        //     }).then(data=>{
        //         context.store.commit('setMarkbooks', data.loadedMarkbooks)
        //     })
        //     .catch(e=>{
        //         context.error(e)
        //     })
        // }
        // ,
        // computed: {
        //     loadedMarkbooks() {
        //         return this.$store.getters['markbooks/markbooks']
        //     }
        // },
        computed: 
        {
        ...mapGetters({
           'markbooks':'markbooks/getMarkbooks'}
        ),
            books (){
                return this.$store.state.markbooks.loadedMarkbooks
            }
        }
        ,
        mounted () {
            //console.log(mapGetters({loadedMarkbooks:'markbooks/markbooks'}))
            //console.log(this.$store.state.markbooks)
        }
    }
</script>