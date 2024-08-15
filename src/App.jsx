import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState('')

  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='display'>
              <input type="text" value={val} />
            </div>
            <div>
              <input type="button" value="AC" onClick={e => setVal('')} />
              <input type="button" value="DE" onClick={e => setVal(val.slice(0, -1))} />
              <input type="button" value="." onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="/" onClick={e => setVal(val + e.target.value)} />
            </div>
            <div>
              <input type="button" value="7" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="8" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="9" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="*" onClick={e => setVal(val + e.target.value)} />
            </div>
            <div>
              <input type="button" value="4" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="5" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="6" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="+" onClick={e => setVal(val + e.target.value)} />
            </div>
            <div>
              <input type="button" value="1" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="2" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="3" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="-" onClick={e => setVal(val + e.target.value)} />
            </div>
            <div>
              <input type="button" value="00" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="0" onClick={e => setVal(val + e.target.value)} />
              <input type="button" value="=" className='equal' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
