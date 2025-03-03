module Date (
    Month(..),
    createDateRange_, 
    inDateRange,
    convert_,
    deconvert_
)
where
import Numeric.Natural
import Data.Maybe (listToMaybe)


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
    let (month, day) = deconvert_ monthDate
    in
        if day + 1 < maxDays_ month
            then (month, day + 1)
            else 
                if month /= DEC 
                    then (succ month, 1)
                    else (JAN, 1) 

createDateRange_ :: String -> String -> [(Month, Natural)]
createDateRange_ beg end =
    if beg == end
        then [deconvert_ end]
        else deconvert_ beg : createDateRange_ (convert_ (incrementDate_ beg)) end

convert_ :: (Month, Natural) -> String
convert_ (month, natural) = show month <> " " <> show natural

deconvert_ :: String -> (Month, Natural)
deconvert_ monthDate =
    (month_ monthDate, day_ monthDate)

month_ :: String -> Month
month_ date =
   let list = words date
   in
    case list of
        [month, _] -> read month
        _ -> JAN

day_ :: String -> Natural
day_ date =
    let list = words date
    in
        case list of
            [month, day] -> read day
            _ -> 0