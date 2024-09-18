export const validationRules = {
    userName: {
      required: 'Este campo es obligatorio',
      minLength: { value: 15, message: 'Debe contener al menos 15 caracteres' },
      maxLength: { value: 38, message: 'La cantidad máxima de caracteres es 38' },
      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'El formato del email es incorrecto' },
    },
    password: {
      required: 'Este campo es obligatorio',
      minLength: { value: 5, message: 'Debe contener al menos 5 caracteres' },
      maxLength: { value: 15, message: 'La cantidad máxima de caracteres es 15' },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/,
        message: 'Debe contener mayúscula, minúscula, número y símbolo',
      },
    },
  };