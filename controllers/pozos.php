<?php

require_once '../models/pozos.php';

if(empty($_REQUEST['op'])){
    echo "error en la solicitud";
} else {
    $option = $_REQUEST['op'];

    if ($option == "reporte") {
        if ($_POST) {
            // Recibir los datos del formulario
            $fecha = trim($_POST['fecha']);
            $hora = trim($_POST['hora']);
            $pozo = trim($_POST['pozo']);
            $psi = trim($_POST['psi']);

            $rep = new Pozo();
            $respuesta = $rep ->agregarReporte($fecha, $hora, $pozo, $psi);
            
            if($respuesta>0){
                $arrResp = array('status'=> true, 'msg'=>"REGISTRO_REALIZADO"); 
                echo json_encode($arrResp);                
            }
            
        }
        
    }
    
    if($option=="listaReporte"){
        $pzo = new Pozo();
        $resultado = $pzo->verReportes();
        if (!empty($resultado)){
            $arrResp = array('status'=> true, 'msg'=> $resultado); 
            echo json_encode($arrResp);    
        }
        
    }

}     

?>




