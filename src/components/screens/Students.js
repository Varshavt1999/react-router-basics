import React from "react";
import { Link } from "react-router-dom";

function Students() {
    const children = [
        {
            id: 1,
            name: "anu",
        },
        {
            id: 2,
            name: "abhi",
        },
        {
            id: 3,
            name: "ammu",
        },
        {
            id: 4,
            name: "chinnu",
        },
        {
            id: 5,
            name: "appu",
        },
    ];
    return (
        <div>
            hrllojefhjghrgjrhg
            {children.map((child) => (
                <>
                    <h4>{child.name}</h4>
                    <Link to={`${child.name}`}>View</Link>
                </>
            ))}
        </div>
    );
}

export default Students;
