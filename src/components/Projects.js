import React from 'react';

const Projects = (props) => {
   
    return (
        
        <div className="col-xs-12 col-sm-12 col-md-6 col-xl-4 project-card" key={props.id}>
            <div className="card h-100">
               
                <div className="card-body text-center cardBodyBorder">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="embed-responsive embed-responsive-4by3">
                    <img src={props.image}
                        className="card-img-top embed-responsive-item" alt="project"/>
                </div>
                <div className= "card-foot">
                    <div className="card-footer text-center">
                        <a href={props.deployed} target="_blank" rel="noreferrer noopener"
                            className="btn btn-outline myButton buttonMargin">View Project</a>
                        <a href={props.github} target="_blank" rel="noreferrer noopener"
                            className="btn myButton buttonMargin">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
