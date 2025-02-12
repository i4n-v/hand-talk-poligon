import { IShadow } from '@/types/Theme';

const shadowColor = '#000000';

const shadows: IShadow = {
  0: {
    shadowColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
};

export default shadows;
