import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";


const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: import.meta.env.ACFO_FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.ACFO_FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.ACFO_FIREBASE_PRIVATE_KEY,
  client_email:
    "firebase-adminsdk-rap76@astro-auth-6cc43.iam.gserviceaccount.com",
  client_id: "100068165142027748424",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rap76%40astro-auth-6cc43.iam.gserviceaccount.com",
};

const initApp = () => {
    if (import.meta.env.PROD) {
      console.info('PROD env detected. Using default service account.')
      // Use default config in firebase functions. Should be already injected in the server by Firebase.
      return initializeApp()
    }
    console.info('Loading service account from env.')
    return initializeApp({
      credential: cert(serviceAccount as ServiceAccount)
    })
  }
  
  export const app = activeApps.length === 0 ? initApp() : activeApps[0];