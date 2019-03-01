let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// seatParty partyize + guescount
// removeParty partysize - guestcount


restaurant.seatParty(5)
console.log(restaurant.checkAvailability(75))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(5))
