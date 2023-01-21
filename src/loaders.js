const URL = 'https://bookmark-api-alec.onrender.com';

export const bookmarkLoader = async () => {
    const response = await fetch(URL + '/bookmark')
    const bookmark = await response.json()
    return bookmark
}

export const bookmarkedLoader = async ({params}) => {
    const response = await fetch(URL + '/bookmark/' + params.id)
    const bookmarked = await response.json()
    return bookmarked
}
