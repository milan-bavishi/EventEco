import React, { useState } from 'react'
import "./Resgistrationdata.css"
import Data from './Data.json';

function Resgistrationdata() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [data, setData] = useState(Data);
  const [records, setRecords] = useState(data);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsDisp = records.slice(firstIndex, lastIndex);
  const npage = Math.ceil(records.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  const [openFDD, setOpenFDD] = useState(false);
  const [openSDD, setOpenSDD] = useState(false);
  const [sortBy, setSortBy] = useState('Add');

  function setSortByValue(value) {
    if (value === 'Add') {
      setRecords(data);
    } else {
      setRecords(data.filter(f => f.gender.includes('Male')));
    }
    setSortBy(value);  
  }

  function prevPage(event) {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      event.preventDefault();
      alert('This is First page');
    }
  }

  function nextPage(event) {
    if (currentPage < numbers.length) {
      setCurrentPage(currentPage + 1);
    } else {
      event.preventDefault();
      alert('This is Last page');
    }
  }

  function changeRecords(rpp) {
    setRecordsPerPage(rpp);
    changeCPage(Math.min(currentPage, Math.ceil((Data.length) / rpp)));
  }

  function changeCPage (value) {
    setCurrentPage(value);
  }

  function handleInputChange (value) {
    if(value < 1) {
      value = 1;
    }
    if(value > numbers.length) {
      value = numbers.length;
    } 
    setCurrentPage(value);
  }

  const filterName = (event) => {
    setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
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
            <input type="text" placeholder='Search' className='regTopNavInput' onChange={filterName}/>
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
        <section classNzame='regDetailsSection'>
          <table className='regTable'>
            <thead>
              <th className='regTableTh' id='regTableTdId'>Trick Id.</th>
              <th className='regTableTh' id='regTableTdName'>Name</th>
              <th className='regTableTh' id='regTableTdEmail'>Email</th>
              <th className='regTableTh' id='regTableTdPhone'>Phone No.</th>
              <th className='regTableTh' id='regTableTdGender'>Gender</th>
              <th className='regTableTh' id='regTableTdDate'>Reg-Date</th>
              <th className='regTableTh' id='regTableTdTime'>Reg-Time</th>
              <th className='regTableTh' id='regTableTdDes'>Designations</th>
            </thead>
            <tbody>
              {recordsDisp.map((d, i) => (
                <tr key={i} className='regTableTr'>
                  <td className='regTableTd' id='regTableTdId'>{d.id}</td>
                  <td className='regTableTd' id='regTableTdName'>{d.name}</td>
                  <td className='regTableTd' id='regTableTdEmail'>{d.email}</td>
                  <td className='regTableTd' id='regTableTdPhone'>{d.phone}</td>
                  <td className='regTableTd' id='regTableTdGender'>{d.gender}</td>
                  <td className='regTableTd' id='regTableTdDate'>{d.regdate}</td>
                  <td className='regTableTd' id='regTableTdTime'>{d.regtime}</td>
                  <td className='regTableTd' id='regTableTdDes'>{d.designation}</td>
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
                <input 
                  type="number"  
                  value={currentPage}
                  onChange={(e) => handleInputChange(Number(e.target.value))}
                  id='regBotNavInput'  
                />
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