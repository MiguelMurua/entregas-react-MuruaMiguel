import React, {useState} from "react";
import "./Users.css"

const Users = ()=>{

    const [users, setUsers] = useState ([
        {name:"Tito"},
        {name:"Agus"},
        {name:"Chori"},
        {name:"Dardo"}
    ])

    const handlerAddUser = ()=>{
        setUsers([...users, {name}]);
    }

    const [name, setName] = useState("")

    const handlerChange = (e)=>{
        setName (e.target.value);
    }

    const handlerResetUser = ()=>{
        setUsers([{name:"Tito"},{name:"Agus"},{name:"Chori"},{name:"Dardo"}]);
    }

    return (
    <>
        <h2>Lista de Usuarios</h2>
        <ul>
            {users.map((user, i)=>{
            return (
                <li key={i}>{user.name}</li>
            )

            })
            }
        </ul>
        
        <input type="text" value={name} onChange={handlerChange} />
        <button onClick={handlerAddUser}>Agregar Usuario</button>
        <button onClick={handlerResetUser}>Resetear</button>
    </>
    );
};

export default Users