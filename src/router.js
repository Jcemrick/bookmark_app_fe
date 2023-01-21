import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
}
from 'react-router-dom';
import App from './App.js';
import Index from './pages/Index.js'
import Show from './pages/Show.js'
import { bookmarkLoader, bookmarkedLoader } from './loaders.js';
import {createAction, deleteAction, updateAction} from './actions.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} className="main">
      <Route path="" element={<Index />} loader={bookmarkLoader} />
      <Route path="/:id"element={<Show />} loader={bookmarkedLoader}/>
      <Route path="create" action={createAction} />
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
)

export default router