import './styles.css'
import Chart from 'react-apexcharts';

export default function DashboardContainer() {
    const series = [
        {
          name: 'Usuários Ativos',
          data: [200, 300, 400, 500, 600, 700]
        }
      ];
    
    const seriesVendas = [
    {
        name: 'Vendas',
        data: [65, 58, 80, 82, 56, 55]
    }
    ];

      const options = {
        chart: {
          type: 'bar',
          toolbar: { show: false }
        },
        colors: ['#f66a6a'],
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '70%',
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
          tickAmount: 7,
          title: {
            text: undefined
          },
          labels: {
            formatter: (val) => `${val}`
          }
        },
        tooltip: {
          y: {
            formatter: (val) => `${val} usuários`
          }
        },
        legend: {
          show: false,
        }
      };

      const optionsVendas = {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false }, 
          pan: { enabled: false },  
          animations: {
            enabled: false 
          }
        },
        colors: ['#5b6def'], // azul suave
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'solid',
          opacity: 0.4
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yaxis: {
            min: 55,
            max: 85,
            tickAmount: 6, // Gera ticks a cada 5 (55, 60, 65, ..., 85)
            labels: {
              formatter: (val) => `${val}`
            }
        },
        tooltip: {
          y: {
            formatter: (val) => `${val} vendas`
          }
        },
        legend: {
          show: false // remove a legenda "Vendas"
        }
      };


    return(
        <div className='dashboard'>
            <div className="title-config">
               <h1 className="text-3xl text-neutral-800  font-bold">Dashboard</h1>

                <p>Gerencie as configurações do sistema</p>
            </div>

            <div className='vendas-hoje-box'>
                <span>Vendas Hoje</span>
                <h3>R$ 12.589,00</h3>
                <p>+15% vs ontem</p>
            </div>

            <div className='container-graficos w-full flex gap-5'>
                <div className='box-graficos'>
                    <h1>Vendas Mensais</h1>
                    <span>Comparativo dos últimos 6 meses</span>
                    <div className='grafico'>
                        <Chart options={optionsVendas} series={seriesVendas} type="area" height={300} />
                    </div>
                </div>

                <div className='box-graficos'>
                    <h1>Vendas Mensais</h1>
                    <span>Comparativo dos últimos 6 meses</span>
                    <div className='grafico'>
                        <Chart options={options} series={series} type="bar" height={300} />                       
                    </div>
                </div>
            </div>
        </div>
    )
}