import { database } from '@/configs';
import { ISettingsForm } from '@/screens/Settings/types';
import { IFirebaseDatabase } from '@/types/Firebase';
import { IUser } from '@/types/User';
import { QueryKey } from '@tanstack/react-query';

interface IPostPayload extends ISettingsForm {
  id: IUser['id'];
}

class SettingsService {
  private database: IFirebaseDatabase;
  private basePath: string;
  private baseQueryKey: string;

  constructor(database: IFirebaseDatabase) {
    this.database = database;
    this.basePath = '/settings';
    this.baseQueryKey = 'settings';
  }

  getSettingsQueryKey(othersKeys: QueryKey) {
    return [this.baseQueryKey, ...othersKeys];
  }

  getSettings = async (id: IUser['id']) => {
    const path = `${this.basePath}/${id}`;
    const response = await this.database.ref(path).once('value');
    return response.val();
  };

  postSettings = async ({ id, type, ...data }: IPostPayload) => {
    const path = `${this.basePath}/${id}/${type}`;
    await this.database.ref(path).set(data);
  };
}

export default new SettingsService(database);
