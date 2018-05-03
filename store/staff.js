//Store Staff
export const state = ()=>({
    staff : []
})

export const mutations = {
    setStaff(state, staff) {
        state.staff = staff
    }
}

export const actions = {
    setStaff(context, staff){
        context.commit('setStaff', staff)
    }
}

export const getters = {
    getStaff(state){
        return state.staff
    },

    getStaffById : (state) => (id) => {
      
        var currentStaff = state.staff.find(el=>{
            return el.id===id
        })

        return currentStaff
    }
}
