import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><Link href="/"></Link></li>
                <li><Link href="/home">home</Link></li>
                <li><Link href="/users">users</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;