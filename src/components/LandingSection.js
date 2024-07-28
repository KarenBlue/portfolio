import React from 'react'
import FullScreenSection from './FullScreenSection'
import { Box, VStack, Heading, Text, Image } from '@chakra-ui/react'
import Resources from '../Resources' // Import the Resources
import { Shared, Styles } from '../Styles' // Import the Shared and Styles

// Landing Section props
const landingSectionProps = {
  section: {
    id: Resources.shared.ids.bio,
    height: "100vh",
    bg: '#3498db', // Using shared background color
    color: Shared.colors.textColor, // Using shared text color
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 4,
  },
  
  avatar: {
    src: Resources.bio.urls.avatar,
    alt: "Avatar",
    borderRadius: Styles.bio.avatar.borderRadius,
    boxSize: Styles.bio.avatar.boxSize,
    marginBottom: Styles.bio.avatar.marginBottom,
  },
  
  textContainer: {
    spacing: Styles.bio.textContainer.spacing,
  },
  
  heading: {
    as: Styles.bio.text.as,
    children: Resources.bio.text.greeting,
  },
  
  text: {
    size: Shared.textSizes.doubleExtraLarge
  },
  
  texts: [
    Resources.bio.text.bio1,
    Resources.bio.text.bio2
  ]
}

const LandingSection = () => {
  return (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#3498db"
  >
      <Box {...landingSectionProps.section}>

        {/* Container for the text and avatar */}
        <VStack {...landingSectionProps.textContainer}>

          {/* Avatar image */}
          <Image {...landingSectionProps.avatar} />

          {/* Greeting heading */}
          <Heading {...landingSectionProps.heading} />

          {/* Bio text */}
          {landingSectionProps.texts.map((text, index) => (
            <Text key={index} {...landingSectionProps.text}   >{text}</Text>
          ))}

        </VStack>
        
      </Box>
    </FullScreenSection>
  )
}

export default LandingSection
