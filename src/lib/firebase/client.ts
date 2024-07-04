import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIkU-CmtGVLsrs9EdB3EPjk_dCfzwUD4Y",
  authDomain: "acfo-website.firebaseapp.com",
  projectId: "acfo-website",
  storageBucket: "acfo-website.appspot.com",
  messagingSenderId: "824863740351",
  appId: "1:824863740351:web:8db42f6c321fb220c8110a",
};

export const app = initializeApp(firebaseConfig);