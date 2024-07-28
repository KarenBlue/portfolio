import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { SectionIds } from "./shared/SectionIds";
import { useState } from "react";

function App() {

  const [activeSection, setActiveSection] = useState( SectionIds.Bio );

  function handleSectionUpdate( newSectionId ) {
    
    setActiveSection( () => newSectionId );

  }

  let ActiveSectionTag = LandingSection;

  if ( activeSection != SectionIds.Bio ) {
    ActiveSectionTag = activeSection === SectionIds.ContactMe ? ContactMeSection : ProjectsSection;
  }

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header updateSection={ handleSectionUpdate } />
          <ActiveSectionTag />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
