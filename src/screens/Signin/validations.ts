import { z } from 'zod';

const defaultValues = {
  email: '',
  password: '',
};

const validations = z.object({
  email: z.string().min(1, 'E-mail requerido.').email('E-mail inválido.'),
  password: z.string().min(1, 'Senha requerida.'),
});

export { defaultValues, validations };
