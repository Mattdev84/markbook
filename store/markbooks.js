export const state = () => ({
    markbooks: [{id: 1, title: "Science book Module"},
    {id: 2, title: "Maths book Module", owner: 1}]
})

export const mutations = {
    setMarkbooks(state, markbooks) {
        state.markbooks = markbooks
    },
    addMarkbook(state, markbook){
        state.markbooks.push(markbook)
    }
}

export const actions = {
    setMarkbooks(context, markbooks) {
        context.commit('setMarkbooks', markbooks)
    },

    addMarkbook(context, markbook){

        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                console.log('Writing markbook to store')
                resolve(markbook)
            },10000)
        }).then((mb)=>{
            context.commit('addMarkbook', mb)
            console.log('Markbook written to server')
            console.log(JSON.stringify(mb, undefined, 2))
        })
        
    }
}

export const getters = {
    getMarkbooks(state) {
        return state.markbooks
    },

    getMarkbooksForStaff: (state) => (staffId) =>{
        let staffMarkbooks = state.markbooks.filter(el=>{
            return el.owner === staffId
       })

        return staffMarkbooks
    },

    getNextId(state) {
        return state.markbookmarkbooks.length+1
    }
}