import React from 'react'
import { checktask,deletetask } from '../action/Action'
import { useDispatch,useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'




const Listtasks=()=> {
    const salahs = useSelector((state) => state.reducer.tasks)
    const dispatch=useDispatch()
   
        
    
    return (
        <div>
            {salahs.map((salah) => {
                return (
                    <div>
                        <input 
                        className="check"
                        type="checkbox"
                      onClick={()=>
                            dispatch(checktask(salah.id))
                        }
                        />
                       {salah.id}
                        <Button 
            style={{
                marginLeft:"45%",
                backgroundColor:"abOddb",
                border:"solid 2px white",
                fontWeight:"bold"
            }}
            variant="primary"
            onClick={()=>dispatch(deletetask(salah.id))}
            >
                delette
</Button>
                        {salah.description}
                       
                    </div>

                )

            })}
        </div>
    )
}

export default Listtasks
