import {Metadata} from "next";

export const metadata:Metadata={
title:"metadata Users"};
type Props={ children:React.ReactNode }
const Users =({children}:Props)=>{
return(
<>
{children}
</>);}
export default Users;