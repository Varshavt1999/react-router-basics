import React from "react";
import { useParams } from "react-router-dom";

function StudentView() {
    const { name } = useParams();
    return <h4>My name is {name}</h4>;
}

export default StudentView;
