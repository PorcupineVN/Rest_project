import React from 'react'

const UserItem = ({User}) => {
    return (
        <tr>
             <td>
                {User.username}
            </td>
            <td>
                {User.first_name}
            </td>
            <td>
                {User.last_name}
            </td>
            <td>
                {User.email}
            </td>
        </tr>
    )
}

const UserList = ({Users}) => {
    return (
        <table>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                email
            </th>
            {users.map((User) => <UserItem User={User} />)}
        </table>
    )
}
export default UserList