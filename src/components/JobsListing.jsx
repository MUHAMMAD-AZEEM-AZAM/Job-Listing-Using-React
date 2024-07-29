import React from 'react'
import { useState, useEffect } from 'react'
import JobCard from './JobCard'
import Spinner from './Spinner'

const JobsListing = ({ isHome = 'true' }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('/api/jobs')
                const data = await res.json()
                const recentJobs = isHome ? data.slice(0, 3) : data
                setJobs(recentJobs)
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? (<Spinner />) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job, index) => {
                            return (<JobCard job={job} key={job.id} />)
                        })}
                    </div>
                )}

            </div>
        </section>

    )
}

export default JobsListing