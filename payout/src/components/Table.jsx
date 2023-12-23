import React from 'react'

const Table = () => {
  return (
    <>
     <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"1% 0px"}}>
            <div style={{border:"1px solid black",padding:" 1px 4px"}}>
                <img src="./images/search.svg" alt="" />
                <input type="text" style={{outline:"none",border:"none"}}/>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
                <div>
                 <select name="" id="">
                    <option value="">Sort</option>
                 </select>
                </div>
                <div style={{border:"1px solid black",padding:"1px 4px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D"/>
</svg>
                </div>
            </div>
    </div>
    <table className="table">
  <thead className="table-secondary">
    <tr>
      <th scope="col"><img src="./images/Triangle-Icon.svg" alt="" /></th>
      <th scope="col"></th>
      <th scope="col">Transaction ID</th>
      <th scope="col">Order amount</th>
      <th scope="col">Transaction fees</th>
      <th scope="col">Total</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Processing</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Successful</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Successful</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Successful</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Successful</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr>
    {/* <tr>
      <th scope="row"></th>
      <td>Successful</td>
      <td>131634495747</td>
      <td>₹10,125.00</td>
      <td>₹1,125.00</td>
      <td>₹9,312</td>
    </tr> */}
   
  </tbody>
</table>
    </>
  )
}

export default Table