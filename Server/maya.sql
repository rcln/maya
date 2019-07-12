-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 12 juil. 2019 à 09:16
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `maya`
--

-- --------------------------------------------------------

--
-- Structure de la table `corpus`
--

DROP TABLE IF EXISTS `corpus`;
CREATE TABLE IF NOT EXISTS `corpus` (
  `Id_corpus` int(255) NOT NULL AUTO_INCREMENT,
  `Name_corpus` varchar(25) NOT NULL,
  `Language1` varchar(25) NOT NULL,
  `Language2` varchar(25) NOT NULL,
  `Type_corpus` enum('simple','double') NOT NULL,
  `Corpus_status` enum('non_traité','en_cours','validé','') NOT NULL,
  `Num_user` int(11) NOT NULL,
  PRIMARY KEY (`Id_corpus`),
  KEY `Num_user` (`Num_user`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `corpus`
--

INSERT INTO `corpus` (`Id_corpus`, `Name_corpus`, `Language1`, `Language2`, `Type_corpus`, `Corpus_status`, `Num_user`) VALUES
(1, 'espagnole', '', '', 'double', 'non_traité', 3),
(7, 'corpus-esp-maya', 'maya', 'espagnol', 'double', 'non_traité', 17),
(8, 'corpus-esp-maya', 'maya', 'espagnol', 'double', 'non_traité', 6),
(9, 'corpus-esp-maya', 'maya', 'espagnol', 'double', 'non_traité', 6),
(10, 'corpus-esp-maya', 'maya', 'espagnol', 'double', 'non_traité', 6),
(11, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 25),
(12, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 25),
(13, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 25),
(14, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(15, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(16, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(17, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(18, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(19, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(20, 'routeCorpus', 'maya', 'espagnol', 'double', 'non_traité', 3),
(21, 'test', 'maya', 'espagnol', 'double', 'non_traité', 3);

-- --------------------------------------------------------

--
-- Structure de la table `line`
--

DROP TABLE IF EXISTS `line`;
CREATE TABLE IF NOT EXISTS `line` (
  `Id_line` int(255) NOT NULL AUTO_INCREMENT,
  `Content_line_lang1` text NOT NULL,
  `Content_line_lang2` text NOT NULL,
  `Line_status` enum('non_traité','en_cours','validé','') NOT NULL,
  `Num_corpus` int(30) NOT NULL,
  PRIMARY KEY (`Id_line`),
  KEY `Num_corpus` (`Num_corpus`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `line`
--

INSERT INTO `line` (`Id_line`, `Content_line_lang1`, `Content_line_lang2`, `Line_status`, `Num_corpus`) VALUES
(1, 'Node js is providing an event-driven I/O model that makes node js application lightweight and', 'Node js is providing an event-driven I/O model that makes node js application lightweight and', 'non_traité', 7),
(2, 'MySQL estmevnvdh d', 'Il est sous', 'non_traité', 7),
(3, 'MySQL esthhhhhhhhhhhhhhhhhhhhhh', 'Il est sous', 'non_traité', 7),
(5, 'MySQL esthhhhhhhhhhhhhhhhhhhhhh', 'Il est sous', 'non_traité', 7),
(6, '2 i\'m trying to update my line', 'already it doesn\'t work', 'non_traité', 9),
(7, 'On peut insérer une ou plusieurs lignes dans une table en utilisant une sous-requête de type SELECT. Dans ce cas les colonnes retournées par l\'ordre SELECT doivent avoir les contraintes suivante', 'Être en nombre identique aux colonnes précisées dans la liste ou en l\'absence de précision de cette liste, le même nombre de colonnes que la table', 'non_traité', 7);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Id_user` int(255) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(25) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`Id_user`, `lastname`, `firstname`, `email`, `password`) VALUES
(3, 'bla', 'gdt', 'g@gh.com', 'e42b6a526799dab090308243a870bda25442a13b'),
(4, 'GHOURABI', 'Nouha', 'nouha@gmail.com', 'fa7c9d766009d59a93d48cabb904f7072209204da9e4652deb'),
(5, 'GHOURABI', 'Nouha', 'nouha@gmail.com', 'c0b2e284ffc943a1d8f4956203c98e00299d3d492d84aae22d'),
(6, 'labiodh', 'maroi', 'hd@h.com', '5c497476e03e9200f8b99bf463c66e93730c494417'),
(7, 'ourtirane', 'cylia', 'ourt@gmail.com', '727bb72b32919ed0c7cec757276ca637af593243724f'),
(8, 'ourtirane', 'cylia', 'ourt@gmail.com', '35d3cdad505f8fa12a24a70430c8b5a3f23bf81b0b0f'),
(9, 'ourtirane', 'cylia', 'ourt@gmail.com', '9a9663b6c2f5b09f9d2156d62788c6257585b43ebd9e'),
(10, 'ourtirane', 'cylia', 'ourt@gmail.com', 'b57e15f69e13b07c853beae63e10c2b9ea12607ea877'),
(11, 'ourtirane', 'cylia', 'ourt@gmail.com', 'b1920226270154e4441039479d0256b36a70b8d3d5f2'),
(16, 'flores', 'garcias', 'garcias@gmail.com', '538ddb55b53fc6d8540107a7bcdf71f0f76e182362fde34196'),
(17, 'KADDOUH', 'Heba', 'kaddouh@hotmail.com', '0d93c9d2dd9b5bc0d6719f6b5894d5a934445caf22285927'),
(18, 'honey', 'black', 'black@gmail.com', '79e6ec99e8a60d3ead0544faaae4bc18f30172b5'),
(19, 'honey', 'black', 'black@gmail.com', '9af6e4dcf1d9fc6116c39dc027e604befd1731c5'),
(20, 'honey', 'black', 'black@gmail.com', '3d18dd28d4902c42f4e702b444592b6865fee83f'),
(21, 'marwa', 'labiodh', 'g@gmai.com', 'ttt'),
(22, 'karine', 'blue', 'k@gmai.com', 'pasw'),
(23, 'wawa', 'lala', 'lala@g.com', 'f3f1c529aa5129b2d89705f8752d34c86f4ee867741185'),
(24, 'wawa', 'lala', 'lala@g.com', '6682f570f909807c454dc5f25e38269c65e7b96496b253'),
(25, 'cherifa', 'labiodh', 'labiodh@hotmail.com', '28d49df9f302f6b92f3b5a1d99a2ae9a4e04823e4437fbf2'),
(26, 'cherifa', 'labiodh', 'labiodh@hotmail.com', '34730b6e06fab52cd6510c9f7d4ccfe3d30e4978af0ebdd8'),
(27, 'esma', 'labiodh', 'labiodh@yahoo.fr', '9bc7aa8c01f87d29c9056f30f6dafc2438bf690f7ac9f1ec'),
(28, 'esma', 'labiodh', 'labiodh@yahoo.fr', '08401cb05b1b1e987e3f3497f8b45968fd66393e0b920169'),
(29, 'esma', 'labiodh', 'labiodh@gmail.com', '2828b0d1da850b79eed6fd9cf9c91de96b2de00e47af3082'),
(30, '', 'labiodh', 'labiodh@gmail.com', 'b77e5ff65b1d7bcf9142272e8fb5bc4c02284ebad7d76bc5'),
(31, '', 'labiodh', '', '9b8149c45bf74dd07269fc584e225953'),
(32, '', 'labiodh', 'labiodh@gmail.com', '3d70fed191fc0764abc184e22e842c4ef2c9b9c795bcd99e');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `corpus`
--
ALTER TABLE `corpus`
  ADD CONSTRAINT `corpus_ibfk_1` FOREIGN KEY (`Num_user`) REFERENCES `user` (`Id_user`);

--
-- Contraintes pour la table `line`
--
ALTER TABLE `line`
  ADD CONSTRAINT `Num_corpus` FOREIGN KEY (`Num_corpus`) REFERENCES `corpus` (`Id_corpus`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
