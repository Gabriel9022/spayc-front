export const validationRules = {
  name: {
    required: 'Este campo es obligatorio.',
    minLength: { value: 3, message: 'Debe contener al menos 3 letras.' },
    maxLength: { value: 30, message: "La cantidad máxima de letras es 30." },
    pattern: { value: /^[A-Za-z\s]+$/, message: 'Solo letras y espacios están permitidos.' },
  },
  email: {
    required: 'Este campo es obligatorio.',
    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'El formato del correo es inválido.' },
  },
  tel: {
    required: "Este campo es obligatorio.",
    minLength: { value: 6, message: "Cantidad de dígitos inválida." },
    maxLength: { value: 15, message: "Cantidad de dígitos inválida." },
    pattern: { value: /^[0-9()+-]+$/, message: 'Número de teléfono inválido.' },
  },
  message: {
    required: 'Este campo es obligatorio.',
    maxLength: { value: 600, message: "Se permiten hasta 600 caracteres." },
  },
  firstName: {
    required: "Este campo es obligatorio.",
    minLength: { value: 3, message: 'Debe contener al menos 3 letras.' },
    maxLength: { value: 15, message: "La cantidad máxima de letras es 10." },
    pattern: { value: /^[A-Za-z]+$/, message: 'Solo puede contener letras, sin espacios.' },
  },
  lastName: {
    required: "Este campo es obligatorio.",
    minLength: { value: 3, message: 'Debe contener al menos 3 letras.' },
    maxLength: { value: 30, message: "La cantidad máxima de letras es 30." },
    pattern: { value: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: 'Solo puede contener letras, sin espacios al inicio o final.' },
  },
  userName: {
    required: 'Este campo es obligatorio.',
    minLength: { value: 8, message: 'Debe 8 caracteres.' },
    maxLength: { value: 8, message: 'Debe 8 caracteres.' },
    pattern: { value: /^\d+$/, message: 'Sólo puede contener números.' },
  },
  password: {
    required: 'Este campo es obligatorio.',
    minLength: { value: 5, message: 'Debe contener al menos 5 caracteres.' },
    maxLength: { value: 15, message: 'La cantidad máxima de caracteres es 15.' },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/,
      message: 'Debe contener mayúscula, minúscula, número y símbolo.',
    },
  },
};