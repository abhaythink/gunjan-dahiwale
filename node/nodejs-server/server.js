
import  {db} from "./util/database.js";
// import './util/database.js';
import express from 'express';

var app = express();
app.use(express.json());


//get all the users
async function getALlUsers() {
    const [user] = await db.execute('SELECT * FROM users');
    return user;
}
const getUsers = await getALlUsers();
console.log(getUsers);


//getUser by id
async function getUserById(id) {
    const [each] = await db.execute(`SELECT * FROM users WHERE id=?`, [id]);
    return each;
}
const EachUser = await getUserById(7);
console.log("each user", EachUser);


//create user
async function createUser(id, name, email) {
    await db.execute(`INSERT INTO users(id, name, email) VALUES (?,?,?)`, [id, name, email]);
    const result = db.execute(`SELECT * FROM users WHERE ID=?`, [id]);
    const user = await result;
    console.log("while creating user", user);
    
    return user.length > 0 ? user[0] : null;
}   
// const userCreated = await createUser(24, 'Rahul', 'rahul@gmail.com');
// console.log("Created user", userCreated);


//update user
async function updateUser(id, name, email) {
    const [user] = await db.execute(`UPDATE users SET name=?, email=? WHERE id=?`, [name, email, id])
    return user; 
}
const UpdatedUser = await updateUser(22, "Ram", "ram@gmail.com");
console.log("updated user", UpdatedUser);


//delete user
async function deleteUser(id) {
    const [user] = await db.execute(`DELETE FROM users WHERE id=?`, [id])
    return user;
}
const DeleteUser = await deleteUser(22);
console.log("Deleted user", DeleteUser);
console.log("all users", getUsers);


//get api

app.get('/', async (req, res) => {
    const users = await getALlUsers();
    res.send(users);
})


//create api

app.post('/users', async(req, res) => {
    const {id, name, email} = req.body;
    if(!id || !name || !email)
        return res.status(400).send({error: "name, id, email are required!"})
    try {
        const users = await createUser(id, name, email);
        res.status(201).send({ message: "User created successfully", users });
        
        res.send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})


//update api

app.put('/:id', async (req, res) => {
    const pd = req.params.id;
    const {name, email} = req.body;

    if (!name || !email) {
        return res.status(400).send({ error: "Name and email are required" });
    }
    
    try {
        const updating = await updateUser(pd, name, email);
        res.send(updating);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

//delete api

app.delete('/:id', async (req, res) => {
    const pd = req.params.id;
    const users = await deleteUser(pd);
    res.send(users);
})

app.listen(3000, () => {
    console.log("Server running on 3000");
});