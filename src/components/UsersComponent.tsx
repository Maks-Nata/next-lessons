
import {getAllUsers} from "@/services/api.services";
import {IUser} from "@/model/IUser";

export const UsersComponent = async () => {
    const users=await getAllUsers()
    console.log("Загруженные пользователи (сервер):", users); // Лог в терминале

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map((user: IUser) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersComponent;