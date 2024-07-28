import { useState, useRef, useEffect } from 'react';
import { HStack, Box, Text, Heading, List, ListItem, ListIcon, Divider, Image, VStack, Link, Button, Flex, Collapse } from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon, ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";


const KeyResponsibilities = () => (
  <>
    <Heading as="h5" size="sm" mb={2}>Key Responsibilities</Heading>
    <List spacing={2} fontSize="sm">
      <ListItem>
        <HStack align="start">
          <ListIcon as={CheckCircleIcon} color="green.500" boxSize={3} transform="translate(6px,4px)" />
          <Box flex="1">
            <Text as="span" fontWeight="bold">UI Architect and Developer:</Text>
            <List spacing={1} pl={4} fontSize="sm">
              {[
                "Architecture and Design: Led the architecture and design of the Unreal Engine Toolkit Builder, ensuring a flexible and efficient system.",
                "Feature Development: Developed key features for generating diverse toolkits based on input data about various Unreal Engine tools.",
                "Performance Optimization: Implemented performance optimizations to enhance the application's responsiveness and efficiency.",
                "Adaptability: Applied generative UI ideas from web development to pure C++ development, showcasing adaptability in learning different technologies."
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
        "Modeling Mode Toolkit: Used to generate the new Unreal Engine 5 modeling mode toolkit.",
        "Skeletal Mesh Editor: Enabled the team to generate the Skeletal mesh editor within a day's time using the Toolkit Builder.",
        "Avalanche Toolkit: Generated the Avalanche toolkit, showcasing the versatility and robustness of the Toolkit Builder.",
        "Adaptability: Successfully transitioned from web development to pure C++ development, applying generative UI concepts across technologies."
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
    <Text fontSize="sm">C++</Text>
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
      This project demonstrates my ability to innovate and apply architectural principles across different technologies, from web development to C++. By leveraging the patterns from my patented User Interface Creation System, I was able to design a flexible and efficient toolkit builder that significantly enhances productivity. The successful application of this system in generating key Unreal Engine 5 toolkits highlights my proficiency in rapid prototyping, adaptability, and cross-disciplinary expertise. This project underscores my capability to deliver scalable, high-performance solutions indiverse and complex development environments.</Text>
    </Box>
  </Collapse>
);

export default function UnrealEngineToolkitBuilder() {
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
    <VStack id="unreal-engine-toolkit-builder-section" ref={sectionRef} pt={0}>
      <Box maxHeight="70vh" overflowY="auto" p={5} shadow="md" borderRadius="lg" textAlign="left">
        <Flex direction="column" height="100%">
          <HStack align="start">
            <VStack w="45%">
              <Link href="https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Developer/WidgetRegistration/FToolkitBuilder" isExternal>
                <Image src={`${process.env.PUBLIC_URL}/images/photo4.jpg`}alt="Unreal Engine Toolkit Builder" borderRadius="lg" />
              </Link>
            </VStack>
            <VStack w="55%" pl={4} align="start">
              <Link href="https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Developer/WidgetRegistration/FToolkitBuilder" isExternal _hover={{ textDecoration: 'underline' }}>
                <Heading as="h4" size="md" mb={2} color="teal.500">Unreal Engine Toolkit Builder</Heading>
              </Link>
              <Text fontSize="sm" fontWeight="bold">UI Architect and Developer</Text>
              <Text fontSize="sm"><strong>TL;DR:</strong> I led the development and architecture of the Unreal Engine Toolkit Builder. This system allows quick generation of diverse toolkits and was pivotal in creating the new Unreal Engine 5 modeling mode toolkit, the Skeletal mesh editor, and the Avalanche toolkit. The system’s architecture was inspired by patterns from my patented <Link href="https://patents.google.com/patent/US11537366B1/en" isExternal color="teal.500">User Interface Creation System</Link>.</Text>
              <Text fontSize="sm"><strong>Overview:</strong> The Unreal Engine Toolkit Builder uses patterns similar to my patented system, allowing the quick generation of toolkits based on input data about various Unreal Engine tools. This adaptability was demonstrated by the rapid creation of the Skeletal mesh editor within a day and its application in other toolkits.</Text>
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
