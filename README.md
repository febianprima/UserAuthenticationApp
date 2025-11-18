# User Authentication App

A React Native mobile application demonstrating user authentication with login, registration, and session management features. Built with TypeScript and React Navigation.

## Product Demo

https://github.com/user-attachments/assets/e30e2ca7-dc55-4ca7-9c44-4798c59b4428

## Features

### 🔐 Authentication Features

- **User Login**: Secure login with email and password validation
- **User Registration**: Create new accounts with name, email, and password
- **Session Persistence**: Automatic session restoration using AsyncStorage
- **Logout Functionality**: Secure logout that clears user session
- **Splash Screen**: Loading screen while checking authentication state

### 📱 User Interface

- **Modern UI Design**: Clean and intuitive user interface
- **Form Validation**: Real-time input validation with error messages
  - Email format validation
  - Password strength requirements (minimum 6 characters, uppercase, lowercase, number, and special character)
- **Password Visibility Toggle**: Show/hide password functionality
- **Error Handling**: User-friendly error modals for invalid credentials
- **Safe Area Support**: Proper handling of device safe areas (notches, status bars)

### 🧭 Navigation

- **Conditional Navigation**: Dynamic navigation based on authentication state
  - Unauthorized users → Login/Register screens
  - Authorized users → Home screen
- **Stack Navigation**: Native stack navigation for smooth transitions
- **Navigation Guards**: Automatic redirection based on authentication status

### 💾 Data Management

- **Local Storage**: User data persistence using AsyncStorage
- **In-Memory User Store**: Runtime user management with JSON-based storage
- **User Context**: Global authentication state management using React Context

## Tech Stack

- **React Native** 0.82.1
- **TypeScript** 5.8.3
- **React Navigation** 7.x (Native Stack Navigator)
- **AsyncStorage** - For local data persistence
- **Lucide React Native** - Icon library
- **React Native Safe Area Context** - Safe area handling
- **React Native Screens** - Native screen components

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20
- **npm** or **yarn**
- **React Native development environment** set up:
  - For iOS: Xcode (macOS only), CocoaPods
  - For Android: Android Studio, Android SDK
- **Ruby** (for CocoaPods on iOS)

For detailed environment setup, refer to the [React Native Environment Setup Guide](https://reactnative.dev/docs/set-up-your-environment).

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd UserAuthenticationApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (iOS only):
   ```bash
   # Install Ruby bundler dependencies
   bundle install
   
   # Install CocoaPods dependencies
   cd ios && bundle exec pod install && cd ..
   # or use the npm script
   npm run ios-install
   ```

## Running the App

### Start Metro Bundler

First, start the Metro bundler in one terminal:

```bash
npm start
# or
yarn start
```

### Run on iOS

Open a new terminal and run:

```bash
npm run ios
# or
yarn ios
```

**Note**: Make sure you've installed CocoaPods dependencies before running on iOS for the first time.

### Run on Android

Open a new terminal and run:

```bash
npm run android
# or
yarn android
```

**Note**: Make sure you have an Android emulator running or a physical device connected via USB with USB debugging enabled.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── ContentContainer.tsx
│   ├── CustomHeader.tsx
│   ├── HomeHeader.tsx
│   ├── PasswordInputRightIcon.tsx
│   └── TextInput.tsx
├── constants/           # App constants
│   ├── colors.ts
│   ├── navigationConstants.ts
│   └── users.json       # Pre-defined user data
├── contexts/            # React Context providers
│   └── AuthenticationContext.tsx
├── hooks/               # Custom React hooks
│   ├── useIsAuthorized.ts
│   ├── useIsCheckingAuthentication.ts
│   └── useIsUnauthorized.ts
├── navigation/          # Navigation configuration
│   └── RootStack.tsx
├── screens/             # Screen components
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   └── SplashScreen.tsx
├── types/               # TypeScript type definitions
│   ├── authentication.d.ts
│   └── navigationStack.d.ts
├── utils/               # Utility functions
│   ├── authenticationStateHandler.ts
│   ├── getUserData.ts
│   └── validateInput.ts
└── AuthenticationApp.tsx # Root component
```

## Key Features Explained

### Authentication Flow

1. **App Launch**: The app checks for cached user data in AsyncStorage
2. **Splash Screen**: Displays while authentication state is being checked
3. **Navigation Decision**:
   - If user is authenticated → Navigate to Home screen
   - If user is not authenticated → Navigate to Login screen
4. **Login/Register**: Users can authenticate or create new accounts
5. **Session Persistence**: User session is saved and restored on app restart

### Input Validation

The app includes comprehensive input validation:

- **Email**: Validates email format using regex pattern
- **Password**: 
  - Minimum 6 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (@$!%*?&)
- **Real-time Feedback**: Validation errors appear as users type

### Pre-defined Users

The app includes 10 pre-defined users in `src/constants/users.json` for testing purposes. You can use any of these credentials to log in:

- Example: `john.doe@example.com` / `Password123!`

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run ios-install` - Install iOS CocoaPods dependencies
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Development

### Hot Reload

The app supports Fast Refresh. When you save changes to your code:
- The app will automatically update with your changes
- State is preserved during most updates

### Manual Reload

- **Android**: Press `R` twice or `Ctrl+M` (Windows/Linux) / `Cmd+M` (macOS) → Select "Reload"
- **iOS**: Press `R` in the iOS Simulator

## Troubleshooting

### iOS Issues

- **CocoaPods errors**: Run `cd ios && bundle exec pod install && cd ..`
- **Build errors**: Clean build folder in Xcode (Product → Clean Build Folder)

### Android Issues

- **Gradle errors**: Run `cd android && ./gradlew clean && cd ..`
- **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`

### General Issues

- **Module not found**: Delete `node_modules` and reinstall dependencies
- **Metro bundler cache**: Clear cache with `npm start -- --reset-cache`

## Learn More

- [React Native Documentation](https://reactnative.dev)
- [React Navigation Documentation](https://reactnavigation.org)
- [TypeScript Documentation](https://www.typescriptlang.org)

## License

This project is for educational and exploration purposes.
