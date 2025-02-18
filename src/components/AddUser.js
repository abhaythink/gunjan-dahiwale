import react, { useState } from 'react';

const AddUser = (props) => {
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [email, setEmail] = useState('');
    // const [address, setAddress] = useState('');
    // const [phone, setPhone] = useState('');
    // const [users, setUsers] = useState([]);

    const [userInput, setUserInput] = useState({
        name: '',
        age: '',
        email: '',
        address: '',
        phone: ''
    });

    const [users, setUsers] = useState([]);

    const UserInputHandler = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value 
        })
    }


    // const AddUserHandler = (i, value) => {
        
    //     if(i=='name'){
    //         setName(value);
    //     }
    //     if(i=='age'){
    //         setAge(value);
    //     }
    //     if(i=='email'){
    //         setEmail(value);
    //     }
    //     if(i=='address'){
    //         setAddress(value);
    //     }
    //     if(i=='phone'){
    //         setPhone(value);
    //     }
    // }

    const AddUserHandler = (e) => {
        e.preventDefault();
        // setUsers([...users, userInput]);
        props.newUser(userInput);
        userInput.name = '';
        userInput.age = '';
        userInput.email = '';
        userInput.address = '';
        userInput.phone = '';
    }

    return (
        <div>
            <form onSubmit={AddUserHandler}>
                <h1>Add User</h1>
                <label>Name</label>
                <input type="text" name="name" onChange={UserInputHandler} value={userInput.name}/>   
                <label>Age</label>
                <input type="text" name="age" onChange={UserInputHandler} value={userInput.age}/>
                <label>Email</label>
                <input type="text" name="email" onChange={UserInputHandler} value={userInput.email}/>
                <label>Address</label>
                <input type="text" name="address" onChange={UserInputHandler} value={userInput.address}/>
                <label>Phone</label>
                <input type="text" name="phone" onChange={UserInputHandler} value={userInput.phone}/>
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;