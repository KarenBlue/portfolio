import React, { useRef, useEffect, useState } from 'react';
import { Box, HStack, Link, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resources from '../Resources'; // Import the Resources
import Utils from '../Utils'; // Import the Utils
import { Styles } from '../Styles'; // Import Styles





const Header = ( { updateSection } ) => {

  const handleClick = (event, id) => {
    updateSection( id );
  };

    
  const headerProps = {
    container: {
      ...Styles.header.container,
      transition: 'transform 0.3s ease-in-out', // Add transition for smooth animation
    },
    socials: Resources.header.socials.map(social => ({
      icon: social.icon,
      url: social.url,
      title: social.title,
      ariaLabel: Utils.generateAriaLabel(social.title),
    })),
    outerHStack: {
      justify: Styles.header.container.justifyContent,
    },
    innerHStack: {
      spacing: Styles.header.container.spacing.social,
    },
    linkProps: {
      bio: {
        href: `#bio`,
        ...Styles.header.links,
        onClick: (event) => handleClick(event, Resources.shared.ids.bio),
        children: Resources.header.text.bio,
      },
      projects: {
        href: `#${Resources.shared.ids.projectsSection}`,
        ...Styles.header.links,
        onClick: (event) => handleClick(event, Resources.shared.ids.projectsSection),
        children: Resources.header.text.projects,
      },
      contactMe: {
        href: `#${Resources.shared.ids.contactMeSection}`,
        ...Styles.header.links,
        onClick: (event) => handleClick(event, Resources.shared.ids.contactMeSection),
        children: Resources.header.text.contactMe,
      },
    },
  };

  const headerRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const header = headerRef.current;

    if (header) {
      if (prevScrollPos > currentScrollPos) {
        header.style.transform = 'translateY(0)';
      } else {
        header.style.transform = 'translateY(-200px)';
      }
      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box {...headerProps.container} ref={headerRef}>
      {/* Container for the header content, fixed at the top */}
      <HStack {...headerProps.outerHStack}>
        <nav>
          {/* Left side of the header: Social media icons with tooltips */}
          <HStack {...headerProps.innerHStack}>
            {headerProps.socials.map((social, index) => (
              <Tooltip key={index} label={social.title} aria-label={social.ariaLabel}>
                <a href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              </Tooltip>
            ))}
          </HStack>
        </nav>
        <nav>
          {/* Right side of the header: Internal links to sections */}
          <HStack {...headerProps.innerHStack}>
            <a {...headerProps.linkProps.bio} />
            <a {...headerProps.linkProps.projects} />
            <a {...headerProps.linkProps.contactMe} />
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Header;
