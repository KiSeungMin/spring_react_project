import React, {useEffect, useState} from 'react';
import itemService from "../../service/item/ItemService";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import ItemUpdateComponent from "./ItemUpdateComponent";
import ItemDeleteComponent from "./ItemDeleteComponent";

const ItemComponent = (props) => {

    const navigate = useNavigate();
    // path 의 item/${} 부분을 받아온다.
    const itemId = Number(useParams().id);
    const [item, setItem] = useState({});

    useEffect( () => {

        itemService.getItem(itemId)
            .then((res) => {
                setItem(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    const updateItem = (itemId, e) => {
        e.preventDefault();
        navigate('/item/' + itemId + '/update');
    }

    const deleteItem = (itemId, e) => {
        e.preventDefault();
        navigate('/item/' + itemId + '/delete');
    }

    return(
        <div>
            {/*<Routes>*/}
            {/*    <Route path="/delete" element={<ItemDeleteComponent itemId = {item.id}/>}></Route>*/}
            {/*</Routes>*/}

            <div className="mt-3">
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>item_name</th>
                            <th>item_category</th>
                            <th>item_description</th>
                            <th>item_memberName</th>
                            <th>item_price</th>
                            <th>item_createdTime</th>
                            <th>item_updatedTime</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.itemName}</td>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.memberName}</td>
                            <td>{item.price}원</td>
                            <td>{item.createdTime}</td>
                            <td>{item.updatedTime}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <button className="btn btn-primary" onClick={(e) => updateItem(item.id, e)}>아이템 수정하기</button>
                    <button className="btn btn-danger" onClick={(e) => deleteItem(item.id, e)}>아이템 삭제하기</button>
                </div>
            </div>
        </div>

    );
}

export default ItemComponent;