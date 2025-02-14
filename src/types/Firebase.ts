import { ReactNativeFirebase } from '@react-native-firebase/app';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { FirebaseRemoteConfigTypes } from '@react-native-firebase/remote-config';

type IFirebaseAuth = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebaseAuthTypes.Module,
  FirebaseAuthTypes.Statics
>;

type IFirebaseDatabase = FirebaseDatabaseTypes.Module;

type IFireBaseRemoteConfig = ReactNativeFirebase.FirebaseModuleWithStatics<
  FirebaseRemoteConfigTypes.Module,
  FirebaseRemoteConfigTypes.Statics
>;

interface IFirebaseFlags {
  polygon_color_change: boolean;
  polygon_rotation_change: boolean;
}

export type { IFirebaseAuth, IFirebaseDatabase, IFireBaseRemoteConfig, IFirebaseFlags };
