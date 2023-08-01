const getLocationID = (url) => {
    return url.split('/').at(-1);
}

export default getLocationID;