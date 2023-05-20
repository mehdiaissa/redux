

export const addnewtodo = (inp)=>({
    type :"addnewtodo",
    payload:{
        id:Math.random(),
        description:inp,
        isdone:false,
    }
    

})

export const checktask = (id)=>({
    type :"checktask",
    payload:id
        

})

export const deletetask = (id)=>({
    type :"deletetask",
    payload:id
        

})