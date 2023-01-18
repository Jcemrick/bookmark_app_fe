import {Form} from 'react-router-dom'

function Index(props){
    return (
    <div>
        <h1>Create a new Bookmark</h1>
        <Form action = '/create' method='post'>
            <input type='text' name ='title'/>
            <input type='text' name = 'url'/>
            <input type='submit'/>
        </Form>
        <h1>INDEX COMPONENT</h1>
    </div>
    )
}

export default Index