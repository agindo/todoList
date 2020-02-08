import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>LearnIT Todolist App</h1>
        </header>
    );
}

const headerStyle = {
    background: "#333",
    color: "#FFF",
    textAlign: "center",
    padding: "10px"
}

export default Header;