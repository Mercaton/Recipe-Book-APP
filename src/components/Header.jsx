import React from 'react';

function Header() {
    return (
        <>
            <header className="header">
                <div className="menu-box">
                    <div className="logo-box">
                        <h2>Family</h2>
                        <h1>CookBook</h1>
                    </div>
                    <a href="/add"><button><i className="fa-regular fa-file-plus"></i>Dodaj przepis</button></a>
                </div>
            </header>


        </>
    );
}

export default Header;