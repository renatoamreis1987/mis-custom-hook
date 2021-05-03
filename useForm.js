import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // Lo que hace es resetear el input con el valor inicial
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
