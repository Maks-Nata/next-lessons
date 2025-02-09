import React, {FC} from 'react';
type Props={
    params:{id:string}
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