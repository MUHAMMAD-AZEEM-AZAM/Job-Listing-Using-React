import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobsListing from '../components/JobsListing';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobsListing/>
    <ViewAllJobs/>  
  </>
  )
}

export default HomePage