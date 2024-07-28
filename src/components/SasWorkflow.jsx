import { useState, useRef, useEffect } from 'react';
import { HStack, Box, Text, Heading, List, ListItem, ListIcon, Divider, Image, VStack, Link, Button, Flex, Collapse } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import photo2 from '../images/photo2.jpg';

const KeyResponsibilities = () => (
  <>
    <Heading as="h5" size="sm" mb={2}>Key Responsibilities</Heading>
    <List spacing={2} fontSize="sm">
      <ListItem>
        <HStack align="start">
          <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
          <Box flex="1">
            <Text as="span" fontWeight="bold">UI Lead and Architect:</Text>
            <List spacing={1} pl={4} fontSize="sm">
              {[
                "Architecture and Design: Led the architecture and design of the SAS VI Workflow interface, ensuring a user-friendly and efficient system.",
                "Feature Development: Developed key features such as domain data updates, reporting, email notifications, and administrative task reporting.",
                "Collaboration: Worked closely with stakeholders to gather requirements and feedback, iteratively improving the system based on user needs.",
                "UI Performance Optimization: Implemented performance optimizations to enhance the application's responsiveness and efficiency."
              ].map((item, index) => (
                <ListItem key={index}>
                  <HStack align="start">
                    <ListIcon as={ChevronRightIcon} color="gray.500" boxSize={2} transform="translate(6px,8px)" />
                    <Text><strong>{item.split(":")[0]}</strong>: {item.split(":")[1]}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>
        </HStack>
      </ListItem>
    </List>
  </>
);

const ImpactAndAchievements = () => (
  <>
    <Heading as="h5" size="sm" mb={2}>Impact and Achievements</Heading>
    <List spacing={2} fontSize="sm">
      {[
        "Standalone Product: Successfully transitioned SAS VI Workflow from a feature within SAS VI to a standalone product.",
        "Patent Basis: The architecture of SAS VI Workflow formed the basis of the User Interface Creation System patent.",
        "Enhanced Efficiency: Improved task management and workflow efficiency for users, leading to higher productivity and satisfaction."
      ].map((item, index) => (
        <ListItem key={index}>
          <HStack align="start">
            <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
            <Box flex="1"><strong>{item.split(":")[0]}</strong>: {item.split(":")[1]}</Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  </>
);

const TechnologiesUsed = () => (
  <>
    <Heading as="h5" size="sm" mb={2}>Technologies Used</Heading>
    <Text fontSize="sm">Angular, AngularJS, TypeScript, React, Javascript, HTML, CSS, Less, Sass, SCSS, GoJS, various performance optimization tools</Text>
  </>
);

const DetailsSection = ({ showMore, detailsRef }) => (
  <Collapse in={showMore} animateOpacity>
    <Box p={4} ref={detailsRef}>
      <Divider my={3} />
      <KeyResponsibilities />
      <Divider my={3} />
      <ImpactAndAchievements />
      <Divider my={3} />
      <TechnologiesUsed />
      <Divider my={3} />
      <Text fontSize="sm">
      The success of SAS VI Workflow as a standalone product is a testament to my skills in UI architecture and system optimization. By integrating key features such as domain data updates and comprehensive task reporting, I developed a robust and versatile task management system. This project highlights my ability to innovate and lead in creating scalable, high-performance solutions that meet diverse user requirements.
      </Text>
    </Box>
  </Collapse>
);

export default function SasWorkflow() {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);
  const detailsRef = useRef(null);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200); // Adjust the delay as needed
    }
  }, [showMore]);

  return (
    <VStack id="sas-workflow-section" ref={sectionRef} pt={0}>
      <Box maxHeight="70vh" overflowY="auto" p={5} shadow="md" borderRadius="lg" textAlign="left">
        <Flex direction="column" height="100%">
          <HStack align="start">
            <VStack w="45%">
              <Link href="https://support.sas.com/resources/papers/proceedings17/SAS0524-2017.pdf" isExternal>
                <Image src={photo2} alt="SAS Workflow" borderRadius="lg" />
              </Link>
            </VStack>
            <VStack w="55%" pl={4} align="start">
              <Link href="https://support.sas.com/resources/papers/proceedings17/SAS0524-2017.pdf" isExternal _hover={{ textDecoration: 'underline' }}>
                <Heading as="h4" size="md" mb={2} color="teal.500">SAS VI Workflow</Heading>
              </Link>
              <Text fontSize="sm" fontWeight="bold">UI Lead and Architect</Text>
              <Text fontSize="sm"><strong>TL;DR:</strong> I led the development of SAS VI Workflow from its inception to being sold as a standalone task management system. The architecture of this project formed the basis of my <Link href="https://patents.google.com/patent/US11537366B1/en" isExternal color="teal.500">User Interface Creation System patent</Link>. It includes features such as domain data updates, user task reporting, script and REST task management, email notifications, and administrative task management.</Text>
              <Text fontSize="sm"><strong>Overview:</strong> SAS VI Workflow is a powerful task management system designed to streamline workflows and improve efficiency. It is unique in its ability to update domain data as the workflow progresses and comes equipped with features such as reporting, email notifications, and task reporting for employees.</Text>
            </VStack>
          </HStack>

          <DetailsSection showMore={showMore} detailsRef={detailsRef} />
        </Flex>
      </Box>
      <Box pt={0} mt={0}>
        <Button variant="link" onClick={handleToggle} color="teal.500" pt={0} mt={0} pb={2}
          fontWeight="bold" rightIcon={!showMore ? <ArrowForwardIcon /> : <ArrowBackIcon />}>
          {showMore ? "See less" : "See more"}
        </Button>
      </Box>
    </VStack>
  );
}
