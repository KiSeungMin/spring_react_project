import React from 'react';
import './App.css'
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./components/main/HeaderComponent";
import ItemListComponent from "./components/item/ItemListComponent";
import FooterComponent from "./components/main/FooterComponent";
import ItemCreateComponent from "./components/item/ItemCreateComponent";
import ItemComponent from "./components/item/ItemComponent";
import MainPageComponent from "./components/main/MainPageComponent";
import MemberPageComponent from "./components/member/MemberPageComponent";
import ItemUpdateComponent from "./components/item/ItemUpdateComponent";
import ItemDeleteComponent from "./components/item/ItemDeleteComponent";

function App() {

    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <Routes>
                    <Route path="/" element = {<MainPageComponent/>}></Route>
                    <Route path="member/:id" element={<MemberPageComponent/>}></Route>
                    {/*<Route path="item/*" element={<ItemRouteComponent/>}></Route>*/}

                    <Route path="item/:id" element = {<ItemComponent/>}></Route>
                    <Route path="item/:id/update" element = {<ItemUpdateComponent/>}></Route>
                    <Route path="item/:id/delete" element = {<ItemDeleteComponent/>}></Route>
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