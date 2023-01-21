const URL = 'https://bookmark-api-alec.onrender.com';

export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}
