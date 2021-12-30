const ADD_DOT = 'ADD_DOT';
export const addDotAction = {
    type: 'ADD_DOT',
    x:0,
    y:0,
    r:0,
    hit:true,
    date:""
}
function addDot(x,y,r,hit,date){
    return {
        type: ADD_DOT,
        x:x,
        y:y,
        r:r,
        hit:hit,
        date:date
    }
}