import {  toast } from 'react-toastify';

const ToastError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

export default ToastError