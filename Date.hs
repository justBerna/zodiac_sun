module Date (
    Month(..),
    createDateRange_, 
    inDateRange,
    convert_,
    deconvert_
)
where
import Numeric.Natural
import Data.Maybe (listToMaybe, isNothing, fromJust, isJust)
import Data.Map (valid)

data Month =
    JAN
    | FEB
    | MAR
    | APR
    | MAY
    | JUN
    | JUL
    | AUG
    | SEP
    | OCT
    | NOV
    | DEC
    deriving (Enum, Show, Eq, Read)

monthMax :: [Natural]
monthMax = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

-- Standard Form 3 Letter Month + Day Ex. FEB 13
-- newtype MonthDate = Date String deriving:l (Show, Eq)

maxDays_ :: Month -> Natural
maxDays_ month = head [snd x | x <- zip [JAN .. DEC] monthMax, month == fst x ]

inDateRange :: [(Month, Natural)] -> (Month, Natural)-> Bool
inDateRange range date = date `elem` range

incrementDate_ ::  String -> (Month, Natural)
incrementDate_  monthDate =
    let (month, day) = fromJust (deconvert_ monthDate)  -- increment date used internally on a function already checked for existance
    in
        if day + 1 < maxDays_ month
            then (month, day + 1)
            else 
                if month /= DEC 
                    then (succ month, 1)
                    else (JAN, 1) 

createDateRange_ :: String -> String -> Maybe [(Month, Natural)]
createDateRange_ beg end =
    if isJust (deconvert_ beg) && isJust (deconvert_ end)
        then
            if beg == end
                then Just [fromJust (deconvert_ end)]
                else Just (fromJust (deconvert_ beg) : fromJust (createDateRange_ (convert_ (incrementDate_ beg)) end))
        else Nothing

convert_ :: (Month, Natural) -> String
convert_ (month, natural) = show month <> " " <> show natural

deconvert_ :: String -> Maybe (Month, Natural)
deconvert_ monthDate =
    let month = month_ monthDate
        day = day_ monthDate
    in
        if isJust month && isJust day
            then Just (fromJust month, fromJust day)
            else Nothing 

month_ :: String -> Maybe Month
month_ date =
   let list = words date
   in
    case list of
        [month, _] ->
            if validMonth month
                then Just (read month)
                else Nothing
        _ -> Nothing

day_ :: String -> Maybe Natural
day_ date =
    let list = words date
    in
        case list of
            [_, day] -> 
                if validDay day
                    then Just (read day)
                    else Nothing
            _ -> Nothing

validDay :: String -> Bool 
validDay str = 
    case str of 
        [] -> False
        x : _ -> all (`elem` ['0'..'9']) str

validMonth :: String -> Bool 
validMonth str = 
    case str of 
        [] -> False 
        x : _ -> all (`elem` ['A'..'Z']) str && read str `elem` [JAN .. DEC]
