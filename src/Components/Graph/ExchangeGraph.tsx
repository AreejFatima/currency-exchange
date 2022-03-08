import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ExchangeStyle } from './Exchange.style';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function ExchangeGraph(props:any) {
  const { dataToPlot,width,height ,options} = props;
  

  return (
    
      <ExchangeStyle
      
        style={{
          width: width,
          height: height,
          marginBottom: "2%",
        }}
      >
        {dataToPlot ? <Line data={dataToPlot} options={options} /> : <></>}
      </ExchangeStyle>
    
  );
}
