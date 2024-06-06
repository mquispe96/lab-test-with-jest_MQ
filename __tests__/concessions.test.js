const {getConcessionByID, calculateTotalFromIDs} = require('../src/concessions')
const concessions = require('../data/concessions')

describe("getConcessionByID()", () => {
    it('Should find and return an object that matches the ID', () => {
        const id = "KzWBehRAD"
        const trial = getConcessionByID(concessions, id)
        const expected = concessions.find(concession => concession.id === id)
        expect(trial).toEqual(expected)
    })
    it('Should return null', () => {
        const id = "xxx"
        const trial = getConcessionByID(concessions, id)
        const expected = null
        expect(trial).toEqual(expected)
    })
})

describe("calculateTotalFromIDs()", () => {
    it('Should return sum from matching IDs', () => {
        const ids = ["g9sZdG1hI", "KzWBehRAD", "rNVCeVsri"]
        const trial = calculateTotalFromIDs(concessions, ids)
        const expected = ids.reduce((sum, id) => {
            const concessionTotal = concessions.find(concession => concession.id === id).priceInCents
            sum += concessionTotal
            return sum
        }, 0)
        expect(trial).toEqual(expected)
    })
    it('Should return 0', () => {
        const ids = ["xxx", "yyy", "zzz"]
        const trial = calculateTotalFromIDs(concessions, ids)
        const expected = 0
        expect(trial).toEqual(expected)
    })
})