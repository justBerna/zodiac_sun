module Zodiac where 

newtype Date = Date String

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
    deriving (Enum, Show)

dateRange_ :: Zodiac -> (Date, Date)
dateRange_ zodiac =
    case zodiac of 
        Capricorn -> (Date "", Date "")
        Aquarius -> (Date "", Date "")
        Pisces -> (Date "", Date "")
        Aries -> (Date "", Date "")
        Taurus -> (Date "", Date "")
        Gemini -> (Date "", Date "")
        Cancer -> (Date "", Date "")
        Leo -> (Date "", Date "")
        Virgo -> (Date "", Date "")
        Libra -> (Date "", Date "")
        Scorpio -> (Date "", Date "")
        Sagittarius -> (Date "", Date "")

