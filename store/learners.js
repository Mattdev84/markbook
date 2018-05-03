//store learners
export const state = ()=>({
    learners : []
})

export const mutations = {
    setLearners(state, learners){
        state.learners = learners
    }
}

export const actions = {
    setLearners(context, learners) {
        context.commit('setLearners', learners)
    }
}

export const getters = {
    getLearners : (state)=>{
        return state.learners
    },
    getLearnerById : (state) => (id) => {
      
        var learner = state.learners.find(el=>{
            return el.id===id
        })

        return learner
    },

    getLearnersWithIds : (state) => (ids) => {
        console.log(ids)
        let learners = state.learners.filter(el=>{
            let matched = ids.filter(subel=>subel===el.id)
            if(matched.length >0)
            {
                return true
            }
        })

        return learners
    }

}