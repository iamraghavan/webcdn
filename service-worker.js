
        const newDiv = document.createElement('div');
        newDiv.id = 'notification';
        document.body.appendChild(newDiv);


        // Register a service worker
        navigator.serviceWorker.register('');

        // Request permission to send push notifications
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Create a push subscription
                navigator.serviceWorker.ready.then(registration => {
                    registration.pushManager.subscribe({ userVisibleOnly: true }).then(subscription => {
                        // Send the subscription data to the server to save
                    });
                });
            }
        });

        // Send a dynamic push notification
        function sendNotification(title, message) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification(title, {
                    body: message
                });
            });
        }




        sendNotification('Bumble Bees - Blog & News', 'We are excited to announce the release of our latest blog post and news update.!');

        self.addEventListener('push', event => {
            const data = event.data.json();
            const title = data.title;
            const message = data.message;



            event.waitUntil(
                self.registration.showNotification(title, {
                    body: message,
                    icon: 'https://bumblebees.co.in/images/Logo/favicon.png'

                })
            );
            event.notification.close();
            event.waitUntil(
                clients.openWindow('https://bumblebees.co.in/')
            );
        });
