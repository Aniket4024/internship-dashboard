import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // asyncFetch();
    setData([
      {
        "year": "20",
        "value": 2,
        "type": "Total Intrest"
      },
      {
        "year": "25",
        "value": 4,
        "type": "Total Intrest"
      },
      {
        "year": "30",
        "value": 6,
        "type": "Total Intrest"
      },
      {
        "year": "35",
        "value": 8,
        "type": "Total Intrest"
      },
      {
        "year": "40",
        "value": 10,
        "type": "Total Intrest"
      },
      {
        "year": "45",
        "value": 12,
        "type": "Total Intrest"
      },
      {
        "year": "50",
        "value": 14,
        "type": "Total Intrest"
      },
      {
        "year": "55",
        "value": 16,
        "type": "Total Intrest"
      },
      {
        "year": "60",
        "value": 18,
        "type": "Total Intrest"
      },
      {
        "year": "65",
        "value": 20,
        "type": "Total Intrest"
      },
      {
        "year": "70",
        "value": 22,
        "type": "Total Intrest"
      },
      {
        "year": "75",
        "value": 24,
        "type": "Total Intrest"
      },
      {
        "year": "80",
        "value":26,
        "type": "Total Intrest"
      },
      {
        "year": "20",
        "value": 2,
        "type": "Employee"
      },
      {
        "year": "25",
        "value": 4,
        "type": "Employee"
      },
      {
        "year": "30",
        "value": 6,
        "type": "Employee"
      },
      {
        "year": "35",
        "value": 8,
        "type": "Employee"
      },
      {
        "year": "40",
        "value": 10,
        "type": "Employee"
      },
      {
        "year": "45",
        "value": 12,
        "type": "Employee"
      },
      {
        "year": "50",
        "value": 14,
        "type": "Employee"
      },
      {
        "year": "55",
        "value": 16,
        "type": "Employee"
      },
      {
        "year": "60",
        "value": 18,
        "type": "Employee"
      },
      {
        "year": "65",
        "value": 20,
        "type": "Employee"
      },
      {
        "year": "70",
        "value": 22,
        "type": "Employee"
      },
      {
        "year": "75",
        "value": 24,
        "type": "Employee"
      },
      {
        "year": "80",
        "value": 26,
        "type": "Employee"
      },
      {
        "year": "20",
        "value": 2,
        "type": "Employer"
      },
      {
        "year": "25",
        "value": 4,
        "type": "Employer"
      },
      {
        "year": "30",
        "value": 6,
        "type": "Employer"
      },
      {
        "year": "35",
        "value": 8,
        "type": "Employer"
      },
      {
        "year": "40",
        "value": 10,
        "type": "Employer"
      },
      {
        "year": "45",
        "value": 12,
        "type": "Employer"
      },
      {
        "year": "50",
        "value": 14,
        "type": "Employer"
      },
      {
        "year": "55",
        "value": 16,
        "type": "Employer"
      },
      {
        "year": "60",
        "value": 18,
        "type": "Employer"
      },
      {
        "year": "65",
        "value": 20,
        "type": "Employer"
      },
      {
        "year": "70",
        "value": 22,
        "type": "Employer"
      },
      {
        "year": "75",
        "value": 24,
        "type": "Employer"
      },
      {
        "year": "80",
        "value": 26,
        "type": "Employer"
      },
    ])
  }, []);

  // const asyncFetch = () => {
  //   fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };
  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    color: ["#85afff","#4935ff","#0800a3"],
    seriesField: 'type',
    legend:{
      position: 'top-left',
    },
    interactions: [
      {
        type: 'active-region',
        enable: true,
      },
    ],
    connectedArea: {
      style: (oldStyle, element) => {
        return {
          fill: 'rgba(0,0,0,0.25)',
          stroke: oldStyle.fill,
          lineWidth: 0.5,
        };
      },
    },
  };

  return <Column {...config} style={{height:"150px"}} />
};

// ReactDOM.render(<DemoColumn />, document.getElementById('container'));
export default BarChart
