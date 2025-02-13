import { ReactNativeFirebase } from '@react-native-firebase/app';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';

type IFirebaseAuth = ReactNativeFirebase.FirebaseModuleWithStaticsAndApp<
  FirebaseAuthTypes.Module,
  FirebaseAuthTypes.Statics
>;

type IFirebaseDatabase = FirebaseDatabaseTypes.Module;

export type { IFirebaseAuth, IFirebaseDatabase };
