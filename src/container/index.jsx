import './cont.css'
// import '../global.css'
import {SearchOutlined } from '@ant-design/icons';
import Card from '../components/card/indes'
import Tables from '../container/table/index'

const Container=()=>{
    return(
        <div className="container">
            <div className='head'>
                 <h2 style={{fontWeight:'400'}}>Hello Shivanshu,</h2>
                 <div className='input-container'><SearchOutlined /><input className='search' placeholder='Search'/></div>
            </div>

            <div className='cards-container'>
             <Card/>

            </div>

            <div className='table-container'>
                <Tables/>
            </div>
        </div>
    )
}

export default Container