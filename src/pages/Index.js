import { Link, useLoaderData, Form} from 'react-router-dom'
import { useState } from 'react'

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
    console.log(sorted)

    return (
    <div>
            <h1>Bookmarked Pages</h1>
        {sorted.map((bookmark) => (
            <div key={bookmark._id}>
                <a href={bookmark.url}>{bookmark.title}</a> 
            </div>
        ))}

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
        <h1>INDEX COMPONENT</h1>
    </div>
    )
}

export default Index
