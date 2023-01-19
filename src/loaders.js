const URL = 'http://localhost:4000';

export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}
