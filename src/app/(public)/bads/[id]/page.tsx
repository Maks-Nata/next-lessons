import React, {FC} from 'react';
import {Metadata} from "next";
type Props={
    params:{id:string}
}
export const generateMetadata=async ({params}:Props):Promise<Metadata>=>{
    const {id}=await params
    return {
        title:"Page Id" + id,
    }
}
const IdPage: FC<Props> = async ({params}) => {
const result = await params
    console.log(result)
    return (
        <div>
            <hr/>
            Number: {params.id}
            <hr/>
        </div>
    );
};

export default IdPage;