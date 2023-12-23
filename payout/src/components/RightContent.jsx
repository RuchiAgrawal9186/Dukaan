import React from 'react'
import "./RightContent.css"
import Table from './Table'

const RightContent = () => {
  return (
    <>
    <div className='rightcontainer'>
      <div className='topdiv'>

        <div style={{display:"flex",gap:"10px"}}>
          <h5>Payouts</h5>
          <div>How it works</div>
        </div>

        <div className='searchdiv' style={{display:"flex",gap:"5px"}}>
          <div> <img src="./images/search.svg" alt="" /></div>
          <input type="text" placeholder='Search features, tutorials, etc.'/>
        </div>

        <div style={{display:"flex",gap:"10px"}}>
          <div><img src="./images/Menu.png" alt="" /></div>
          <div><img src="./images/Menu1.svg" alt="" /></div>
        </div>

      </div>

      <div className='overview'>

        <div className='top'>
          <h4>Overview</h4>
          <div>
            <select name="" id="">
              <option value="">This Month</option>
            </select>
          </div>
        </div>

        <div className='gridDiv'>
          <div className='first'>
            <p>Next Payout</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div> <h2>₹2,312.23</h2></div>
             <div> <p>23 orders</p></div>
            </div>
            <div className='btm' >
              <p>Next payout date:</p>
              <p>Today, 04:00PM</p>
            </div>
          </div>
          <div className='second'>
              <p>Amount Pending</p>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <div> <h2>₹92,312.20</h2></div>
             <div> <p>13 orders</p></div>
            </div>
          </div>
          <div className='third'>
          <p>Amount Pending</p>
              <div style={{display:"flex",justifyContent:"space-between"}}>
              <div> <h2>₹92,312.20</h2></div>
             <div> <p>13 orders</p></div>
            </div>
          </div>
        </div>

        <div className='tablediv'>
            <h4>Transactions | This Month</h4>
            <div style={{display:"flex",gap:"10px"}}>
              <button>Payouts (22)</button>
              <button>Refunds (2)</button>
            </div>
          <Table></Table>
        </div>
      </div>

    </div>
    </>
  )
}

export default RightContent