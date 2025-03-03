import Zodiac 
import Date
import Data.Maybe

printZodiacInfo :: Maybe Zodiac -> IO ()
printZodiacInfo zodiac = 
    if isJust zodiac 
        then putStrLn (getZodiacInfo (fromJust zodiac))
        else putStrLn "Looks like we couldn't find your zodiac. Sorry!"


main :: IO ()
main = 
    putStrLn "Welcome to Zodiac Sun!" *>
    putStrLn "Enter your birthday below to find and learn about your sun sign!" *>
    putStr ">>>> " *>
    getLine >>= \birthday -> printZodiacInfo (findZodiac birthday)