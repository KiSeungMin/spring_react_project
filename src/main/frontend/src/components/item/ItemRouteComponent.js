import React, {Component, useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import ItemComponent from "./ItemComponent";
import itemService from "../../service/item/ItemService";
import ItemUpdateComponent from "./ItemUpdateComponent";
import ItemDeleteComponent from "./ItemDeleteComponent";

const ItemRouteComponent = () => {

    const [itemIdList, setItemIdList] = useState([]);

    useEffect(() => {
        itemService.getItemIdList()
            .then((res) => {
                setItemIdList(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Routes>
            {
                itemIdList.map(
                    (id) => {
                        return(
                            <>
                                <Route path={String(id)} element={<ItemComponent itemId={id}/>}></Route>
                                <Route path={String(id + "/update")} element={<ItemUpdateComponent itemId={id}/>}></Route>
                                <Route path={String(id + "/delete")} element ={<ItemDeleteComponent itemId={id}/>}></Route>
                            </>
                        )
                    }
                )
            }
            {/*<Route path={String(1)} element={<ItemComponent itemId={1}/>}></Route>*/}
        </Routes>
    );
}

export default ItemRouteComponent;