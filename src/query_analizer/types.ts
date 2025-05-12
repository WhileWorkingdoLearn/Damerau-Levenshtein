

type Empty = "Empty"
type Undef = "U"

type CountryCode = string
type CityToken = string
type StreetToken = string

type Query = {
    cCode : CountryCode |Empty,
    City : CityToken |Undef,
    Street: StreetToken | Undef,
    HouseNr: Number | Empty,
    Postal : Number | Empty
} 


// "DE Fantasiestr. 2 14167 Berlin"
// "DE Fantasiestr. 12 12167 Berlin"
// "DE Fantasiestr. 12 12167 Berlin"
