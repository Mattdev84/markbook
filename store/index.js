// import Vuex from 'vuex'

// const createStore = ()=>{
//     return new Vuex.Store({
//         state:{
//             loadedMarkbooks: []
//         },
//         mutations:{
//             setMarkbooks(state, markbooks) {
//                 state.loadedMarkbooks = markbooks
//             }
//         },
//         actions:{
//             nuxtServerInit(vuexContext, context){
//                return new Promise((resolve, reject)=>{
//                     setTimeout(()=>{
//                          vuexContext.commit('setMarkbooks', 
//                         [{bookId: 1, title: "Science book set"},
//                         {bookId: 2, title: "Maths book set"}])
//                         resolve()
//                     }, 1000)
//                 })
//             },
//             addMarkbooks(vuexContext, markbooks) {
//                 vuexContext.commit('setMarkbooks', markbooks)
//             }
//         },
//         getters:{
//             getMarkbooks(state){
//                 return state.loadedMarkbooks
//             }
//         }
//     })
// }

//export default createStore

// export const state = () => ({
//     counter: 0
//   })
  
//   export const mutations = {
//     increment(state) {
//       state.counter++
//     }
//   }

export const actions = {
                nuxtServerInit(vuexContext, context){
                    console.log('Server Innit called')
                   return new Promise((resolve, reject)=>{
                        setTimeout(()=>{
                             vuexContext.dispatch('markbooks/setMarkbooks', 
                            [{id: 1, title: "Science book set"},
                            {id: 2, title: "Maths book set", owner: 1}])

                            vuexContext.dispatch('qualifications/setQualifications', 
                            [{id: 1, title: "Biology Year 1"},
                            {id: 2, title: "Chemestry Year 1"},
                            {id: 3, title: "Physics Year 1"},
                            {id: 4, title: "History Year 1"},
                            {id: 5, title: "English Literature Year 1"}])

                            vuexContext.dispatch('learners/setLearners',
                            [{id: 1, forename: "ForeUser1", surname: "SurUser1", tutorGroup: "TW12", avatar: 'avatars/1.jpg'},
                            {id: 2, forename: "ForeUser2", surname: "SurUser2", tutorGroup: "TW12", avatar: 'avatars/1.jpg'},
                            {id: 3, forename: "ForeUser3", surname: "SurUser3", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 4, forename: "ForeUser4", surname: "SurUser4", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 5, forename: "ForeUser5", surname: "SurUser5", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 6, forename: "ForeUser6", surname: "SurUser6", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 7, forename: "ForeUser7", surname: "SurUser7", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 8, forename: "ForeUser8", surname: "SurUser8", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 9, forename: "ForeUser9", surname: "SurUser9", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'},
                            {id: 10, forename: "ForeUser10", surname: "SurUser10", tutorGroup: "LOM12", avatar: 'avatars/1.jpg'}])

                            vuexContext.dispatch('staff/setStaff',
                            [{id: 1, forename: "ForeStaff12312", surname: "SurStaff1"},
                            {id: 2, forename: "ForeStaff2", surname: "SurStaff2"},
                            {id: 3, forename: "ForeStaff3", surname: "SurStaff3"}])

                            vuexContext.dispatch('enrolments/setEnrolments',
                            [{id: 1, qualId: 1, learnerId: 1, occurrence: '17/18'},
                            {id: 2, qualId: 2, learnerId: 1, occurrence: '17/18'},
                            {id: 3, qualId: 2, learnerId: 2, occurrence: '17/18'},
                            {id: 4, qualId: 2, learnerId: 3, occurrence: '17/18'},
                            {id: 5, qualId: 2, learnerId: 4, occurrence: '17/18'},
                            {id: 6, qualId: 2, learnerId: 5, occurrence: '17/18'},
                            {id: 7, qualId: 2, learnerId: 6, occurrence: '17/18'},
                            {id: 8, qualId: 2, learnerId: 7, occurrence: '17/18'},
                            {id: 9, qualId: 2, learnerId: 8, occurrence: '17/18'},
                            {id: 10, qualId: 2, learnerId: 9, occurrence: '17/18'},
                            {id: 11, qualId: 3, learnerId: 10, occurrence: '17/18'},
                            {id: 12, qualId: 2, learnerId: 2, occurrence: '17/18'},
                            {id: 13, qualId: 3, learnerId: 2, occurrence: '17/18'},
                            {id: 14, qualId: 4, learnerId: 2, occurrence: '17/18'},
                            {id: 15, qualId: 4, learnerId: 3, occurrence: '16/17'},
                            {id: 16, qualId: 5, learnerId: 3, occurrence: '16/17'}])

                            resolve()
                        }, 1000)
                    })
                }
            }
        