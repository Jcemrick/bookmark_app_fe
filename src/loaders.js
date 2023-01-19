const URL = 'https://bookmark-app-fe.onrender.com';

export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}
