import {FC} from "react";

type Props={
    searchParams:Promise<{[key:string]:string|string[]|undefined}>
}
const Page:FC<Props> = async ({searchParams}) => {
    const awaitedsp=await searchParams
    return (

        <div>
           <h1>this is page after submiting {awaitedsp.name}</h1>

        </div>
    );
};

export default Page;