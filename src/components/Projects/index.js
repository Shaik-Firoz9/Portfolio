import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Filter projects based on the toggle value
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter(project => project.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton 
            active={toggle === 'all'} 
            value="all" 
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton 
            active={toggle === 'web app'} 
            value="web app" 
            onClick={() => setToggle('web app')}
          >
            WEB APP'S
          </ToggleButton>
          <Divider />
          {/* Uncomment these lines to include additional categories */}
          {/* <ToggleButton 
            active={toggle === 'android app'} 
            value="android app" 
            onClick={() => setToggle('android app')}
          >
            ANDROID APP'S
          </ToggleButton>
          <Divider /> */}
          {/* <ToggleButton 
            active={toggle === 'machine learning'} 
            value="machine learning" 
            onClick={() => setToggle('machine learning')}
          >
            MACHINE LEARNING
          </ToggleButton>
          <Divider /> */}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} // Ensure your project object has a unique 'id'
              project={project} 
              openModal={openModal} 
              setOpenModal={setOpenModal} 
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default Projects;
