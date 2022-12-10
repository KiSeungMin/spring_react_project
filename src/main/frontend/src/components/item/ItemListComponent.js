import React, {useEffect, useState} from 'react';
import {createBrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import itemService from "../../service/item/ItemService";
import ItemComponent from "./ItemComponent";
import App from "../../App";

const ItemListComponent = () =>{

    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getItems()
            .then((res) => {
                setItems(res.data)
            })
            .catch(error => console.log(error));
    }, []);

    // 글 작성 버튼을 클릭 시 글작성 페이지로 이동하게 해주는 함수를 정의한 것
    const createItem = () => {
        navigate('/create-item');
    }

    const moveToItem = (itemId, e) => {
        e.preventDefault();
        navigate('/item/' + itemId);
    }

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className="row mb-2">
                <button className="btn btn-primary" onClick={createItem}>아이템 등록</button>
            </div>
            <div className ="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>상품 번호</th>
                        <th>상품 이름</th>
                        <th>카테고리</th>
                        <th>설명 </th>
                        <th>판매자 </th>
                        <th>가격 </th>
                        <th>판매시작일시</th>
                        <th>최근수정일시</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(
                            (item) =>
                                <tr key={item.id} onClick={(e) => {
                                    moveToItem(item.id, e)
                                }}>
                                    <td> {item.id}</td>
                                    <td> {item.itemName} </td>
                                    <td> {item.category} </td>
                                    <td> {item.description} </td>
                                    <td> {item.memberName} </td>
                                    <td> {item.price}원</td>
                                    <td> {item.createdTime} </td>
                                    <td> {item.updatedTime} </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemListComponent;