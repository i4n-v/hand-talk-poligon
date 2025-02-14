import { ISiginForm } from '@/screens/Signin/types';
import { IFirebaseAuth } from '@/types/Firebase';
import auth from '@react-native-firebase/auth';

class AuthService {
  private auth: IFirebaseAuth;

  constructor(auth: IFirebaseAuth) {
    this.auth = auth;
  }

  signin = async (data: ISiginForm) => {
    const response = await this.auth().signInWithEmailAndPassword(data.email, data.password);
    return response;
  };

  signout = async () => {
    await this.auth().signOut();
  };

  onAuthStateChanged = () => {
    return this.auth().onAuthStateChanged;
  };
}

export default new AuthService(auth);
