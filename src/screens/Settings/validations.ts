import theme from '@/global/theme';
import { z } from 'zod';
import { ISettingsForm } from './types';

const defaultValues: ISettingsForm = {
  type: 'cube',
  rotation: 0,
  color: theme.colors.primary?.[500]!,
};

const validations = z.object({
  type: z.enum(['cube', 'cone', 'dodecaedro']),
  rotation: z.number(),
  color: z.string(),
});

export { defaultValues, validations };
