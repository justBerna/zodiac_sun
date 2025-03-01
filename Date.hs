module Date where
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
    deriving (Enum, Show, Eq)

monthMax :: [Natural]
monthMax = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

-- Standard Form 3 Letter Month + Day Ex. FEB 13
newtype MonthDate = Date String

maxDays_ :: String -> Maybe Natural
maxDays_ month = listToMaybe [snd x | x <- zip [JAN .. DEC] monthMax, month == show (fst x) ]

inDateRange :: MonthDate -> MonthDate -> MonthDate -> Bool
inDateRange beg end date = True