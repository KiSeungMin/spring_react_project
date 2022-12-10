import React from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./components/main/HeaderComponent";
import ItemListComponent from "./components/item/ItemListComponent";
import FooterComponent from "./components/main/FooterComponent";
import ItemCreateComponent from "./components/item/ItemCreateComponent";
import ItemComponent from "./components/item/ItemComponent";
import ItemRouteComponent from "./components/item/ItemRouteComponent";
import MainPageComponent from "./components/main/MainPageComponent";

function App() {

    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <Routes>
                    <Route path="/" element = {<MainPageComponent/>}></Route>
                    <Route path="item/*" element={<ItemRouteComponent/>}></Route>
                    <Route path="items" element = {<ItemListComponent/>}></Route>
                    {/*<Route path="items/*" element={<ItemListComponent/>}></Route>*/}
                    <Route path="create-item" element = {<ItemCreateComponent/>}></Route>
                </Routes>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;