import { IFirebaseFlags, IFireBaseRemoteConfig } from '@/types/Firebase';
import remoteConfig from '@react-native-firebase/remote-config';

class RemoteService {
  private remote: IFireBaseRemoteConfig;

  constructor(remote: IFireBaseRemoteConfig) {
    this.remote = remote;
  }

  setDefault = async () => {
    const remoteConfig = this.remote();

    await remoteConfig.setDefaults({
      polygon_color_change: true,
    });

    // await this.fetchAndActivate();
  };

  fetchAndActivate = async () => {
    const remoteConfig = this.remote();
    return await remoteConfig.fetchAndActivate();
  };

  getConfig = () => {
    const remoteConfig = this.remote();
    const allSettings = remoteConfig.getAll();
    const settings = Object.entries(allSettings).reduce((settings, [key, entry]) => {
      settings[key] = entry.asBoolean();
      return settings;
    }, {});

    return settings as IFirebaseFlags;
  };

  onConfigUpdated = () => {
    const remoteConfig = this.remote();
    return remoteConfig.onConfigUpdated;
  };
}

export default new RemoteService(remoteConfig);
