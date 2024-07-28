const Utils = {

    generateAriaLabel: (title) => `${title} tooltip`,

    smoothScrollTo:  (event, id) => {
      event.preventDefault();
      const anchor = document.querySelector(`#${id}`);
      if (anchor) {
        window.history.pushState(null, null, `#${id}`);
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

  };
  
  export default Utils;
  