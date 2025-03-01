import Zodiac 
import Date

newtype Date = Date String


findZodiac :: String -> Zodiac
findZodiac date = Aquarius

main :: IO ()
main = 
    do 
        putStrLn "Welcome to Zodiac Sun! \nEnter your date of birth to discover your Zodiac Sun Sign!"
        input <- getLine
        putStrLn ( "Looks like you're an " <> show (findZodiac input) <> "!")

