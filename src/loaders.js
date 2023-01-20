const URL = 'https://bookmark-app-7lp8.onrender.com';

export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}
