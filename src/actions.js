import { redirect } from 'react-router-dom'

const URL = 'https://bookmark-api-alec.onrender.com'

export const createAction = async ({request}) => {
  const formData = await request.formData()
  const newBookmark = {
    title: formData.get("title"),
    url: formData.get("url")
  }
  await fetch(URL + "/bookmark", {
    method: "post",
    headers: {
      'Content-Type':"application/json"
    },
    body: JSON.stringify(newBookmark)
  })
  return redirect('/')
}

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()
  const updatedBookmark = {
    name: formData.get("title"),
    url: formData.get("url")
  }

  await fetch(URL + `/bookmark/${params.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedBookmark)
  })
  return redirect('/')
}

export const deleteAction = async ({req, params }) => {
  await fetch(URL + `/bookmark/${params.id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return redirect('/')
}


