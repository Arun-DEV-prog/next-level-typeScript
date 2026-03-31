import axios from 'axios';
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
        }
        console.log(error.message);
    }
};
fetchData();
//# sourceMappingURL=webreq.js.map