import React, { useContext } from 'react'
import { DexContext } from '../../context/DexContext'
import BtnMain from '../../subcomponents/btns/Button'
import Input from '../../subcomponents/inputs/Input'
// import { RobinhoodContext } from '../context/RobinhoodContext'

const styles = {
  inputAmount: `w-1/2 flex items-center justify-center border border-gray-400 rounded-lg p-2 bg-transparent mt-6 `,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-gray-400 rounded-lg p-2 bg-transparent mb-6`,
  options: `w-1/2 flex items-center justify-center border border-gray-400 rounded-lg p-2 bg-gray-300 mt-6`,
}

const TransferFundBox = () => {
  const {
    isAuthenticated,
    setAmountEntered,
    mint,
    setFromCoinSelected,
    fromCoinSelected,
    amountEntered,
    toCoinSelected,
    setToCoinSelected,
  } = useContext(DexContext)


  const handleClick = async (e) => {
    e.preventDefault();
    await mint();

 


  }
  return (
    <form className={styles.formContainer}>
      {/* {fromCoinSelected} and {toCoinSelected} and {amountEntered} */}
      <div className='flex h-full w-full flex-col items-center'>
        <label className='text-left' htmlFor="from">From</label>
        <select
        id='from'
          className={styles.select}
          value={fromCoinSelected}
          onChange={e => setFromCoinSelected(e.target.value)}
        >
          <option className={styles.options} value='ETH'>
            ETH
          </option>
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
          <option className={styles.options} value='SOL'>
            SOL
          </option>
          <option className={styles.options} value='BTC'>
            BTC
          </option>
        </select>
        <label htmlFor="to">To</label>
        <select
        id='to'
          className={styles.select}
          value={toCoinSelected}
          onChange={e => setToCoinSelected(e.target.value)}
        >
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='LINK'>
            LINK
          </option>
          <option className={styles.options} value='DAI'>
            DAI
          </option>
          <option className={styles.options} value='SOL'>
            SOL
          </option>
          <option className={styles.options} value='BTC'>
            BTC
          </option>
        </select>
        <Input
          placeholder='Amount...'
        //   className={styles.inputAmount}
          type='text'
          
          value={amountEntered}
          onChange={e => setAmountEntered(e.target.value)}
        />

        {/* <button
          className={styles.noticeCTA}
          type='button'
        //   disabled={!isAuthenticated}
        //   onClick={() => mint()}
        >
          Send
        </button> */}
        <div className='my-6'>

        <BtnMain disabled={!isAuthenticated || !amountEntered || !toCoinSelected} onClick={handleClick} text="Send" />
        </div>
        
      </div>
    </form>
  )
}

export default TransferFundBox