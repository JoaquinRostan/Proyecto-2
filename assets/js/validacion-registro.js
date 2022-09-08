const formulario= document.getElementById('formDeRegistro');
const inputs= document.querySelectorAll('#formDeRegistro input')


const expresiones={
    
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password:/^.{8,16}$/, //8 a 16 digitos
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:/^\d{10,14}$/ // 10 a 14 numeros.

};
const camposDelFormulario={
    
    nombre:false,
    password:false,
    correo:false,
    telefono:false,
    terminos:false,
   

};

const nombreDelUsuario= document.getElementById('inputNombreDeUsuario'); 
const emailDelUsuario= document.getElementById('inputEmailDeUsuario'); 
const telefonoDelUsuario= document.getElementById('inputPhoneDeUsuario'); 
const passDelUsuario= document.getElementById('inputPassDeUsuario'); 
const passDelUsuario2= document.getElementById('inputPass2DeUsuario'); 
const mensajeErrorDeForm= document.getElementById('mensajeErrorDeForm'); 
const btnRegistro= document.getElementById('btnRegistro').addEventListener('click',e=>validarFormularioDeRegistro(e)); 


const validarFormularioDeRegistro=(e)=>{


    mensajeErrorDeForm.innerHTML=`<p class"inputErrorDeFormulario-activo mt-3 mb-3"><i class="fas fa-triangle-exclamation inputErrorDeFormulario-activo "></i> DEBES COMPLETAR EL FORMULARIO.</p> `;
 
    
    e.preventDefault();
    
 
    switch(e.target.name){
    case "inputNombreDeUsuario":
        


    validarInputDeRegistro(expresiones.nombre, e.target, 'inputNombreDeUsuario');
     
    console.log(nombreDelUsuario.value);

    //     const iconoCheck= document.getElementById('checkNombre').classList.add('form-group-correcto-activo');
  
    //     const mensajeErrorValidacion= document.getElementById('mensajeErrorNombreUsuario').classList.add('inputErrorDeFormulario-activo');

    // (expresiones.nombre.test(e.target.value)) ? ((iconoCheck)(document.getElementById('mensajeErrorNombreUsuario').classList.remove('inputErrorDeFormulario-activo'))) : (mensajeErrorValidacion)(document.getElementById('checkNombre').classList.remove('form-group-correcto-activo'));

    
    break;

    case "inputEmailDeUsuario":

        validarInputDeRegistro(expresiones.correo, e.target, 'inputEmailDeUsuario');


    //     const iconoEmail= document.getElementById('checkNombre1').classList.add('form-group-correcto-activo');
    //     const mensajeErrorEmailValidacion= document.getElementById('mensajeErrorEmailUsuario').classList.add('inputErrorDeFormulario-activo');
    //    (expresiones.correo.test(e.target.value)) ? ((iconoEmail)(document.getElementById('mensajeErrorEmailUsuario').classList.remove('inputErrorDeFormulario-activo'))) :( (mensajeErrorEmailValidacion)(document.getElementById('checkNombre1').classList.remove('form-group-correcto-activo')));

    break;
    // case "inputFechaDeNacimiento":
    //     (expresiones.fecha.test(e.target.value)) ?:;

    //     break;
     case "inputPhoneDeUsuario":

        validarInputDeRegistro(expresiones.telefono, e.target, 'inputPhoneDeUsuario');

    //     const iconoTelefono= document.getElementById('checkNombre2').classList.add('form-group-correcto-activo');
    //     const mensajeErrorTelefonoValidacion= document.getElementById('mensajeErrorTelefonoUsuario').classList.add('inputErrorDeFormulario-activo');

    //    (expresiones.telefono.test(e.target.value)) ? ((iconoTelefono)(document.getElementById('mensajeErrorTelefonoUsuario').classList.remove('inputErrorDeFormulario-activo'))) : ( (mensajeErrorTelefonoValidacion)(document.getElementById('checkNombre2').classList.remove('form-group-correcto-activo')));

     break;
     case "inputPassDeUsuario":
        validarInputDeRegistro(expresiones.password, e.target, 'inputPassDeUsuario');
        // validarPassword2();        
        

        // const iconoPass= document.getElementById('checkNombre3').classList.add('form-group-correcto-activo');
        // const mensajeErrorPassValidacion= document.getElementById('mensajeErrorPassUsuario').classList.add('inputErrorDeFormulario-activo');
        // (expresiones.password.test(e.target.value)) ?((iconoPass)(document.getElementById('mensajeErrorPassUsuario').classList.remove('inputErrorDeFormulario-activo'))) : ( (mensajeErrorPassValidacion)(document.getElementById('checkNombre3').classList.remove('form-group-correcto-activo')));


     break;
     case "inputPass2DeUsuario":
        // validarPassword2();
        claveCorrecta();
        

    break;

    case "terminos":
        const terminos= document.getElementById('terminos');
        

        (terminos.checked = true) ? ((document.getElementById('checked-terminos').classList.add('form-group-correcto-activo'))(document.getElementById('checked-terminos').classList.remove('form-group-correcto'))(camposDelFormulario.terminos=true)):((document.getElementById('mensajeError-checked').classList.add('inputErrorDeFormulario-activo'))(document.getElementById('mensajeError-checked').classList.remove('inputErrorDeFormulario')))
        

    break;

 };

}

