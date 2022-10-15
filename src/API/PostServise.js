import axios from "axios";

export default class PostServise {
    static async getData(limit = 10, page = 1){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _limit: limit,
                _page: page
                //query параметры для header-а
            }
        });
        return response;
    }
}
