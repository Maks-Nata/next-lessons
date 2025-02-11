
import { IUser } from "@/model/IUser";
import Link from "next/link";

interface UserComponentProps {
    user: IUser;
}

const UserComponent: React.FC<UserComponentProps> = ({ user }) => (
    <div>
        <h2>Пользователь: {user.name}</h2>
        <p>ID: {user.id}</p>

        <Link href="/users">Назад к списку пользователей</Link>
    </div>
);

export default UserComponent;
