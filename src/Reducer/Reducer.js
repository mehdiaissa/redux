

const initialstate={
    tasks:[
        {id:Math.random(),
        description:"first task",
        isdone:false}
    ]
}
    const reducer=(state=initialstate,{type,payload})=>{
switch(type){
    case "addnewtodo":
        return{
            tasks:[...state.tasks,payload]
        }
        case "checktask":
        return{
            tasks:[...state.tasks].map((task)=>task.id===payload? {...task,isdone:!task.isdone}:task)
        }
        case "deletetask":
        return{
            tasks:[...state.tasks].filter((task)=>task.id !== payload)
        }
default:
    return state;
}
    
};
export default reducer;