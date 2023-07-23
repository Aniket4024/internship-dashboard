import { RingProgress } from '@ant-design/plots';


const RingChart = ({percent}) => {

  const mobileView = window.innerWidth;

  const config = {
    height: 80,
    width: 80,
    autoFit: false,
    percent: percent,
    color: ['#22d6aa', '#d3f7ee'],
  };
  return <RingProgress  {...config} />;
};

export default RingChart;

// style={{margin:mobileView<=480 ? "25px 0px 0px 10px" : "25px 0px 0px 23px"}}