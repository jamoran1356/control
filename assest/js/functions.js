/**
 * Script: Agregar participantes para evento
 * Description: Este script ha sido desarrollado para registrar a participantes de un evento. Id Workana-03032023-15
 * Version: 1.0
 * Author: Jesus Moran
 * Author URI: https://www.pydti.com
 */

$(document).ready(function() {
  
  $('#btnreporte').on('click',function(e){
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const pozo = document.getElementById('pozo').value;
    const psi = document.getElementById('psi').value;

    params = {
     'fecha': fecha,
     'hora': hora,
     'pozo': pozo,
     'psi': psi
    };
    
    
    $.ajax({
     type: 'post',
     url: 'controllers/pozos.php?op=reporte',
     data: params,
     dataType: 'json',
     success: function(response){
         if(response.msg){
             switch(response.msg){
                 case 'REGISTRO_REALIZADO':
                     $('#fecha').val('');
                     $('#hora').val('');
                     $('#pozo').val('');
                     $('#psi').val('');
                     swal({
                         title: "Registro Exitoso",
                         text: "Se ha registrado el registro de forma exitosa",
                         icon: "success",
                         button: "ok",
                       }); 
                       if (document.querySelector("#tblResultados")) {
                        document.querySelector("#tblResultados").innerHTML = "";
                        registros();
                      }
                      
                 break;
             }
         }
     }
    });
});   



function generarGrafico(data) {
  
  var ctx = document.querySelector('#grafico').getContext('2d');
  const labels = data.map(d => d.fecha); // etiquetas para el eje x
  const valores = data.map(d => d.psi); // valores para el eje y

  // Configuración del gráfico
  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'PSI',
        data: valores,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  // Creación del gráfico
  const grafico = new Chart(ctx, config);
}


  //datepicker
$('#fecha').datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true
    }).on('changeDate', function(e){
      $(this).val(e.format('yyyy-mm-dd'));
}); 

async function registros() {
  try {
    const response = await $.ajax({
      type: 'post',
      url: 'controllers/pozos.php?op=listaReporte',
      dataType: 'json',
    });

    if (response.msg) {

      const items = response.msg; // cambia la variable a items

      for (let i = 0; i < items.length; i++) { // itera a través del array de objetos
        const item = items[i]; // accede a cada objeto individualmente

        const newtr = document.createElement("tr");
        newtr.id = "row_" + item.idcontrol;
        newtr.innerHTML = `
            <td>${item.idcontrol}</td>
            <td>${item.fecha}</td>
            <td>${item.hora}</td>
            <td>${item.pozo}</td>
            <td>${item.psi}</td>
            </tr>
        `;
        document.querySelector("#tblResultados").appendChild(newtr);
      }
      generarGrafico(items);
    }
  } catch (error) {
    console.log("Ocurrio un error:" + error);
  }
  

}

if (document.querySelector("#tblResultados")) {
  registros();
}


});



  





    

   
   
   
    