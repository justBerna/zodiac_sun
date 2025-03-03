import Zodiac 
import Date
import Data.Maybe


main :: IO ()
main = 
    putStrLn "Welcome to Zodiac Sun!" *>
    putStrLn "Enter your birthday below to learn about your sun sign!" *>
    getLine >>= \birthday -> putStrLn ("Looks like you're a " <> show (fromJust (findZodiac birthday)))