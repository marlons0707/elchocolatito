/*
var divProductos = document.getElementById('products');
getProducts();

function getProducts() {

    var params =  {
        "getProducts" : true
    }
    $.ajax({
        type: "GET",
        url: "http://3.97.33.73/woo/app/process/productos.php?getProducts=true",
        data: params,
        dataType: "json",
        success: function (response) {
            if (response !== "NoData") {
                renderProducts(response);
            }
        },
        error: function(xhr, status, error) {
            console.log(error, status, xhr.status);
        }
    });
}

function renderProducts(response) {
    
    divProductos.innerHTML = '';
    let stringPrecio = '';

    for (let item of response) {

        stringPrecio = (item.Precio != '') ? '<p class="grey-text">Q.'+item.Precio+'</p>' : '';

        divProductos.innerHTML += `
            <div class="col s6 m3">
                <div id="card" class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img src="${item.Imagen}" onclick="modalImage('${item.Imagen}')">
                    </div>
                    <div class="card-content" style="margin-top: -15px;">
                        <span style="font-family: 'Girassol', cursive;">${item.Nombre}</span>
                        ${stringPrecio}
                        <p>${item.Descripcion}</p>
                    </div>
                </div>
            </div>
        `;                
    }

}
*/
function modalImage(imagen) {

    var modalImage = document.getElementById("modal-image");
    
    modalImage.innerHTML = '';
    modalImage.innerHTML = `<img id="modal-image" src="${imagen}" width="100%">`;

    $('#modal-div').modal();
    $('#modal-div').modal('open'); 


}
