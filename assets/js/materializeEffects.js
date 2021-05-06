document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});

// Alerta toasts para mostrar los mensajes/errores del sistema.
function AlertToast(message,icon,color){
    var toastHTML = '<span>'+message+'&nbsp;</span><i class="material-icons'+' '+color+'-text'+'">'+icon+'</i>';
    return M.toast({html: toastHTML, classes: 'rounded'});
}