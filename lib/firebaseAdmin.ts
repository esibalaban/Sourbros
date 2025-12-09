import admin from "firebase-admin";

// Initialize Firebase Admin SDK once per server process
if (!admin.apps.length) {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (serviceAccountJson) {
    const parsed = JSON.parse(serviceAccountJson);
    const privateKey: string = parsed.private_key?.replace(/\\n/g, "\n");

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: parsed.project_id,
        clientEmail: parsed.client_email,
        privateKey,
      }),
    });
  } else {
    // Falls back to ADC if available (e.g., when running on Google Cloud)
    admin.initializeApp();
  }
}

export const db = admin.firestore();


