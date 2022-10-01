import React from "react";
import UseMemoHooks from "./components/UseMemoHook";
// import UseEffectHook from "./components/UseEffectHook";
// import UseReducerHook from "./components/UseReducer";
// import Homepage from "./components/ConRan2";
// import UseStatehook from "./components/UseState";
// import ConditionalRan from "./components/ConditionalRandering";
// import PassData from "./components/PropsPass";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import Routings from "./components/Routing";
// import Data from "./components/Data";


class App extends React.Component {
    render() {
        return (
            <>
            <UseMemoHooks />
                {/* <UseReducerHook /> */}
                {/* <UseEffectHook /> */}
                {/* <UseStatehook /> */}
                {/* <Homepage /> */}
                {/* <PassData age='25'/> */}
                {/* <ConditionalRan /> */}
                {/* 
                <BrowserRouter>
                    <Link to='/routingPage'> click To go on Rendering page </Link>

                    <Routes>
                        <Route path="/routingPage" element={<Routings />}>
                            <Route path="data" element={<Data />} />
                        </Route>
                    </Routes>
                </BrowserRouter> */}





            </>
        )
    }
}
export default App