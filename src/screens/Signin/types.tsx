import { z } from 'zod';
import { validations } from './validations';

type ISiginForm = z.infer<typeof validations>;

export type { ISiginForm };
