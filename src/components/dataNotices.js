import axios from "axios";

const data = async () => {
    const options = {
    method: 'GET',
    url: `${import.meta.env.VITE_URL2}coindesk`,
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_HOST2,
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default data