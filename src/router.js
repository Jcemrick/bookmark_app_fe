import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
}
from 'react-router-dom';
import App from './App';
import { bookmarkLoader } from './loaders';
import Index from './pages/Index'
import Show from './pages/Show'
import {createAction, deleteAction, updateAction} from './actions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} className='main'>
      <Route path="" element={<Index />} loader={bookmarkLoader}/>
      <Route path="/:id" element={<Show />} action={updateAction} loader={bookmarkLoader} />
      <Route path="create" action={createAction} />
      <Route path="edit/:id" />
      <Route path="update/:id" />
      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
)

export default router