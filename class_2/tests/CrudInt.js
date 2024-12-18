const {expect} = require('chai')
const {ethers} = require('hardhat')

describe('CrudInt Contract', function () {
    let crud
    before(async function () {
        const CrudF = await ethers.getContractFactory('CrudInt')
        crud = await CrudF.deploy()
    })

    it('should return true', async function () {
        await crud.deployed()
        const result = await crud.Create(5)
        console.log('Result:', result.data)
        const wait = await result.wait()
        // console.log('Result:', JSON.stringify(result));
        //console.log('Result:', result)
        // console.log('Result:', web3.utils.hexToNumber(result.data))
        //console.log('wait:', wait.logs)
        // console.log('Result:', crud.events);
        // console.log('Result:', result.events);
        console.log('Result:', wait.events);
        // expect(result.data).to.be.true;

        expect(result).to.be.not.undefined
        expect(result).to.be.not.null
        expect(result).to.be.not.NaN
        // expect(result.data).to.equal(5)
    })
})
