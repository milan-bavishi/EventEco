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
  const [openFDD, setOpenFDD] = useState(false);
  const [openSDD, setOpenSDD] = useState(false);
  const [sortBy, setSortBy] = useState('Add');

  function setSortByValue(value) {
    setSortBy(value);
  }

  function prevPage(event) {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    } else {
      event.preventDefault();
      alert('This is First page');
    }
  }

  function nextPage(event) {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    } else {
      event.preventDefault();
      alert('This is Last page');
    }
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
            <div>
            <input type="text" placeholder='Search' className='regTopNavInput' />
            </div>
            <button className='regTopNavDDBtn' onClick={() => setOpenFDD(!openFDD)}>
              <div>
                {sortBy}
              </div>
              {
                openFDD && (
                  <div className='regTopNavDD'>
                    <button className='regTopNavDDItem' onClick={() => setSortByValue('Add')}>
                      Default
                    </button>
                    <button className='regTopNavDDItem' onClick={() => setSortByValue('Gender')}>
                      Gender
                    </button>
                    <button className='regTopNavDDItem' onClick={() => setSortByValue('Date')}>
                      Date
                    </button>
                  </div>
                )
              }
            </button>
            <button className='regTopNavBtn'>Export as CSV</button>
            <button className='regTopNavDDBtn' onClick={() => setOpenSDD(!openSDD)}>
              <div>
                {recordsPerPage}
              </div>
              {
                openSDD && (
                  <div className='regTopNavDD'>
                    <button className='regTopNavDDItem' onClick={() => changeRecords(10)}>
                      10
                    </button>
                    <button className='regTopNavDDItem' onClick={() => changeRecords('15')}>
                      15
                    </button>
                  </div>
                )
              }
            </button>
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
            <tbody>
              {records.map((d, i) => (
                <tr key={i} className='regTableTr'>
                  <td className='regTableTd'>{d.id}</td>
                  <td className='regTableTd' id='regTableTdName'>{d.name}</td>
                  <td className='regTableTd' id='regTableTdEmail'>{d.email}</td>
                  <td className='regTableTd'>{d.phone}</td>
                  <td className='regTableTd'>{d.gender}</td>
                  <td className='regTableTd'>{d.regdate}</td>
                  <td className='regTableTd'>{d.regtime}</td>
                  <td className='regTableTd'>{d.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <nav className='regBotNav'>
            <div className='regBotNavLeftSec'>
                <p>Page <span>{currentPage} / {numbers.length}</span></p>
            </div>
            <div className='regBotNavRightSec'>
                <div className='regBotNavPageItem'>
                  <a href="#" className='regBotNavPageLink' onClick={prevPage}>Prev</a>
                </div>
                <div className='regBotNavPageItem'>
                  <a href="#" className='regBotNavPageLink' onClick={nextPage}>Next</a>
                </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Resgistrationdata