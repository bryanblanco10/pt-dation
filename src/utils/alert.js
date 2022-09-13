import Swal from 'sweetalert2'

export const messageSweetAlert = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    iconColor: 'black',
    customClass: {
      popup: 'colored-toast'
    },
    timerProgressBar: true
  });
  Toast.fire({
    icon: icon,
    title: title,
  })
}