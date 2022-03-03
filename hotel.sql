-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Aug 26, 2021 at 06:32 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

DROP TABLE IF EXISTS `contact_us`;
CREATE TABLE IF NOT EXISTS `contact_us` (
  `Cus_ID` int(5) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Contact` int(10) NOT NULL,
  `Residence` varchar(20) NOT NULL,
  `Comments` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Cus_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
CREATE TABLE IF NOT EXISTS `guest` (
  `Guest_ID` int(3) NOT NULL AUTO_INCREMENT,
  `Fname` varchar(15) NOT NULL,
  `Lname` varchar(15) NOT NULL,
  `Title` varchar(5) NOT NULL,
  `Email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Contact` int(10) NOT NULL,
  PRIMARY KEY (`Guest_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guest_room`
--

DROP TABLE IF EXISTS `guest_room`;
CREATE TABLE IF NOT EXISTS `guest_room` (
  `Guest_ID` int(3) NOT NULL,
  `Room_ID` varchar(5) NOT NULL,
  `Check_in` varchar(10) NOT NULL,
  `Check_out` varchar(10) NOT NULL,
  `Adult` int(2) NOT NULL,
  `Children` int(2) NOT NULL,
  `Price` int(10) NOT NULL,
  `Request` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Guest_ID`,`Room_ID`),
  KEY `Guest_ID` (`Guest_ID`,`Room_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
CREATE TABLE IF NOT EXISTS `room` (
  `Room_ID` varchar(5) NOT NULL,
  `RoomName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`Room_ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`Room_ID`, `RoomName`, `Price`) VALUES
('SSR1', 'Single-Silver', '8000.00'),
('SGR1', 'Single-Gold', '10000.00'),
('SPR1', 'Single-Platinum', '14000.00'),
('SSR2', 'Single-Gold', '9000.00'),
('SGR2', 'Single-Silver', '11000.00'),
('SPR2', 'Single-Platinum', '14000.00'),
('SSR3', 'Single-Silver', '10000.00'),
('SGR3', 'Single-Gold', '12000.00'),
('SPR3', 'Single-Platinum', '15000.00'),
('DGR3', 'Double-Gold', '14000.00'),
('DSR3', 'Double-Silver', '12000.00'),
('DPR2', 'Double-Platinum', '15000.00'),
('DGR2', 'Double-Gold', '13000.00'),
('DSR2', 'Double-Silver', '11000.00'),
('DPR1', 'Double-Platinum', '14000.00'),
('DGR1', 'Double-Gold', '12000.00'),
('DSR1', 'Double-Silver', '10000.00'),
('DPR3', 'Double-Platinum', '16000.00'),
('LMR1', 'Luxury-Modern', '23000.00'),
('LOR1', 'Luxury-Oceanic', '23000.00'),
('LTR1', 'Luxury-Tropical', '25000.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
