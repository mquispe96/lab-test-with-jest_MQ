const {getTicketByName, calculateTotalFromTicketNames} = require('../src/tickets')
const tickets = require('../data/tickets')

describe('getTicketsByName()', () => {
    it('Should find and return an object that matches the name', () => {
        const name = "Child Matinee"
        const trial = getTicketByName(tickets, name)
        const expected = tickets.find(ticket => ticket.name.toLowerCase() === name.toLowerCase())
        expect(trial).toEqual(expected)
    })
    it('Should return null', () => {
        const name = "Test"
        const trial = getTicketByName(tickets, name)
        const expected = null
        expect(trial).toEqual(expected)
    })
})

describe('calculateTotalFromTicketNames()', () => {
    it('Should return sum from matching names', () => {
        const names = ["Adult Matinee", "Child Matinee", "Senior Regular"]
        const trial = calculateTotalFromTicketNames(tickets, names)
        const expected = names.reduce((sum, name) => {
            const ticketsTotal = tickets.find(ticket => ticket.name.toLowerCase() === name.toLowerCase()).priceInCents
            sum += ticketsTotal
            return sum
        }, 0)
        expect(trial).toEqual(expected)
    })
    it('Should return 0', () => {
        const names = ["xxx", "yyy", "zzz"]
        const trial = calculateTotalFromTicketNames(tickets, names)
        const expected = 0
        expect(trial).toEqual(expected)
    })
})