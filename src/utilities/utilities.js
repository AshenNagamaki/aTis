export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    scrollToTop();
  }
};

export const activeClassElector = (elector, mainClass, secondClass) =>
  elector ? mainClass : `${mainClass} ${secondClass}`;