const validarInputDeRegistro =(expresiones, input, campo)=>{
    
    const iconoCheck = (document.getElementById(`check-${campo}`)).classList.add('form-group-correcto-activo');
    const mensajeErrorValidacion = (document.getElementById(`mensajeError-${campo}`)).classList.add('inputErrorDeFormulario-activo');
    
    
    ((expresiones.test(input.value)) && input.value !=='') ? (iconoCheck)
     (document.getElementById(`mensajeError-${campo}`).classList.remove('inputErrorDeFormulario-activo'))
     (camposDelFormulario[campo]=true)
     :((mensajeErrorValidacion)(document.getElementById(`check-${campo}`).classList.remove('form-group-correcto-activo'))(camposDelFormulario[campo]=false) );
    


}

// const validarPassword2=()=>{
//     const inputPassword1 = document.getElementById('inputPassDeUsuario');
//     const inputPassword2 = document.getElementById('inputPass2DeUsuario');


//    if (inputPassword1.value == inputPassword2.value && inputPassword2.value !==""){
//     document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario-activo');
//     document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario');
//     document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto-activo');
//     document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto');
//     (camposDelFormulario['inputPassDeUsuario']=true) ;


//    } else {
//     document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario-activo');
//     document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario');
//     document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto-activo');
//     document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto');
//     (camposDelFormulario['inputPassDeUsuario']=false) ;

    
//    }

   function claveCorrecta (){
    const inputPassword1 = document.getElementById('inputPassDeUsuario');
    const inputPassword2 = document.getElementById('inputPass2DeUsuario');
   
    
    if(inputPassword1.value !== inputPassword2.value && inputPassword1.value!==''){
        document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario-activo');
    document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario');
    document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto-activo');
    document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto');
    (camposDelFormulario['inputPassDeUsuario']=false) ;
        
        return false;
    } else {
        document.getElementById('mensajeError-inputPass2DeUsuario').classList.remove('inputErrorDeFormulario-activo');
    document.getElementById('mensajeError-inputPass2DeUsuario').classList.add('inputErrorDeFormulario');
    document.getElementById('check-inputPass2DeUsuario').classList.add('form-group-correcto-activo');
    document.getElementById('check-inputPass2DeUsuario').classList.remove('form-group-correcto');
    (camposDelFormulario['inputPassDeUsuario']=true) ;


        return true;
    }
    }








inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormularioDeRegistro);
    
})

// formulario.addEventListener('click',e=>{
//     e.preventDefault();
    
//         if(camposDelFormulario.nombre && camposDelFormulario.correo && camposDelFormulario.password && camposDelFormulario.telefono && camposDelFormulario.terminos){
            
//             document.getElementById('mensajeError-formulario').classList.remove('inputErrorDeFormulario-activo');
//             document.getElementById('exito-formulario').classList.add('inputExitoDeFormulario-activo');
//             document.getElementById('exito-formulario').classList.remove('inputExitoDeFormulario');
//             formulario.reset();
            
//         } else{    
            
//             document.getElementById('mensajeError-formulario').classList.remove('inputErrorDeFormulario');
//          document.getElementById('mensajeError-formulario').classList.add('inputErrorDeFormulario-activo');};})
        