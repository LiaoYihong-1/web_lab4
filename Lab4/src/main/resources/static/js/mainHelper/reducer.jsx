export function addDotReducer(state=dostState,action){
    switch (action.type) {
        case ADD_DOT:
        return{
            username:state.username,
            password:state.password,
            dots:state.dots.concat([action.x,action.y,action.r,action.hit,action.date])
        }
        default:
            return state
    }
}
export const dostState = {
    dots:[],
    username:"",
    password:""
}