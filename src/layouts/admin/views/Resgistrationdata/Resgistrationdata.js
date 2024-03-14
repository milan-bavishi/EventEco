import React, { useState } from 'react'
import "./Resgistrationdata.css"
import Data from './Data.json';

function Resgistrationdata() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function changeRecords(rpp) {
    setRecordsPerPage(rpp);
  }

  return (
    <div className='regWrapper'>
      <div className='regCard'>
        <nav className='regTopNav'>
          <div className='regTopNavLeftSection'>
            <h6>No. Registration</h6>
            <div className='regTotalReg'>
              {Data.length}
            </div>
          </div>
          <div className='regTopNavRightSection'>
            <input type="text" placeholder='Search' className='regTopNavInput' />
            <button className='regTopNavBtn'>Add +</button>
            <div>
              <span>Filters</span>
              <div className='regTopNavFirstDD'>
                <button className='regTopNavDDBtn'>Gender</button>
                <button className='regTopNavDDBtn'>Date</button>
              </div>
            </div>
            <button className='regTopNavBtn'>Export as CSV</button>
            <div>
              <div className='regTopNavSecondDD'>
                <button className='regTopNavDDBtn' onClick={() => changeRecords(10)}>10</button>
                <button className='regTopNavDDBtn' onClick={() => changeRecords(15)}>15</button>
              </div>
            </div>
          </div>
        </nav>
        <section className='regDetailsSection'>
          <table className='regTable'>
            <thead>
              <th className='regTableTh'>Trick Id.</th>
              <th className='regTableTh'>Name</th>
              <th className='regTableTh'>Email</th>
              <th className='regTableTh'>Phone No.</th>
              <th className='regTableTh'>Gender</th>
              <th className='regTableTh'>Reg-Date</th>
              <th className='regTableTh'>Reg-Time</th>
              <th className='regTableTh'>Designations</th>
              <th className='regTableTh'>Action</th>
            </thead>
          </table>
        </section>
      </div>
    </div>
  )
}

export default Resgistrationdata