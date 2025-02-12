import { ISiginForm } from '@/screens/Signin/types';
import auth from '@react-native-firebase/auth';

class AuthService {
  async signin(data: ISiginForm) {
    const response = await auth().signInWithEmailAndPassword(data.email, data.password);
    return response;
  }

  async signout() {
    await auth().signOut();
  }
}

export default new AuthService();
