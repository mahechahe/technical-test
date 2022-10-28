export const getArrays= async (array) => {
    let requests = await array.map(url => fetch(url));

    Promise.all(requests)
        .then(responses => responses.forEach(
            response => console.log(response)
    ))
}   