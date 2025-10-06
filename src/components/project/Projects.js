import React from 'react';
import { useSelector } from 'react-redux';
import ProjectList from './ProjectList';

const Project = () => {
  const designs = useSelector(state => state.design.designs);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="project-list d-flex flex-wrap justify-content-spacebetween gap-3">
          {designs && designs.map(design => (
            <ProjectList design={design} key={design.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;



