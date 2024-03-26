import axios from "axios";

const data = async (numberCriptos) => {
    const options = {
        method: 'GET',
        url: `${import.meta.env.VITE_URL}/coins`,
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '3h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: numberCriptos,
          offset: '0'
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
}

export default data