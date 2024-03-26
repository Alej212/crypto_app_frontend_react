const data = async () => {
    const url = `${import.meta.env.VITE_URL3}`;
    const options = {
        method : 'GET',
        headers : {
            'X-RapidAPI-Key': import.meta.env.VITE_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_HOST3,
        }
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        return result
    } catch (e) {
        console.error(e)
    } 
}

export default data