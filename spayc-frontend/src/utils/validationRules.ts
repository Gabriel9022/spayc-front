export const validationRules = {
    userName: {
      required: 'Este campo es obligatorio',
      minLength: { value: 6, message: 'Debe contener al menos 6 caracteres' },
      maxLength: { value: 11, message: 'La cantidad máxima de caracteres es 11' },
      pattern: { value: /^\d+$/, message: 'Sólo puede contener números' },

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