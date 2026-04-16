# Firebase Configuration Setup

## Security Issue Fixed

The Firebase API key has been removed from the source code to prevent exposure of sensitive credentials.

## Setup Instructions

### Option 1: Direct Configuration (Development Only)

1. Open `firebase-config.js`
2. Replace the empty string with your Firebase API key:
   ```javascript
   window.FIREBASE_API_KEY = "AIzaSyBqn10Zjuimbifyx_3813caY-s9boS7FKM";
   ```
3. **IMPORTANT**: Do NOT commit this file with the actual API key to version control

### Option 2: External Configuration (Recommended)

1. Create a separate configuration file outside of version control:
   ```html
   <script>
     window.FIREBASE_API_KEY = "AIzaSyBqn10Zjuimbifyx_3813caY-s9boS7FKM";
   </script>
   <script src="firebase-config.js"></script>
   ```

2. Add this script tag before the `firebase-config.js` script in your HTML

### Option 3: Environment Variables (Production)

For production deployments, use environment variables or a secure configuration management system:

1. Set up environment variables in your hosting platform
2. Use a build process to inject the API key at deployment time
3. Never expose the actual API key in client-side code

## Additional Security Measures

### Firebase App Check
Implement Firebase App Check to restrict API key usage to your verified apps:
- https://firebase.google.com/docs/app-check

### Firebase Security Rules
Configure Firebase Security Rules to protect your database:
- https://firebase.google.com/docs/database/security

### API Key Restrictions
In the Firebase Console, restrict your API key to specific domains:
1. Go to Google Cloud Console
2. Navigate to APIs & Services > Credentials
3. Select your API key
4. Add application restrictions (HTTP referrers)

## Files Modified

- `files/chefia.html` - Updated to use environment variable for API key
- `files/chefia.js` - Updated to use environment variable for API key
- `files/firebase-config.js` - Created configuration file
- `files/.env.example` - Created example environment file

## Original API Key

The original API key was: `AIzaSyBqn10ZjuimbifYx_3813caY-s9boS7FKM`

**Action Required**: 
1. Rotate this API key in the Firebase Console
2. Update your configuration with the new key
3. Add the old key to your revocation list