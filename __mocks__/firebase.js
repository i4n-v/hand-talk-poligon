jest.mock('@react-native-firebase/app', () => {
  return {
    initializeApp: jest.fn(() => Promise.resolve(true)),
    apps: [],
    app: jest.fn(() => ({
      name: 'mockApp',
      options: {},
    })),
  };
});

jest.mock('@react-native-firebase/auth', () => {
  return () => ({
    currentUser: { uid: '123', email: 'test@example.com' },
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { uid: '123', email: 'test@example.com' } }),
    ),
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({ user: { uid: '123', email: 'test@example.com' } }),
    ),
    signOut: jest.fn(() => Promise.resolve()),
    onAuthStateChanged: jest.fn((callback) => {
      callback({ uid: '123', email: 'test@example.com' });

      return jest.fn();
    }),
  });
});

jest.mock('@react-native-firebase/analytics', () => {
  return () => ({
    logEvent: jest.fn(),
    setUserId: jest.fn(),
    setUserProperties: jest.fn(),
  });
});

jest.mock('@react-native-firebase/database', () => {
  const databaseMock = {
    ref: jest.fn(() => ({
      once: jest.fn(() => Promise.resolve({ val: () => ({ key: 'mockData' }) })),
      set: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
      on: jest.fn(),
      off: jest.fn(),
    })),
  };

  return {
    firebase: {
      database: jest.fn(() => databaseMock),
    },
  };
});

jest.mock('@react-native-firebase/remote-config', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    fetchAndActivate: jest.fn(() => Promise.resolve(true)),
    getAll: jest.fn(() => ({
      polygon_color_change: {
        asString: jest.fn(() => 'enabled'),
        asBoolean: jest.fn(() => true),
        asNumber: jest.fn(() => 1),
      },
    })),
    setDefaults: jest.fn(() => Promise.resolve()),
    setDefaultsFromResource: jest.fn(() => Promise.resolve()),
    onConfigUpdated: jest.fn(() => {
      return jest.fn();
    }),
  })),
}));
