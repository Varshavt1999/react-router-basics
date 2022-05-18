import React from "react";
/* useNavigate -it is a react hook used to navigation without using Link - custom navigation*/
import { useNavigate, useParams } from "react-router-dom";
// helmet - it is package(react-helmet) used to change the title of webpage corresponding to current screens
import { Helmet } from "react-helmet";
// useSearchparams - to add querry string to a url
import { useSearchParams } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div>
                <h1>Home page</h1>

                {/* <button onClick={() => navigate("contact")}>
                    click me to go to the contact page
                </button> */}
                <button onClick={() => navigate("/contact")}>
                    click me to go to the contact page
                </button>
                <button onClick={() => setSearchParams({ name: "varsha" })}>
                    Add
                </button>
                <button onClick={() => setSearchParams()}>Remove</button>
                <h3>Name from querry is {name}</h3>
            </div>
        </>
    );
}

export default Home;
