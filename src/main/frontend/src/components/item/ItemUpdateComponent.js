import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import itemService from "../../service/item/ItemService";

const ItemUpdateComponent = (props) => {

    const navigate = useNavigate();
    const itemId = Number(useParams().id);

    const [item, setItem] = useState({});
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        itemService.getItem(itemId)
            .then((res) => {

                let item = res.data
                setItem(item);

                setItemName(item.itemName);
                setCategory(item.category);
                setDescription(item.description);
                setPrice(item.price)

            })
            .catch(error => console.log(error));
    }, []);

    const updateItem = (itemId, e) => {
        e.preventDefault();

        let item = {
            itemName: itemName,
            category: category,
            description: description,
            price: price
        };

        console.log("item => "+ JSON.stringify(item));
        itemService.updateItem(itemId, item).then(res => {
            navigate("/item/" + itemId);
        });
    }

    const cancel = (itemId) => {
        navigate('/item/' + itemId);
    }

    const changeItemNameHandler = (event) => {
        setItemName(event.target.value);
    }

    const changeCategoryHandler = (event) => {
        setCategory(event.target.value);
    }

    const changeDescriptionHandler = (event) => {
        setDescription(event.target.value);
    }

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    }

    return(
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">아이템을 수정해주세요.</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> itemName </label>
                                    <input type="text" placeholder="itemName" name="itemName" className="form-control"
                                           value={itemName} onChange={changeItemNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Title </label>
                                    <input type="text" placeholder="category" name="category" className="form-control"
                                           value={category} onChange={changeCategoryHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Contents  </label>
                                    <textarea placeholder="description" name="description" className="form-control"
                                              value={description} onChange={changeDescriptionHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> price  </label>
                                    <input placeholder="price" name="price" className="form-control"
                                           value={price} onChange={changePriceHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={(e) => updateItem(itemId, e)}>Save</button>
                                <button className="btn btn-danger" onClick={(e) => cancel(itemId, e)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemUpdateComponent;

