import { useLoaderData, Form } from 'react-router-dom'

function Show(props) {
  const bookmarks = useLoaderData()

  return (
    <div className="update">
      <h2>{bookmarks.title}</h2>
      <Form action={`/update/${bookmarks._id}`} method="post">
        <input type="text" name="title" placeholder="Bookmark Title" /><br/>
        <input type="text" name="url" placeholder="Bookmark Address" /><br/>
        <input type="submit" value="Update Bookmark" />
      </Form>

    <h2>Delete Bookmark</h2>
    <Form action={`/delete/${bookmarks._id}`} method="post">
    <input type="submit" value='Delete Bookmark' />
    </Form>
    </div>
)
}

export default Show