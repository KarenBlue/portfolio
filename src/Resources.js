import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Resources = {
  shared: {
    ids: {
      bio: 'bio',
      projectsSection: 'projects-section',
      contactMeSection: 'contactme-section',
    },
    colors: {
      backgroundColor: 'gray.800',
      textColor: 'white',
    },
  },
  header: {
    urls: {
      email: 'mailto:kcjirak@gmail.com',
      github: 'https://github.com/peter',
      linkedin: 'https://www.linkedin.com/in/karen-jirak-a05619a/',
      medium: 'https://medium.com/@peter',
    },
    text: {
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      medium: 'Medium',
      projects: 'Projects',
      contactMe: 'Contact Me',
      bio: 'Bio',
    },
    socials: [
      { icon: faEnvelope, url: 'mailto: hello@example.com', title: 'Email' },
      { icon: faGithub, url: 'https://github.com', title: 'GitHub' },
      { icon: faLinkedin, url: 'https://www.linkedin.com', title: 'LinkedIn' },
      { icon: faMedium, url: 'https://medium.com', title: 'Medium' },
    ],
  },
  bio: {
    urls: {
      avatar: 'https://media.licdn.com/dms/image/C5603AQEg2wm3sFirxA/profile-displayphoto-shrink_400_400/0/1658179821705?e=1727308800&v=beta&t=lJ0C_uy5urfyOI27RjI8LbRXrwTA9wtVQkgtSfrB99c',
    },
    text: {
      greeting: "Hello, I'm Karen",
      bio1: 'Passionate UI architect, toolset designer, team leader, and developer looking to make a bit of a ',
      bio2: 'difference in this world by building inclusivity, performance, and ease of use into one feature at a time.',
    },
  },
  projectsSection: {
    text: {
      featuredProjects: 'Featured Projects',
    },
    projects: [
      {
        getImageSrc: () => require("./images/photo1.jpg"),
        title: 'SAS Visual Investigator',
        link: '#',
      },
      {
        getImageSrc: () => require("./images/photo2.jpg"),
        title: 'SAS Vi workflow',
        link: '#',
      },
      {
        getImageSrc: () => require("./images/photo3.jpg"),
        title: 'Photo Gallery',
        description: 'A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
        link: '#',
      },
      {
        getImageSrc: () => require("./images/photo4.jpg"),
        title: 'Event Planner',
        description: 'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
        link: '#',
      },
    ],
  },
  contactMeSection: {
    text: {
      heading: 'Contact Me',
      nameLabel: 'Name',
      emailLabel: 'Email Address',
      typeLabel: 'Type of enquiry',
      messageLabel: 'Your message',
      submitButton: 'Submit',
      emailSuccess: 'Message sent successfully!',
      emailFailure: 'Failed to send message.',
      firstNameRequired: 'Required',
      commentRequired: 'Required',
      typeRequired: 'Required',
      emailRequired: 'Required',
      invalidEmail: 'Invalid email address'
    },
    options: {
      hireMe: 'Freelance project proposal',
      openSource: 'Open source consultancy session',
      other: 'Other',
    },
    ids: {
      firstName: 'firstName',
      email: 'email',
      type: 'type',
      comment: 'comment',
      emailService: { 
        name: 'KcjirakSendTo',
        template: 'KcjirakSendToTemplate',
        key: 'aGWKLtiGRQsTpn1qr',
        success: 'success',
        hireMe: 'hireMe',
        openSource: 'openSource',
        other: 'other',
        error: 'error'
      }
    }
  },
};

export default Resources;
