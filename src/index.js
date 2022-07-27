//Acitivates the service worker
if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js")
    .then(registration => {
        console.log('SW Registered!');
        console.log(registration);
    })
    .catch(error => {
        console.log('SW Registartion failed!');
        console.log(error);
    });
} 
//If service worker isn't able to be activated, then displays this message.
else {
    console.log('Application is not supported.');
}

