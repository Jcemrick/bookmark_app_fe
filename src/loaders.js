const URL = 'https://bookmark-app-ub56.onrender.com';


export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}
