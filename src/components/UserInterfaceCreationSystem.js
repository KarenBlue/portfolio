import { useState, useRef, useEffect } from 'react';
import { HStack, Box, Text, Heading, List, ListItem, ListIcon, Divider, Image, VStack, Link, Button, Flex, Collapse } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import photo3 from '../images/photo3.jpg'; // Replace this with the actual image path

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
                "Architecture and Design: Led the architecture and design of the User Interface Creation System, ensuring a flexible and efficient system.",
                "Feature Development: Developed key features such as data insulation, style management, and UI structure specification in TypeScript.",
                "Performance Optimization: Implemented performance optimizations to enhance the application's responsiveness and efficiency.",
                "Framework Agnosticism: Ensured the system allows quick transfer between widget libraries or frameworks, minimizing time and effort."
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
        "Patent Awarded: The architecture of this system was so effective that it was awarded a patent.",
        "Efficiency: Enabled the transfer of an entire year-long release from using Kendo Angular widgets to SAS React widgets in less than a week.",
        "Performance: The patterns created were highly performant, effective, and bug-free, leading to their widespread adoption and the company interest in patenting the solution.",
        "Framework Independence: The architecture allows quick and seamless transition between different widget libraries or frameworks."
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
    <Text fontSize="sm">Angular, AngularJS, TypeScript, React, JavaScript, HTML, CSS, Less, Sass, SCSS, GoJS, various performance optimization tools</Text>
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
      Leading the creation of the User Interface Creation System allowed me to showcase my skills in architectural design and cross-technology adaptability. The system’s ability to facilitate swift transitions between different UI frameworks is a testament to my innovative approach and technical proficiency. This project, which underpins my patent, exemplifies my dedication to delivering scalable and efficient UI solutions.</Text>
    </Box>
  </Collapse>
);

export default function UserInterfaceCreationSystem() {
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
    <VStack id="user-interface-creation-system-section" ref={sectionRef} pt={0}>
      <Box maxHeight="70vh" overflowY="auto" p={5} shadow="md" borderRadius="lg" textAlign="left">
        <Flex direction="column" height="100%">
          <HStack align="start">
            <VStack w="45%">
              <Link href="https://patents.google.com/patent/US11537366B1/en" isExternal>
                <Image src={photo3} alt="User Interface Creation System" borderRadius="lg" />
              </Link>
            </VStack>
            <VStack w="55%" pl={4} align="start">
              <Link href="https://patents.google.com/patent/US11537366B1/en" isExternal _hover={{ textDecoration: 'underline' }}>
                <Heading as="h4" size="md" mb={2} color="teal.500">User Interface Creation System Patent</Heading>
              </Link>
              <Text fontSize="sm" fontWeight="bold">UI Lead and Architect, Lead Inventor </Text>
              <Text fontSize="sm"><strong>TL;DR:</strong>  I designed and patented the User Interface Creation System, a groundbreaking architecture that facilitates swift migration between UI frameworks. This system underpinned the SAS VI Workflow and auditing codebases, ensuring performance and adaptability.</Text>
              <Text fontSize="sm"><strong>Overview:</strong> The User Interface Creation System is unique in its ability to insulate data, styles, and UI structure info in TypeScript, enabling quick transitions between frameworks. This led to the transfer of a year-long release from Kendo Angular to SAS React widgets in less than a week.</Text>
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
