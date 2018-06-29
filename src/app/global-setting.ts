interface AlertSettings {
    overlay?: boolean;
    overlayClickToClose?: boolean;
    showCloseButton?: boolean;
    duration?: number;
}

export let Alert_settings: AlertSettings = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 5000
};

export const UrlServ = 'http://localhost:3000/api';
// export const UrlServ = 'https://jlcaback.herokuapp.com/api';
