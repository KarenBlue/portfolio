import React from 'react';
import { SimpleGrid, VStack, Heading, HStack } from '@chakra-ui/react';
import Card from './Card';
import Resources from '../Resources'; // Import the Resources
import { Styles } from '../Styles'; // Import the Styles
import FullScreenSection from './FullScreenSection';
import SasVi from './SasVi';
import SasWorkflow from './SasWorkflow';
import UserInterfaceCreationSystem from './UserInterfaceCreationSystem';
import UnrealEngineToolkitBuilder from './UnrealEngineToolkitBuilder';

const ProjectsSectionProps = {
  container: {
    ...Styles.projectsSection.container,
    id: Resources.shared.ids.projectsSection
  },
  scrollbox: {
    ...Styles.projectsSection.scrollbox,
  },
  heading: {
    ...Styles.projectsSection.heading,
  },
  projectRows: {
    ...Styles.projectsSection.projectRows,
  },
};

const ProjectsSection = () => {
  const projects = Resources.projectsSection.projects;

  projects.map((project) => {

    project.image = project.getImageSrc();   
  });

  return (
    <FullScreenSection {...ProjectsSectionProps.container}  isDarkBackground >
      <VStack {...ProjectsSectionProps.scrollbox }  >
      <Heading {...ProjectsSectionProps.heading}>
        {Resources.projectsSection.text.featuredProjects}
      </Heading>
     
      <VStack {...ProjectsSectionProps.projectRows}   >
      <Card key={projects[0].title} project={projects[0]} mr={0}  >
        <SasVi></SasVi>
      </Card>
      <Card key={projects[1].title} project={projects[1]} mr={0}  >
        <SasWorkflow></SasWorkflow>
      </Card>
      <Card key={projects[1].title} project={projects[1]} mr={0}  >
        <UserInterfaceCreationSystem></UserInterfaceCreationSystem>
      </Card>   
      <Card key={projects[1].title} project={projects[1]} mr={0}  >
        <UnrealEngineToolkitBuilder></UnrealEngineToolkitBuilder>
      </Card>      
      </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
