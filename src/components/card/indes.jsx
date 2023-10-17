import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar,faWallet,faBagShopping , faFileLines} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import DoughnutChart from 'react-doughnut-chart';
import { Doughnut } from 'react-chartjs-2';
import SimplePieChart from '../piechart';


const Card=()=>{

    const data = [
        { name: 'Jan', value: 2 },
        { name: 'Feb', value: 5 },
        { name: 'Mar', value: 3 },
        { name: 'Apr', value: 4 },
        { name: 'May', value: 6 },
        { name: 'Jun', value: 4 },
        { name: 'Jul', value: 6 },
        { name: 'Aug', value: 5 },
        { name: 'Sep', value: 4 },
        { name: 'Oct', value: 3 },
        { name: 'Nov', value: 6 },
        { name: 'Dec', value: 6 },
      ];


      const datapie = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [
          {
            data: [30, 20, 25, 15], // Replace with your data values
            backgroundColor: ['#FF5733', '#33FF57', '#3333FF', '#FF33EE'], // Replace with your desired colors
          },
        ],
      };
      
    return(
        <div>
        <div className='card-container'>

        <div className="card">
  <div className="iconback" style={{ backgroundColor: "#cefad0" }}>
  <FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: '#197628', fontSize: '60px' }} />
  </div>
  <div className="view2">
  <h5 style={{ margin: "0", padding: "0" }}>Earnings</h5>
  <h2 style={{ margin: "0", padding: "0" }}>$198k</h2>
  <h5 style={{ margin: "0", padding: "0" }}>
    <span style={{ color: "#008631", marginRight: "4px" }}>35.4%</span>this month
  </h5>
</div>
</div>

<div className="card">
  <div className="iconback" style={{ backgroundColor: "#eacaff" }}>
  <FontAwesomeIcon icon={faFileLines} style={{ color: '#4724C6', fontSize: '60px' }} />
  </div>
  <div className="view2">
  <h5 style={{ margin: "0", padding: "0" }}>Earnings</h5>
  <h2 style={{ margin: "0", padding: "0" }}>$198k</h2>
  <h5 style={{ margin: "0", padding: "0" }}>
    <span style={{ color: "#ff007b", marginRight: "4px" }}>35.4%</span>this month
  </h5>
</div>
</div>

<div className="card">
  <div className="iconback" style={{ backgroundColor: "#89cff0" }}>
  <FontAwesomeIcon icon={faWallet} style={{ color: '#005cfa', fontSize: '60px' }} />
  </div>
  <div className="view2">
  <h5 style={{ margin: "0", padding: "0" }}>Earnings</h5>
  <h2 style={{ margin: "0", padding: "0" }}>$198k</h2>
  <h5 style={{ margin: "0", padding: "0" }}>
    <span style={{ color: "#008631", marginRight: "4px" }}>35.4%</span>this month
  </h5>
</div>
</div>

<div className="card">
  <div className="iconback" style={{ backgroundColor: "#ffe7eb" }}>
  <FontAwesomeIcon icon={faBagShopping} style={{ color: '#ff007b', fontSize: '60px' }} />
  </div>
  <div className="view2">
  <h5 style={{ margin: "0", padding: "0" }}>Earnings</h5>
  <h2 style={{ margin: "0", padding: "0" }}>$198k</h2>
  <h5 style={{ margin: "0", padding: "0" }}>
    <span style={{ color: "#ff007b", marginRight: "4px" }}>35.4%</span>this month
  </h5>
</div>
</div>
</div>

<div className='all-chart'>
  <div className='bar-chart'>
<div className='chart-container'>
    <h3>Overview</h3>
    <h5 style={{margin:0,padding:0}}>Monthly Earning</h5>
    <div>
    <ResponsiveContainer height={270}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis hide={true} />
      <CartesianGrid horizontal={false} vertical={false} />
      <Bar dataKey="value" fill='#eacaff'/>
      <Tooltip />
    </BarChart>
  </ResponsiveContainer>
    </div>
    </div>

    </div>
      <div className='pie-chart'>
    <div className='chart-container' style={{height:'343px'}}>
    <SimplePieChart />
    </div>
    </div>

</div>
</div>

    )
}

export default Card