import React from 'react';
import {Button, ListGroup, ListGroupItem} from "reactstrap";

const UsersList = ({users, onDeleteUser}) => {

    return (
        <ListGroup>
            {
                users.sort((a, b) => {
                    if (a.firstName > b.firstName) {
                        return 1;
                    } else if (a.firstName < b.firstName) {
                        return -1
                    } else if (a.lastName > b.lastName) {
                        return 1;
                    } else if (a.lastName < b.lastName) {
                        return -1
                    } else {
                        return 0;
                    }
                }).map(users => {
                    const onDelete = () => onDeleteUser(users.id);
                    return <ListGroupItem key={users.id}>
                        <section style={{display: 'flex'}}>
                            <div style={{flexGrow: 1, margin: 'auto 0'}}>
                                {users.firstName} {users.lastName}
                            </div>
                            <div>
                                <Button outline color='danger' onClick={onDelete}>
                                    Delete
                                </Button>
                            </div>
                        </section>
                    </ListGroupItem>
                })
            }
        </ListGroup>
    );
};

export default UsersList;
