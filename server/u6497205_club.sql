-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Май 28 2022 г., 12:27
-- Версия сервера: 5.7.27-30
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u6497205_club`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Books`
--

CREATE TABLE `Books` (
  `ID_Book` int(2) UNSIGNED NOT NULL,
  `Name_Book` text NOT NULL,
  `Genre` text CHARACTER SET utf8 NOT NULL,
  `Author` text NOT NULL,
  `Book_Mass` float NOT NULL,
  `Book_Cost` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `Books`
--

INSERT INTO `Books` (`ID_Book`, `Name_Book`, `Genre`, `Author`, `Book_Mass`, `Book_Cost`) VALUES
(1, 'Руслан и Людмила', 'Поэма', 'Пушкин, Александр Сергеевич', 0.4, 250),
(2, 'Сказка о попе и его работнике Балде', 'Сказка', 'Пушкин, Александр Сергеевич', 0.25, 200),
(3, 'Сказка о царе Салтане, о сыне его могучем Гвидоне Салтановиче и о прекрасной царевне Лебеди', 'Сказка', 'Пушкин, Александр Сергеевич', 0.25, 200),
(4, 'Сказка о рыбаке и рыбке', 'Сказка', 'Пушкин, Александр Сергеевич', 0.25, 200),
(5, 'Сказка о мёртвой царевне и о семи богатырях', 'Сказка', 'Пушкин, Александр Сергеевич', 0.25, 200),
(6, 'Сказка о золотом петушке', 'Сказка', 'Пушкин, Александр Сергеевич', 0.25, 200),
(7, 'Евгений Онегин', 'Роман в стихах', 'Пушкин, Александр Сергеевич', 0.7, 550),
(8, 'Капитанская дочка', 'Повесть', 'Пушкин, Александр Сергеевич', 0.7, 350),
(9, 'Маленькие трагедии', 'Цикл пьес', 'Пушкин, Александр Сергеевич', 0.5, 250),
(10, 'Повести Белкина', 'Цикл повестей', 'Пушкин, Александр Сергеевич', 0.6, 400),
(11, 'Как сесть на шпагат за 1 час', 'Тренинги', 'Анна Егорова', 0.25, 1000),
(12, 'Как я победила JavaScript', 'Фантастика', 'Елизавета Хвошнянская', 0.35, 1000),
(13, 'Will hold you like a Python', 'Ужасы', 'Дарья Сосова', 0.3, 1000),
(14, 'Women Learning: ожидания и реальность', 'Научная литература', 'Калягин, Максим Юрьевич', 0.25, 1000);

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `id_client` int(3) NOT NULL,
  `surname` text NOT NULL,
  `phone_number` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`id_client`, `surname`, `phone_number`) VALUES
(1, 'Хвошнянская Елизавета Аркадьевна', '89456441536'),
(2, 'Сосова Дарья Дмитриевна', '84563215263'),
(3, 'Егорова Анна Владимировна', '81236547458'),
(4, 'Калягин Максим Юрьевич', '89632584174');

-- --------------------------------------------------------

--
-- Структура таблицы `flight_history`
--

