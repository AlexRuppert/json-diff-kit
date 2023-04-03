import React from 'react';

const getValue = () => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  const query = new URLSearchParams(hash);
  return {
    l: query.get('l') || '',
    r: query.get('r') || '',
  };
};

const useInitialValues = () => {
  const [initialValues, setInitialValues] = React.useState(getValue());

  React.useEffect(() => {
    const hashChange = () => {
      const newValue = getValue();
      if (initialValues.l !== newValue.l || initialValues.r !== newValue.r) {
        setInitialValues(newValue);
      }
    };
    window.addEventListener('hashchange', hashChange);
    return () => {
      window.removeEventListener('hashchange', hashChange);
    };
  }, []);

  return initialValues;
};

export default useInitialValues;
