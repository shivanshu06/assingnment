import {SearchOutlined } from '@ant-design/icons';
import '../cont.css'
import { Select, Space } from 'antd';
// import './tab.css'

const Tables=()=>{

  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1',stock:"20 in stock",Price:"$ 5674",TotalSales:556 },
    { id: 2, name: 'Item 2', description: 'Description 2',stock:"20 in stock",Price:"$ 5674",TotalSales:556  },
    { id: 3, name: 'Item 3', description: 'Description 3',stock:"20 in stock",Price:"$ 5674",TotalSales:556  },
  ];

    
    return(
        <div>
            <div className="header">
            <h3>Product Sell</h3>
            <div style={{display:'flex',gap:'6px'}}>
            <div style={{backgroundColor:'whitesmoke'}} className='input-container'><SearchOutlined /><input style={{backgroundColor:'whitesmoke'}} className='search' placeholder='Search'/></div>
             
            <Select
      defaultValue="Last 30 days"
      style={{
        width: 130,
        
        
      }}
     

    //   onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        
      ]}
    />
            </div>
        </div>

        <div className='table-container'>
        {/* <Tables columns={columns} dataSource={data} /> */}

        <table className='my-table'>
      <thead>
        <tr>
          <th className='left-align'>Product Name</th>
          <th className='right-align'>Stock</th>
          <th className='right-align'>Price</th>
          <th className='right-align'>Total sales</th>
        </tr>
      </thead>
      {/* <hr></hr> */}
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
             <td className="left-align">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                </div>
                </td>
              
                <td className="right-align">{item.stock}</td>
            <td className="right-align">{item.Price}</td>
            <td className="right-align">{item.TotalSales}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
        </div>
        </div>
    )
}

export default Tables