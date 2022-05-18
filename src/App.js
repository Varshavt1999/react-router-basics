//npm i react-router-dom@6    -   code tp install react-router-dom

import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import Home from "./components/screens/Home";
import Nav from "./components/includes/Nav";
import NoMatch from "./components/screens/NoMatch";
import ProductNav from "./components/includes/ProductNav";
import Food from "./components/screens/Food";
import Travel from "./components/screens/Travel";
import Dress from "./components/screens/Dress";
import ProductAll from "./components/screens/ProductAll";
import Students from "./components/screens/Students";
import StudentView from "./components/screens/StudentView";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path='about' element={<About />}/> */}
                {/*url redirection using navigate - without showing the component of clicked url , move from that url to another url */}
                {/* =====>   bcz it is entered to the about component first back action does not work. while we clicking back arrow it reaches to the about page.when entered to the about page it redirec to contact 
                        page. and this will repeat.inorder to avoid this we use replace={true} or simply replace */}
                {/* <Route path='about' element={<Navigate replace={true} to="/contact" />}/> */}
                <Route
                    path="about"
                    element={<Navigate replace to="/contact" />}
                />
                <Route path="contact" element={<Contact />} />

                {/* useParams - custom hook provided by react-router-dom  
                : represent its a param. name/(any name) after : accpet any value*/}
                <Route path="students" element={<Students />} />
                <Route path="students/:name" element={<StudentView />} />

                {/* =====>  Route inside a Router => nested routing 
                if we need nested routing. parent of nexted item should be pair tag*/}
                {/* if we want to work this properly we need to use "outlet" */}
                <Route path="products" element={<ProductNav />}>
                    {/* index route - to route any child component together with parent component with the path of parent route itself*/}
                    <Route index element={<ProductAll />} />

                    <Route path="all" element={<ProductAll />} />
                    <Route path="dress" element={<Dress />} />
                    <Route path="food" element={<Food />} />
                    <Route path="travel" element={<Travel />} />
                </Route>
                {/* =====> if no matching url coming */}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
}

export default App;
