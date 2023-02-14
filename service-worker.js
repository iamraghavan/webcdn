self.addEventListener('push', event => {
    const data = event.data.json();
    const title = data.title;
    const message = data.message;
  
    event.waitUntil(
      self.registration.showNotification(title, {
        body: message
      })
    );
  });
  