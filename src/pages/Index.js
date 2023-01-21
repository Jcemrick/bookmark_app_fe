import { Link, useLoaderData, Form} from 'react-router-dom'
import { useState } from 'react'
import urlCorrector from '../urlfixer'


function Index(props){
    //Controlled creation form - empty upon submission
    const [titleState, setTitleState] = useState('')
    const [urlState, setUrlState] = useState('')
    function handleSubmit(e){
        console.log("SUBMITT")
        setTitleState('')
        setUrlState('')
    }
    
    //Sort loader data alphabetically
    const bookmarks = useLoaderData()
    const sorted = bookmarks.sort((a,b) => {
        if (a.title > b.title){
            return -1
        }else if (a.title < b.title){
            return 1
        }else {
            return 0
        }
    })    

    //Use state on sorted data, creating a state is what allows us to use setBookmarksState for the sake of search bar filtering results
    const [bookmarksState, setBookmarksState] = useState(sorted)

    //Search Bar controlled form
    const [searchState, setSearchState] = useState('')
    function handleSearchChange(event){
        setSearchState(event.target.value)
    }
    function handleSearchSubmit(){
        const searchResult = [...bookmarksState].filter(bookmark => bookmark.title === searchState)
        setBookmarksState(searchResult)
    }

    return (
    <div>
        <h1>Bookmarked Pages</h1>
        <div className='container'>
        {bookmarksState.map((bookmark) => (
            <div key={bookmark._id} className='card'>
                <h1>{bookmark.title}</h1>
                
                <button><a href={urlCorrector(bookmark.url)}>Visit</a></button>
                <Link to={`/${bookmark._id}`}><button>Edit</button></Link>
            </div>
        ))}
        </div>
        
        <footer>
        <h1>Search for a Bookmark</h1>
        <Form onSubmit={handleSearchSubmit}>
            <input type='text' 
            value={searchState}
            onChange={handleSearchChange}
            />
            <input type="submit"/>
        </Form>
        <h1>Create a new Bookmark</h1>
        <Form onSubmit={handleSubmit} action = '/create' method='post'>
            <input 
            type='text' 
            name ='title'
            placeholder='Title' 
            value={titleState} 
            onChange = {event => setTitleState(event.target.value)} 
            />

            <input 
            type='text' 
            name = 'url'
            placeholder='URL'
            value={urlState}
            onChange = {event => setUrlState(event.target.value)}
            />
            <input type='submit' value="Create"/>
        </Form>
        </footer>
    </div>
    )
}

export default Index
