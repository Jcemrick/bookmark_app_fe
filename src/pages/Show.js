import { useLoaderData, Form } from 'react-router-dom'

function Show(props) {
  const bookmarks = useLoaderData()

  return (
    <div className="update">
      <h2>{bookmarks.title}</h2>
      <Form action={bookmarks._id} method="post">
        <input type="input" name="title" placeholder="Bookmark Title" /><br/>
        <input type="input" name="url" placeholder="Bookmark Address" /><br/>
        <input type="submit" value="Update Bookmark" />
      </Form>

    <h2>Delete Bookmark</h2>
    <Form action={`/delete/${bookmarks._id}`} method="post">
    <input type="submit" value={`Delete ${bookmarks.title}`} />
    </Form>
    </div>
)
}

export default Show