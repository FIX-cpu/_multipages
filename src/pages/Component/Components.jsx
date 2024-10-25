//imports
import Counter from './Counter/counter'
import Timer from './Timer/timer'
import Add from './Add/add';
import Tempertures from './temperatures/temperatures';

import './Components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Components() {


  return (
    <div className='border border-2 border-danger p-2 componentcontainer'>
      <h1 className='bg-success text-light p-2 border border-danger rounded text-center'>React Component</h1>

      <div className='container contain01 text-center'>
        <div className='contain02'>
          <Counter value={10}/>
          <Timer />
        </div>
        <div className='contain03 text-center'>
          <Add />
        </div>
      </div>
      
      <div className='container text-center container04'>
        <Tempertures initCelsius={30} name={'Temperatures'}/>
      </div>

      <div className='footer-name'>
        <h1 className=' badge bg-primary fs-5'>นาย วิทวัส กุยสิงห์ รหัส 66057907</h1>
      </div>
  </div>
  )
}

export default Components
