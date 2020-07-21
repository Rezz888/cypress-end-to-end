import { sum, squire } from "../../src/util";

describe('testing math util function', () => {
    it('sum returns correct value', () => {
       expect(sum(1,2)).to.equal(3)
    })

    it('squire returns correct value ', ()=> {
       expect(squire(3)).to.equal(9)
    })
})