

export const enumRentConverter = (index : number) => {
    switch (index) {
        case 0:
            return "Wypożyczona"
        case 1:
            return "W trakcie wypożyczenia"   
        case 2 :
            return "Wolna"   
        default:
            return "Wolna" ;
    }
    
}

export const enumSaleConverter = (index : number) => {
    switch (index) {
        case 0:
            return "Do zamówienia !"
        case 1:
            return "Zamówiona"   
        case 2:
            return "Dostarczona"    
        case 3 :
            return "Odebrana"   
        default:
            return "Do zamówienia !" ;
    }
    
}
export const enumClosingSaleConverter = (index : number) => {
    switch (index) {
        case 0:
            return "Zarezerwowana"
        case 1:
            return "Sprzedana"   
        default:
            return "Zarezerwowana" ;
    }
    
}
