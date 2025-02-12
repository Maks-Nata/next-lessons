
// import { IUser } from "@/model/IUser";
// import Link from "next/link";
// import React, {FC} from "react";
//
// interface UserComponentProps {
//      obj: IUser;
//  }

// const UserComponent: FC<UserComponentProps> = ({ user }) => (
    // <div>
    //     <h2>Пользователь: {user.name}</h2>
    //     <p>ID: {user.id}</p>
    //
    //
    // </div>

// );

// export default UserComponent;
// export const UserComponent:FC<UserComponentProps>=(props: { obj }) =>{
//     return <div>
//         {props.obj ? <>User {props.obj.id}: {props.obj.name} {props.obj.username} {props.obj.email}</> : <>Данных нет</>}
//         <Link href="/users">Назад к списку пользователей</Link>
//     </div>;
// }
import { IUser } from "@/model/IUser";
import Link from "next/link";
import React, { FC } from "react";

interface UserComponentProps {
    user: IUser | null; // Разрешаем null, чтобы обработать отсутствие данных
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {
    return (
        <div>
            {user ? (
                <>
                    <h2>Пользователь: {user.name}</h2>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <Link href="/users">Назад к списку пользователей</Link>
                </>
            ) : (
                <p>Данных нет</p>
            )}
        </div>
    );
};