CREATE TABLE `flight_history` (
  `id_order` int(3) NOT NULL,
  `id_postamat` int(3) NOT NULL,
  `id_client` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `flight_history`
--

INSERT INTO `flight_history` (`id_order`, `id_postamat`, `id_client`) VALUES
(1, 2, 1),
(2, 2, 1),
(3, 2, 1),
(4, 2, 1),
(5, 2, 1),
(6, 2, 1),
(7, 2, 1),
(8, 2, 1),
(9, 2, 1),
(10, 2, 1),
(11, 2, 1),
(12, 2, 1),
(13, 2, 1),
(14, 2, 1),
(15, 2, 1),
(16, 2, 1),
(17, 2, 1),
(18, 2, 1),
(19, 2, 1),
(20, 2, 1),
(21, 2, 1),
(22, 2, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `postamat`
--

CREATE TABLE `postamat` (
  `id_postamat` int(2) UNSIGNED NOT NULL,
  `name_postamat` text NOT NULL,
  `address_postamat` text NOT NULL,
  `latitude` decimal(8,6) NOT NULL,
  `longitude` decimal(8,6) NOT NULL,
  `path_length` decimal(8,6) NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `postamat`
--

INSERT INTO `postamat` (`id_postamat`, `name_postamat`, `address_postamat`, `latitude`, `longitude`, `path_length`, `status`) VALUES
(1, 'Постамат 1', 'улица Додогорского, 37А, село Ярополец, Волоколамский городской округ, Московская область, Россия', '56.128625', '35.834102', '0.955090', 'Свободен'),
(2, 'Постамат 2', 'Пушкинская улица, 23, село Ярополец, Волоколамский городской округ, Московская область, Россия, 143632', '56.135325', '35.830499', '0.901523', 'Свободен'),
(3, 'Постамат 3', 'Советская улица, 4А, село Ярополец, Волоколамский городской округ, Московская область, Россия, 143632', '56.128423', '35.820646', '0.403670', 'Свободен'),
(4, 'Постамат 4', 'Школьная улица, 1, посёлок Чисмена, Волоколамский городской округ, Московская область, Россия', '56.011474', '36.220441', '28.194930', 'Свободен');

-- --------------------------------------------------------

--
-- Структура таблицы `test_table`
--

CREATE TABLE `test_table` (
  `id` int(11) NOT NULL,
  `name_user` varchar(50) DEFAULT NULL,
  `surname_user` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `test_table`
--

INSERT INTO `test_table` (`id`, `name_user`, `surname_user`) VALUES
(1, 'Ваня', 'Ванин'),
(3, 'даша', 'дашина'),
(4, 'маша', 'мишина');

-- --------------------------------------------------------

--
-- Структура таблицы `UAV`
--

CREATE TABLE `UAV` (
  `ID_UAV` int(2) UNSIGNED NOT NULL,
  `UAV_Cost` float NOT NULL,
  `Mass` float NOT NULL,
  `UAV_Resource` float NOT NULL,
  `Distance` float NOT NULL,
  `Vertical_Speed` float NOT NULL,
  `Horizontal_Speed` float NOT NULL,
  `Time` float NOT NULL,
  `Capacity` float NOT NULL,
  `Wind_Speed` float NOT NULL,
  `El_Capacity` float NOT NULL,
  `Voltage` float NOT NULL,
  `En_Capacity` float NOT NULL,
  `Battery_Mass` float NOT NULL,
  `Battery_Amount` float NOT NULL,
  `Sum_Battery_Mass` float NOT NULL,
  `Discharge_Current` float NOT NULL,
  `Battery_Cost` float NOT NULL,
  `Discharge_Cicles` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `UAV`
--

INSERT INTO `UAV` (`ID_UAV`, `UAV_Cost`, `Mass`, `UAV_Resource`, `Distance`, `Vertical_Speed`, `Horizontal_Speed`, `Time`, `Capacity`, `Wind_Speed`, `El_Capacity`, `Voltage`, `En_Capacity`, `Battery_Mass`, `Battery_Amount`, `Sum_Battery_Mass`, `Discharge_Current`, `Battery_Cost`, `Discharge_Cicles`) VALUES
(1, 1565890, 9, 3000, 16.5, 5, 17, 55, 2.7, 15, 5935, 52.8, 274, 1.35, 2, 2.7, 12, 150590, 200),
(2, 1984000, 13.3, 3000, 40, 5, 18, 60, 2, 5, 4400, 28.8, 125.8, 1.85, 2, 3.7, 15, 21022, 200);

-- --------------------------------------------------------

--
-- Структура таблицы `zak_cl`
--

CREATE TABLE `zak_cl` (
  `id_order` int(3) NOT NULL,
  `id_book` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `zak_cl`
--

INSERT INTO `zak_cl` (`id_order`, `id_book`) VALUES
(1, 14),
(1, 12),
(2, 14),
(2, 12),
(3, 14),
(3, 12),
(4, 14),
(4, 12),
(5, 14),
(5, 12),
(6, 14),
(6, 12),
(7, 14),
(7, 12),
(8, 14),
(8, 12),
(9, 14),
(9, 12),
(10, 14),
(10, 12),
(11, 14),
(11, 12),
(12, 14),
(12, 12),
(13, 14),
(13, 12),
(14, 14),
(14, 12),
(15, 14),
(15, 12),
(16, 3),
(17, 1),
(17, 9),
(17, 8),
(18, 1),
(18, 9),
(19, 1),
(19, 9),
(20, 1),
(20, 9),
(21, 1),
(21, 9),
(22, 9);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Books`
--
ALTER TABLE `Books`
  ADD PRIMARY KEY (`ID_Book`);

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Индексы таблицы `flight_history`
--
ALTER TABLE `flight_history`
  ADD PRIMARY KEY (`id_order`);

--
-- Индексы таблицы `postamat`
--
ALTER TABLE `postamat`
  ADD PRIMARY KEY (`id_postamat`);

--
-- Индексы таблицы `test_table`
--
ALTER TABLE `test_table`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `UAV`
--
ALTER TABLE `UAV`
  ADD PRIMARY KEY (`ID_UAV`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `flight_history`
--
ALTER TABLE `flight_history`
  MODIFY `id_order` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `test_table`
--
ALTER TABLE `test_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
