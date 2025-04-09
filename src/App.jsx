import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className='root'>
          <div className='logo'>
              <img src="/Image 1858.png" alt="" id='logo'/>
          </div>
          <img src="" alt="" />
          <div className='menu'>

          </div>
        </div>
        <div className='content'>
          <div className='header'>
            <div className='dashboard'>
              <h3>Dashboard</h3>
            </div>
            <div className='search'>
            <input type="text" name="" id="" placeholder='Search'/>
            </div>
            <div className='profile'>
              <img src="/bell.png" alt="" />
              <img src="/Question 1.png" alt="" />
              <img src="/Avatar (1).png" alt="" />
            </div>
          </div>
          <div className='overview'>
            <div className='icon1'>
            <img src="/Squares four 1.png" alt="" />
            <h4>Overview</h4>
            </div>
            <div className='information'>
                <div className='frame'>

                </div>
                <div className='frame'>
          
                </div>
                <div className='frame'>
          
                </div>
            </div>
            
          </div>
          <div className='tableData'>
            <div className='detail'>
              <div className='detailReport'>
              <img src="/File text 1.png" alt="" />
              <h4>Detailed report</h4>
              </div>
              
              <div className='import'>
                  <img src="/Download.png" alt="" />
                  <p>Import</p>
              </div>
              <div className='import'>
                  <img src="/Move up.png" alt="" />
                  <p>Export</p>
              </div>

            </div>
            <div className='table'>
              <table>

              </table>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
