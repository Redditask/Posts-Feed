import axios from "axios";

export default class PostServise {
    static async getData(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    }
}
