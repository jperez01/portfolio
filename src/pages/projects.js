import React from 'react';
import projectsinfo from '../projectsinfo.json';
import Project from '../Components/project';
import Header from '../Components/header';

/**
 * Page to show project info and links to those projects
 */
export default function projects() {
    return (
        <div className="background">
            <Header/>
            <div className="page">
                <h1 className="page-title"> Projects </h1>
                <div className="projects-list">
                    {
                        projectsinfo.map(project => {
                            return <Project data={project}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}