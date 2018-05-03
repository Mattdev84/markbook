//store enrolments
export const state = ()=>({
    enrolments : []
})

export const mutations = {
    setEnrolments(state, enrolments){
        state.enrolments = enrolments
    }
}

export const actions = {
    setEnrolments(context, enrolments) {
        context.commit('setEnrolments', enrolments)
    }
}

export const getters = {
    getEnrolments : (state)=>{
        return state.enrolments
    },
    getLearnerIdsInQualIds : (state) => (qualIds) =>{
         let enrols = state.enrolments.filter(el=>{
             let containsQual = qualIds.filter(subel=>{
                 return subel === el.qualId
             })

             if(containsQual.length>0){
                return true
             }
         })

            return enrols
    }
}