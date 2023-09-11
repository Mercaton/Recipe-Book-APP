import React from 'react';

function Header() {
    return (
        <>
            <header className="header">
                <div className="menu-box">
                    <a href="/"><div className="logo-box">
                        <h1>Family</h1>
                        <h2>CookBook</h2>
                    </div></a>
                    <a href="/add"><i className="fa-regular fa-file-plus"></i><button>Dodaj przepis</button></a>
                </div>
            </header>


        </>
    );
}

export default Header;