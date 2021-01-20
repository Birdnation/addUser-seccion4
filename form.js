let contador = 0;
$(function(){
    
    $('#btnadd').click(function(){
        //Variables
        let nombre = $('#name').val();
        let apellido = $('#lastName').val();
        let correo = $('#email').val();
        let telefono = $('#phone').val();


        //Ex. Regulares

        let exNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}$/;
        let exCorreo = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
        let exTelefono = /^[0-9]{5,}$/;

        if (!nombre.match( exNombre ) || !apellido.match( exNombre ) || !correo.match( exCorreo ) || !telefono.match( exTelefono )){
            alert('Los datos no son correctos reintente');
        }else{
            $('#datos').append(`    <tr>
                                        <td>${contador + 1}</td>
                                        <td>${nombre}</td>
                                        <td>${apellido}</td>
                                        <td>${correo}</td>
                                        <td>${telefono}</td>
                                    </tr>`);
            contador++;
        }
    });

});
