import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/item";
const ITEMS_API_BASE_URL = "http://localhost:8080/api/items";

class ItemService {

    getItem(itemId){
        return axios.get(ITEM_API_BASE_URL + "/" + itemId);
    }

    getItems(){
        return axios.get(ITEMS_API_BASE_URL);
    }

    createItem(item){
        return axios.post(ITEM_API_BASE_URL, item);
    }

    updateItem(itemId, item){
        return axios.patch(ITEM_API_BASE_URL + "/" + itemId, item);
    }

    deleteItem(itemId){
        return axios.delete(ITEM_API_BASE_URL + "/" + itemId);
    }
}

export default new ItemService();