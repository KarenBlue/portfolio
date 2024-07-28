import React from 'react';
import { HStack, VStack, Image, Heading, Text, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Styles } from '../Styles'; // Import the Styles

// Card props
const CardProps = {
  container: {
    ...Styles.projectsSection.card.container,
  },
  image: {
    ...Styles.projectsSection.card.image,
  },
  textContainer: {
    ...Styles.projectsSection.card.textContainer,
  },
  heading: {
    ...Styles.projectsSection.card.heading,
  },
  text: {
    ...Styles.projectsSection.card.text,
  },
  link: {
    ...Styles.projectsSection.card.link,
  },
}

const Card = ({ project, mr, children }) => {
  return (
    <HStack {...CardProps.container} mr={0}  >
{/*       <Image
        src={project.image}
        alt={project.title}
        {...CardProps.image}
      /> */}
      <VStack {...CardProps.textContainer} display={'block'} alignItems={'left'} w={"100%%"}  >
        {children}
      </VStack>
    </HStack>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
