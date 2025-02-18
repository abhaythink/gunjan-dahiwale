import React from 'react';
import { useState } from 'react';
import AddUser from './AddUser';

function NewUser() {

    const NewUserHandler = () => {
        console.log('New User');
        const saveUserHandler = (enteredData) => {
            const data = {...enteredData, id: Math.random().toString()};
             console.log(data);

        }        
    }

    return(
        <>
            <AddUser newUser={NewUserHandler}/> 
        </>
    )
}

export default NewUser;