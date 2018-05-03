//Store Qualifications
export const state = ()=>({
    qualifications : []
})

export const mutations = {
    setQualifications(state, qualifications) {
        state.qualifications = qualifications
    }
}

export const actions = {
    setQualifications(context, qualifications){
        context.commit('setQualifications', qualifications)
    }
}

export const getters = {
    getQualifications(state){
        return state.qualifications
    }
}
