// import React from 'react';
// import UserComponent from "@/components/UserComponent";
// import {getUserById} from "@/services/api.services";


    // interface UserPageProps {
    //     params: { id: string };
    // }
    //
    // const UserPage: React.FC<UserPageProps> = async ({ params }) => {
    //     const user = await getUserById(params.id);
    //     return <UserComponent user={user} />;
// };
//
// export default UserPage;

import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/model/IUser";
import {UserComponent} from "@/components/UserComponent";
type Props={
    params:Promise<{id:string}>;
    searchParams:Promise<SearchParams>
}



const UserPage: FC<Props> =async ({searchParams}) => {

    let user:IUser|null=null
    const{data}=await searchParams
if (typeof data==='string'){
    user=JSON.parse(data) as IUser
        console.log(user.name)}

    return (
        <UserComponent user={user}/>
    );
};

export default UserPage;