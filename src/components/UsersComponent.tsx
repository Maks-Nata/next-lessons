
import {getAllUsers} from "@/services/api.services";
import {IUser} from "@/model/IUser";
import Link from "next/link";


export const UsersComponent = async () => {
    const users=await getAllUsers()
    console.log("Загруженные пользователи (сервер):", users); // Лог в терминале

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map((user: IUser) => (<li key={user.id}>
                 <Link href={{pathname:'/users/' +user.id.toString(),query:{data:JSON.stringify(user)} } } >
                     {user.id}  {user.name}
                </Link> </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersComponent;