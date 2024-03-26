import axios from "axios";

const data = async (date, uuid) => {
    const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/history`,
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: date,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_HOST,
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
};

export default data