import { useState, useEffect,useRef } from 'react';
import { HStack, Box, Text, Heading, List, ListItem, ListIcon, Divider, Image, VStack, Link, Button, Flex, Collapse } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import photo1 from '../images/photo1.jpg';

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
                "Analyze and Index: Led the design and implementation of the user interface for the analyze and index features, facilitating efficient data exploration and preparation.",
                "Auditing: Developed comprehensive auditing tools to track and document user activities, ensuring compliance with regulatory requirements.",
                "User Action Analysis: Architected and optimized workflows for analyzing user actions, enhancing the overall user experience through intuitive interface design.",
                "Workflow: Designed and managed workflow tools, enabling users to create, monitor, and manage investigative workflows seamlessly."
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
      <ListItem>
        <HStack align="start">
          <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
          <Box flex="1">
            <Text as="span" fontWeight="bold">Contributions to Social Network Analysis:</Text> Assisted in developing features for social network analysis, allowing users to visualize and interact with complex networks of entities, uncovering hidden patterns and relationships.
          </Box>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack align="start">
          <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
          <Box flex="1">
            <Text as="span" fontWeight="bold">Performance Analyst and Educator:</Text>
            <List spacing={1} pl={4} fontSize="sm">
              {[
                "Acted as the go-to performance analyst, identifying and resolving performance bottlenecks to ensure a smooth user experience.",
                "Provided training and education to team members on best practices and advanced UI techniques, fostering a collaborative and high-performing development environment."
              ].map((item, index) => (
                <ListItem key={index}>
                  <HStack align="start">
                    <ListIcon as={ChevronRightIcon} color="gray.500" boxSize={2} transform="translate(6px,8px)" />
                    <Text>{item}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack align="start">
          <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
          <Box flex="1">
            <Text as="span" fontWeight="bold">General UI Problem-Solver:</Text> Played a critical role as an all-round pinch hitter for various UI issues, quickly addressing and resolving any UI-related challenges during development and deployment.
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
        "Enhanced Usability: The interfaces and tools developed under my leadership significantly improved the usability and efficiency of SAS Visual Investigator, leading to better user satisfaction and more effective investigations.",
        "Increased Adoption: The intuitive design and robust functionality of the platform contributed to its widespread adoption across multiple industries, including finance, healthcare, and law enforcement.",
        "Performance Improvements: Through meticulous performance analysis and optimization, ensured that the application could handle large datasets and complex queries with minimal latency, enhancing overall user productivity."
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

const PremierClients = () => (
  <>
    <Heading as="h5" size="sm" mb={2}>Premier Clients</Heading>
    <Text fontSize="sm">
      During my tenure, SAS Visual Investigator was the flagship fraud detection product used by major clients such as:
    </Text>
    <List spacing={2} pl={5} fontSize="sm">
      {[
        "HSBC: This global banking giant employs SAS Visual Investigator to monitor for money laundering activities and enforce regulatory compliance across its vast operations.",
        "Australian Federal Police: They utilize SAS Visual Investigator for handling complex investigations and managing large volumes of data to uncover hidden networks and relationships.",
        "United Nations Office on Drugs and Crime (UNODC): The UNODC uses SAS Visual Investigator to analyze and tackle issues related to drug trafficking and other organized crime activities."
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
const DetailsSection = ({ showMore }) => (
  <Collapse in={showMore} animateOpacity>
    <Box p={4}>
      <Divider my={3} />
      <KeyResponsibilities />
      <Divider my={3} />
      <ImpactAndAchievements />
      <Divider my={3} />
      <TechnologiesUsed />
      <Divider my={3} />
      <Text fontSize="sm">
        This project showcases my ability to lead and architect complex UI solutions, my expertise in performance analysis, and my capacity to deliver high-quality, user-centric applications. It also highlights my role in fostering a collaborative development environment and my versatility in addressing a wide range of UI challenges.
      </Text>
    </Box>
  </Collapse>
);

export default function SasVi() {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500); // Adjust the delay as needed
    }
  }, [showMore]);

  return (
    <VStack id="sas-vi-section" ref={sectionRef} pt={0}>
      <Box maxHeight="70vh" overflowY="auto" p={5} shadow="md" borderRadius="lg" textAlign="left">
        <Flex direction="column" height="100%">
          <HStack align="start">
            <VStack w="45%">
              <Link href="https://www.sas.com/en_us/software/intelligence-analytics-visual-investigator.html" isExternal>
                <Image src={photo1} alt="SAS Visual Investigator" borderRadius="lg" />
              </Link>
            </VStack>
            <VStack w="55%" pl={4} align="start">
              <Link href="https://www.sas.com/en_us/software/intelligence-analytics-visual-investigator.html" isExternal _hover={{ textDecoration: 'underline' }}>
                <Heading as="h4" size="md" mb={2} color="teal.500">SAS Visual Investigator</Heading>
              </Link>
              <Text fontSize="sm" fontWeight="bold">UI Lead and Architect</Text>
              <Text fontSize="sm"><strong>TL;DR:</strong> I served as UI Lead and Architect, significantly enhancing the usability, performance, and functionality of key features like Analyze and Index, Auditing, User Action Analysis, and Workflow. My efforts contributed to the platform's adoption by major banks, government agencies, and police forces.</Text>
              <Text fontSize="sm"><strong>Overview:</strong> SAS Visual Investigator is a versatile and comprehensive cloud-based solution designed to meet the needs of intelligence analysis and investigation management. It enables users to efficiently handle various investigative tasks, including fraud detection, regulatory compliance, law enforcement, and public health surveillance.</Text>
            </VStack>
          </HStack>

          <DetailsSection showMore={showMore} />
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
