import {IUser} from "@/model/IUser";

export const getAllUsers=async ():Promise<IUser[]>=>{
    const users=await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()
    )
    return users
}
export const getUserById = async (id: string): Promise<IUser> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error(`Ошибка при получении пользователя с ID ${id}`);
    }
    return response.json();
};