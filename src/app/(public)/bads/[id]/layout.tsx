import {Metadata} from "next";

export const metadata:Metadata={
title:"metadata IdLayout"};
type Props={ children:React.ReactNode }
const IdLayout =({children}:Props)=>{
return(
<>
{children}
</>);}
export default IdLayout;