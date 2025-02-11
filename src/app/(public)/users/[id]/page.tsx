import React from 'react';
import UserComponent from "@/components/UserComponent";
import {getUserById} from "@/services/api.services";


    interface UserPageProps {
        params: { id: string };
    }

    const UserPage: React.FC<UserPageProps> = async ({ params }) => {
        const user = await getUserById(params.id);
        return <UserComponent user={user} />;
};

export default UserPage;