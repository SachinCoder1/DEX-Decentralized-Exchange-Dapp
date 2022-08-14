const {ethers} = require('hardhat')


const main = async () => {
    const dogeFactory = await ethers.getContractFactory('Doge')
    const dogeContract = await dogeFactory.deploy()
    await dogeContract.deployed()
    console.log('Dogecoin deployed to:', dogeContract.address)
  
    const bitcoinFactory = await ethers.getContractFactory('Bitcoin')
    const bitcoinContract = await bitcoinFactory.deploy()
    await bitcoinContract.deployed()
    console.log('bitcoin contract deployed to:', bitcoinContract.address)
  
    const linkFactory = await ethers.getContractFactory('Link')
    const linkContract = await linkFactory.deploy()
    await linkContract.deployed()
    console.log('LinkToken deployed to:', linkContract.address)
  
    const daiFactory = await ethers.getContractFactory('Dai')
    const daiContract = await daiFactory.deploy()
    await daiContract.deployed()
    console.log('DaiToken deployed to:', daiContract.address)
  
    const usdcFactory = await ethers.getContractFactory('Usdc')
    const usdcContract = await usdcFactory.deploy()
    await usdcContract.deployed()
    console.log('UsdcToken deployed to:', usdcContract.address)
  
    const solanaFactory = await ethers.getContractFactory('Solana')
    const solanaContract = await solanaFactory.deploy()
    await solanaContract.deployed()
    console.log('solanaToken deployed to:', solanaContract.address)

  }
  
  ;(async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })()