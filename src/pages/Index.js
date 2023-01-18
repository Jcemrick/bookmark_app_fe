import { Link, useLoaderData, Form} from 'react-router-dom'

function Index(props){
    const bookmarks = useLoaderData()

    return (
        <div>
            <h1>Bookmarked Pages</h1>
        {bookmarks.map((bookmark) => (
            <div key={bookmark._id}>
                <a href={bookmark.url}>{bookmark.title}</a> 
            </div>
        ))}

    
        <h1>Create a new Bookmark</h1>
        <Form action = '/create' method='post'>
            <input type='text' name ='title'/>
            <input type='text' name = 'url'/>
            <input type='submit'/>
        </Form>
        </div>



    )
}

export default Index