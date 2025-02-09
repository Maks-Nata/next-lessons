import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
        <h1>Menu</h1>
        <ul>
            <li><Link href="/">main</Link></li>
            <li> <Link href="/home">home</Link> </li>
            <li> <Link href="/bads">bads</Link></li>



        </ul>
         <hr/>
        </div>
    );
};

export default Menu;