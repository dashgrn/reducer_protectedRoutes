import React, { useContext } from 'react'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { AuthContext } from './authContext'
import { login } from '../actions/authAction'
import { Navigate, useNavigate } from 'react-router'

const Login = () => {

    const { user, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(login('Jose'))
        navigate('/home', {
            replace: true
        })
    }

    return (
        <div>
            <Text>This is login component</Text>
            <h1> hi {user.name}</h1>
            <hr />
            <Button variant='outline' colorScheme='blue' type='submit' fontSize='20px' padding='10px' marginLeft='20px'
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>
    )
}

export default Login
