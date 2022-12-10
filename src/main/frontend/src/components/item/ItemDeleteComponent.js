import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import itemService from "../../service/item/ItemService";

const ItemDeleteComponent = (props) => {

    const navigate = useNavigate();

    const deleteItem = (itemId, e) => {
        e.preventDefault();

        console.log("item" + itemId + " delete");
        itemService.deleteItem(itemId).then(res => {
            navigate('/items');
        })
    }

    const cancel = (itemId, e) => {
        e.preventDefault();
        navigate('/item/' + itemId);
    }

    return(
        <div className="row mt-3">
            <button className="btn btn-danger" onClick={(e) => deleteItem(props.itemId, e)}>삭제하기</button>
            <button className="btn btn-primary" onClick={(e) => cancel(props.itemId, e)}>취소하기</button>
        </div>
    );
}

export default ItemDeleteComponent;