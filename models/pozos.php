<?php

require_once 'connect.php';

class Pozo {
    private $conexion;

    public function __construct() {
        $this->conexion = new ConexionBDD();
        $this->conexion = $this->conexion->connect();
    }
    
    
    public function agregarReporte($fecha, $hora, $pozo, $psi){
        $sql = "INSERT INTO control (fecha, hora, pozo, psi) VALUES (?,?,?,?)";
        $insert = $this->conexion ->prepare($sql);
        $Data = array($fecha, $hora, $pozo, $psi);
        $exInsert = $insert->execute($Data);
        $lastInsertId = $this->conexion->lastInsertId();
        return $lastInsertId;
    }

       
    public function verReportes() {
        $sql = "SELECT * FROM control ORDER BY idcontrol DESC";
        $stmt = $this->conexion->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        return $result;
    }
  
}

?>