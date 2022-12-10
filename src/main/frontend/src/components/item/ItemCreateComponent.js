import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import itemService from "../../service/item/ItemService";

const ItemCreateComponent = () => {

    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

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

    // 'Save' 버튼을 클릭시 API에 글 작성 리퀘스트를 보내는 함수를 선언
    const createItem = (event) => {
        event.preventDefault();

        let item = {
            itemName: itemName,
            category: category,
            description: description,
            price: price
        };

        console.log("item => "+ JSON.stringify(item));
        itemService.createItem(item).then(res => {
            navigate("/items");
        });
    }

    // 글 작성 취소 버튼이 클릭되었을 때 글 목록 페이지로 이동하는 함수를 선언
    const cancel = () => {
        navigate("/items");
    }

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">아이템을 등록해주세요.</h3>
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
                                <button className="btn btn-success" onClick={createItem}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCreateComponent;