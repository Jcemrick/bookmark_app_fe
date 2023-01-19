import { Link, useLoaderData, Form} from 'react-router-dom'
import { useState } from 'react'
import urlCorrector from '../urlfixer'
import { deleteAction } from '../actions'

function Index(props){
    const [titleState, setTitleState] = useState('')
    const [urlState, setUrlState] = useState('')
    function handleSubmit(e){
        console.log("SUBMITT")
        setTitleState('')
        setUrlState('')
    }

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

    return (
    <div>
        <h1>Bookmarked Pages</h1>
        <div className='container'>
        {sorted.map((bookmark) => (
            <div key={bookmark._id} className='card'>
                <h1>{bookmark.title}</h1>
                
                <button><a href={urlCorrector(bookmark.url)}>Visit</a></button>
                <button>Edit</button>
                <button onClick={deleteAction}>Delete</button>
            </div>
        ))}
        </div>
        
        <footer>
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
            <input type='submit'/>
        </Form>
        </footer>
    </div>
    )
}

export default Index