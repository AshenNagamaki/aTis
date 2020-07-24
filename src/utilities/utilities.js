export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const handleKeyDownCreator = (event, keyDownHandler) => {
  if (event.key === 'Enter') {
    keyDownHandler();
  }
};

export const activeClassElector = (elector, mainClass, secondClass) =>
  elector ? mainClass : `${mainClass} ${secondClass}`;

export const parseError = (err) =>
  JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)));
