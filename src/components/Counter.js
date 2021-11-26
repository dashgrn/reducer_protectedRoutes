import { Button } from '@chakra-ui/button'
import React, { useReducer, useState } from 'react'
import { counterReducer, init, initialState } from '../reducers/counterReducer'
import { types } from '../types/Types'

const Counter = () => {

    // const [counter, setCounter] = useState({   //USANDO USTESTATE
    //     counter1: 10, 
    //     counter1: 20,
    //     counter1: 30,
    // })
    
    const [counter, dispatch] = useReducer(counterReducer, initialState, init)

    // const { counter1 } = counter

    return (
        <div>
            <h1>Counter: {counter} </h1>
            <hr />
            <Button colorScheme="teal" variant="outline" onClick={()=> {
                dispatch({type: types.increment})
            }}>
                +1 Increment
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={()=> {
                dispatch({type: types.decrement})
            }}>
                -1 Decrement
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={()=> {
                dispatch({type: types.reset})
            }}>
                0 Reset
            </Button>
            
        </div>
    )
}

export default Counter
