const {expect} = require('chai')
const {ethers} = require('hardhat')

describe('CrudInt Contract', function () {
    let testCrud; 
    before(async function () { 
        const TestCrud = await ethers.getContractFactory('CrudInt'); 
        testCrud = await TestCrud.deploy(); 
        await testCrud.deployed();
    });

    it('should return true if the first number is greater than the second', async function () { 
        const result = await testCrud.isGreaterThan(10, 5); 
        console.log('Result:', result); 
        expect(result).to.be.true; 
    });
/*
    beforeEach(async function () {
        // Deploy contract before each test
        ;[deployer, owner] = await ethers.getSigners()

        // const [w_0, w_1, w_2, w_3, w_4, w_5, w_6, w_7, w_8, w_9] = await ethers.getSigners()
        // const CrudInt = await ethers.getContractFactory('CrudInt', deployer)
        const metadata = JSON.parse(
            await remix.call(
                'fileManager',
                'getFile',
                'class_2/contracts/artifacts/CrudInt.json'
            )
        )
        const Foo = new ethers.ContractFactory(
            metadata.abi,
            metadata.data.bytecode.object,
            deployer
        )

        crud = await Foo.deploy()
        await crud.deployed()
    })

    it('should successfully create', async function () {
        // console.log(owner.address)
        // console.log(deployer.address)
        const Ctx = crud.connect(owner)

        const createItem = await Ctx.Create(5)
        const receipt = await createItem.wait()
        // console.log(createItem)
        console.log(receipt)

    })
*/
})
