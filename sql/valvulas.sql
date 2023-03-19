-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2023 at 01:51 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `valvulas`
--

-- --------------------------------------------------------

--
-- Table structure for table `control`
--

DROP TABLE IF EXISTS `control`;
CREATE TABLE IF NOT EXISTS `control` (
  `idcontrol` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `pozo` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `psi` int NOT NULL,
  PRIMARY KEY (`idcontrol`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `control`
--

INSERT INTO `control` (`idcontrol`, `fecha`, `hora`, `pozo`, `psi`) VALUES
(1, '2023-03-18', '20:58:00', 'Valera 24', 54),
(2, '2023-03-18', '20:58:00', 'Valera 24', 54),
(3, '2023-03-18', '22:09:00', 'Valera 24', 58),
(4, '2023-03-18', '22:12:00', 'Mi negrita 28', 62),
(5, '2023-03-19', '00:17:00', 'Shumager 15', 67),
(6, '2023-03-19', '01:18:00', 'Valera 24', 54);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
