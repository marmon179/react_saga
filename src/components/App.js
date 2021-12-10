import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUsersRequest} from "../actions/users";
import UsersList from "./UsersList";
import {NewUserForm} from "./NewUserForm";

const App = () => {

        const dispatch = useDispatch()
        const users = useSelector((state) => state.users)

        useEffect(() => {
            dispatch(getUsersRequest())
        }, [dispatch]);

        const handleSubmit = ({firstName, lastName}) => {
            console.log({firstName, lastName})
        }
        return (
            <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
                <NewUserForm onSubmit={handleSubmit}/>
                <UsersList users={users.items}/>
            </div>
        )
    }


;

export default App;


