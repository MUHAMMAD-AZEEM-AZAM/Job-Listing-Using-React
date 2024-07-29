import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, json } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


function App() {
  //Add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  //delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }

  //Edit job
  const updateJob=async (job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application.json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs/:id' index element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-jobs/:id' index element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='/jobs' index element={<JobsPage />} />
        <Route path='/add-job' index element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' index element={<NotFoundPage />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  );
}

export default App;
