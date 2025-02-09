import React from "react";
import { Metadata} from "next"
export const metadata:Metadata={
title:"metadata BadsLayout",
description:"about bad"};
type Props={ children:React.ReactNode }
const BadsLayout =({children}:Props)=>{
return(
<>
{children}
</>);}
export default BadsLayout;
