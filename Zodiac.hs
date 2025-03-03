module Zodiac
(
    findZodiac,

)
where

import Date
import Data.Maybe (maybeToList, listToMaybe)
import GHC.Natural (Natural)

data Zodiac =
    Capricorn
    | Aquarius
    | Pisces
    | Aries
    | Taurus
    | Gemini
    | Cancer
    | Leo
    | Virgo
    | Libra
    | Scorpio
    | Sagittarius
    deriving (Enum, Show, Eq)

elements :: [String]
elements = ["Earth", "Air", "Water", "Fire"]

dateRanges :: [(String, String)]
dateRanges = [
    ("DEC 22",  "JAN 19"),
    ( "JAN 20", "FEB 18"),
    ( "FEB 19",  "MAR 20"),
    ( "MAR 21",  "APR 19"),
    ( "APR 20",  "MAY 20"),
    ( "MAY 21",  "JUN 20"),
    ( "JUN 21",  "JUL 21"),
    ( "JUL 23",  "AUG 22"),
    ( "AUG 23",  "SEP 22"),
    ( "SEP 23",  "OCT 22"),
    ( "OCT 23",  "NOV 21"),
    ( "NOV 22",  "DEC 21")]

symbols :: [String]
symbols = [
    "Goat",
    "Water Bearer",
    "Fish",
    "Ram",
    "Bull",
    "Twins",
    "Crab",
    "Lion",
    "Virgin",
    "Balance",
    "Scorpion",
    "Archer"]

getZodiacDates :: [(Zodiac, [(Month, Natural)])]
getZodiacDates = zip [Capricorn .. Sagittarius]
    [ uncurry createDateRange_ x | x <- dateRanges ]


findZodiac :: String -> Maybe Zodiac
findZodiac date = listToMaybe
   [ fst allDates |
       allDates <- getZodiacDates ,
       inDateRange (snd allDates) (deconvert_ date)
     ]
