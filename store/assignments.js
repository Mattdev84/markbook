export const state = () => ({
    assignments: [{id: 1, title: "This is assignment 1", markbookId: 2},
    {id: 2, title: "This is assignment 2", markbookId: 2},
    {id: 3, title: "This is assignment 3", markbookId: 2},
    {id: 4, title: "This is assignment other 1", markbookId: 1}]
})

export const getters = {
    getAssignmentsByMarkbookId: (state) => (markbookId) =>{
        let markbookAssignments = state.assignments.filter(el=>{
            return el.markbookId === parseInt(markbookId)
       })
        return markbookAssignments
    }
}