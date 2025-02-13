import { z } from 'zod';
import { validations } from './validations';
import { IPoligonTypes } from '@/components/Poligon/types';

type ISettingsForm = z.infer<typeof validations>;

interface IPoligonOptions {
  name: string;
  value: IPoligonTypes;
}

export type { ISettingsForm, IPoligonOptions };
