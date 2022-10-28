export const getCharacters = async (page) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const getDetailCharacter = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const getFilmsHttp = async (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
}