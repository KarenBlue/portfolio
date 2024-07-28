import Resources from "./Resources";

const Shared = {
    colors: {
      textColor: '#f8f9f9',
      accentColor: 'black',
      accentBackground: 'black'
    },
    textSizes: {
      small: 'sm',
      medium: 'md',
      large: 'lg',
      extraLarge: 'xl',
      doubleExtraLarge: '2xl',
    },
  };
  
  const Styles = {
    shared: Shared,
  
    header: {
      container: {
        as: 'header', // Render as <header> element
        color: Shared.colors.textColor, // Reference shared text color
        bg: Shared.colors.accentBackground, // Background color
        p: 4, // Padding
        pr: '2rem',
        position: 'fixed', // Fixed position
        width: '100%', // Full width
        zIndex: 999, // High stacking order
        top: 0, // Positioned at the top
        justifyContent: 'space-between', // Justify content spacing
        spacing: { social: 4, nav: 8 }, // Spacing for social and navigation links
      },
      links: {
        style: {
          cursor: 'pointer'
        }
      }
    },
  
    bio: {
      section: {
        id: 'landing-section', // ID for the section
        height: '100vh', // Full viewport height
        bg: '#3498db ', // Reference shared background color
        color: Shared.colors.textColor, // Reference shared text color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 4,
      },
      avatar: {
        borderRadius: 'full',
        boxSize: '150px',
        marginBottom: 0,
      },
      textContainer: {
        spacing: 2,
      },
      heading: {
        size: Shared.textSizes.doubleExtraLarge
      },
      text: {
        as: 'h1'
      },
    },
  
    projectsSection: {
      scrollbox: {
        justifyContent: 'left',
        alignItems: "flex-start"
      },
      container: {
        p: 8,
        paddingTop: 85,
        bg: '#28b463'
      },
      heading: {
        as: 'h2',
        size: Shared.textSizes.extraLarge,
        mb: 8,
        color: Shared.colors.textColor,
        justifyContent: 'left'
      },
      projectRows: {
        p: 2,
        pt: 0 
      },
      card: {
        container: {
          borderRadius: 'lg',
          overflow: 'hidden',
          width: "100%",
          height: "100%",
          boxShadow: 'md',
          justifyContent: 'left',
          alignItems: 'left',
          color: 'gray.100',
          bg: '#111111',
          spacing: 0,
          p: 0,
          align: 'start',
        },
        image: {
          boxSize: '100%',
          w: "30%",
          objectFit: 'cover',
        },
        textContainer: {
          align: 'start',
          alignItems: 'start',
          textAlign: 'left',
          justifyContent: 'left',
          pr: 0,
          pl: 0,
          pt: 0
        },
        heading: {
          size: Shared.textSizes.medium,
          pt: 2
        },
        text: {
          align: 'start',
          color: 'gray.500'
        },
        link: {
          color: Shared.colors.accentColor,
          pb: 2
        },
      },
    },
  
    contactMeSection: {
      container: {
        backgroundColor: '#512DA8',
        color: 'white',
        py: 0,
        spacing: 8,
        w: '100%',
        minHeight: '100vh',
        overflowX: 'scroll',
        padding: 0
      },
      formContainer: {
        w: '100%',
        maxWidth: '1024px',
        p: 32,
        pt: 20,
        overflowX: 'visible',
        alignItems: 'flex-start',
      },
      heading: {
        as: 'h1',
        size: Shared.textSizes.extraLarge,
      },
      form: {
        p: 6,
        rounded: 'md',
        w: '100%',
      },
      formControl: {
        spacing: 4,
      },
      input: {
        height: 250,
      },
      button: {
        type: 'submit',
        colorScheme: 'purple',
        width: 'full',
      },
    },
  };
  
  export { Shared, Styles };
  