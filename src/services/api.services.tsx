import {IUser} from "@/model/IUser";

export const getAllUsers = async (): Promise<IUser[]> => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()
        )
    return users
}
export const getUserById = async (id: string): Promise<IUser> => {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
return user
};