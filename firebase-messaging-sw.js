// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyB4mdYi6d5_yWMeqf9SwRDuqMpLW7vseR8",
    authDomain: "website-9442c.firebaseapp.com",
    projectId: "website-9442c",
    storageBucket: "website-9442c.firebasestorage.app",
    messagingSenderId: "490236144166",
    appId: "1:490236144166:web:2651f3bc8a0a719e85d4e7"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/favicon.ico',
        vibrate: [200, 100, 200]
    });
});
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
