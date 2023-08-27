import React,  { useState }  from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ContainerCard from '../components/ContainerCard';
import { BiRefresh } from 'react-icons/bi';
import CardInfo from '../components/CardInfo';
import Chart from '../components/Chart';
import Card from '../components/Card';
import Metrics from '../components/Metrics';
import { FiAlertTriangle } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { google} from "../assets";
import '../styles.css';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('performance'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'performance':
        return (
          <div>
            {/* bagian filter */}
            <div className='flex justify-end'>
                <div className='flex gap-5 items-center'>
                  <div className='flex gap-2 text-gray-500'>
                    <BiRefresh size={25} />
                    Feb 4, 20:12
                  </div>
                  <select name="" id="" className='focus:outline-none p-2 px-5 border border-gray-300 text-gray-500 rounded-md'>
                    <option value="">Last Week</option>
                  </select>
                </div>
              </div>
              {/* end */}

              {/* bagian content */}
            <div clas>
                <div className='flex mt-5 gap-5'>
                  {/* Card Info */}
                  <div className='w-2/6 flex flex-col h-full gap-5'>
                    {renderCardInfo()}
                  </div>
                  {/* Chart */}
                  <div className='w-full flex flex-col gap-5 justify-between'>
                    <Chart />
                    <div className=' flex w-full gap-5 -mt-4'>
                      {renderCardInfo2()}
                    </div>
                  </div>
                </div>
                
              </div>
              {/* end */}


                {/* bagian sugesti */}
            <div>
              <div className='relative top-5 border-t-2 border-gray-600 p-5 px-10 pb-5'>
                <h1 className='text-xl font-bold text-gray-700'>Suggestion</h1>
                <div className='flex mt-5 gap-5'>
                  <Card color='yellow'>
                    <div className='max-w-sm'>
                      <div className='flex gap-3'>
                        <div>
                          <FiAlertTriangle size={25} className='text-yellow-500' />
                        </div>
                        <div>
                          <div className='font-medium mb-2'>Nilai CTR rendah</div>
                          <p>Pastikan iklan atau tautan Anda memiliki judul atau gambar yang menarik</p>
                        </div>
                      </div>
                      <a href="https://makinrajin.com/blog/ctr-adalah/" target="_blank" rel="noopener noreferrer">
                      <div className='mt-2 hover:underline  text-end text-sm'>
                        learn more
                      </div>
                      </a>
                    </div>
                  </Card>
                  <Card color='red'>
                    <div className='max-w-sm'>
                      <div className='flex gap-3'>
                        <div>
                          <AiOutlineCloseCircle size={25} className='text-red-500' />
                        </div>
                        <div>
                          <div className='font-medium mb-2'>Nilai OCL rendah</div>
                          <p>Pastikan bahwa landing page Anda memiliki konten yang relavan, menarik, dan informatif</p>
                        </div>
                      </div>
                      <a href="https://www.hazamusik.com/2020/02/cara-menghilangkan-dengung-pada-power.html" target="_blank" rel="noopener noreferrer">
                      <div className='mt-2 hover:underline  text-end text-sm'>
                        learn more
                      </div>
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        );
      case 'metrics':
        return (
          <div>
            {/* bagian filter */}
            <div className='flex justify-end'>
              <div className='flex gap-5 items-center'>
                <div className='flex gap-2 text-gray-500'>
                  <BiRefresh size={25} />
                  Feb 4, 20:12
                </div>
              </div>
            </div>
            {/* end */}

            {/* bagian content */}
            <div className='flex flex-wrap gap-5 mt-5'>
              {/* Card 1 */}
              <div className='w-full '>
                <Metrics
                  title='Amount Spent'
                  value='Rp. 4.000.000'
                  chartData='Chart data for Amount Spent'
                  info='Description for Amount Spent'
                  icon={<AiOutlineInfoCircle size={15} />}
                />
              </div>

              {/* Card 2 */}
              <div className='w-full '>
                <Metrics
                  title='Reach Amount Ratio'
                  value='6.1%'
                  chartData='Chart data for Reach Amount Ratio'
                  info='Description for Reach Amount Ratio'
                  icon={<AiOutlineInfoCircle size={15} />}
                />
              </div>

              {/* Card 3 */}
              <div className='w-full '>
                <Metrics
                  title='Click Through Rate'
                  value='1.0%'
                  chartData='Chart data for Click Through Rate'
                  info='Description for Click Through Rate'
                  icon={<AiOutlineInfoCircle size={15} />}
                />
              </div>
            </div>

            </div>
        );
      case 'history':
        return (
          // Render content for History tab
          <div>
            {/* ... */}
            <h2>Konten History</h2>
            {/* ... */}
          </div>
        );
      case 'setting':
        return (
          // Render content for Setting tab
          <div>
            {/* ... */}
            <h2>Konten Setting</h2>
            {/* ... */}
          </div>
        );
      default:
        return null;
    }
  };

 
  const cardData = [
    {
      title: 'Amount Spent',
      value: 'Rp. 4.000.000',
      color: 'text-sky-500'
    },
    {
      title: 'Reach Amount Ratio',
      value: '6.1%',
      color: 'text-yellow-500'
    },
    {
      title: 'Click Through Rate',
      value: '1.0%',
      color: 'text-green-500'
    },
    {
      title: 'OCLP',
      value: '30%',
    }
  ];

  const cardData2 = [
    {
      title: 'CPR',
      value: 'Rp. 5.000',
    },
    {
      title: 'ATC',
      value: '2,5%',
    },
    {
      title: 'ROAS',
      value: '1.0%',
    },
    {
      title: 'Real ROAS',
      value: '1.0%',
    },
  ];



  const renderCardInfo = () => {
    return cardData.map((item, index) => {
      return <CardInfo key={index} title={item.title} value={item.value} color={item.color} className='relative flex top-5 flex-col justify-between h-24' />
    })
  }

  const renderCardInfo2 = () => {
    return cardData2.map((item, index) => {
      return <CardInfo key={index} title={item.title} value={item.value} color={item.color} className='w-full  flex flex-col justify-between h-24' />
    })
  }

  return (
    <main className='bg-slate-100 min-h-screen ' >
      <div>
        <Navbar />
        <div className='flex gap-5  px-5'>
          <Sidebar />
          
          <ContainerCard>
            
            {/* Header */}
            <div className='border-b-2  border-gray-600'>
              <div className='flex p-4 ml-3 pb-1 items-center'>
               <img src={google} alt="google" width={50} /> <h1 className='text-2xl pl-3 font-bold text-gray-700'>Campaign Tahfidz</h1>
              </div> 


       <div className='flex justify-center'>
                <ul className='flex -mb-1'>
                  <li
                    className={`p-3 px-5  ${
                      activeTab === 'performance' ? ' atas text-sky-500 cursor-pointer font-semibold  border-b-4 border-sky-500 transition-colors ' : 'text-gray-500'
                    }`}
                    onClick={() => handleTabClick('performance')}
                  >
                    Performance
                  </li>
                  <li
                    className={`p-3 px-5  ${
                      activeTab === 'metrics' ? 'text-sky-500 atas cursor-pointer font-semibold border-b-4 border-sky-500 transition-colors' : 'text-gray-500'
                    }`}
                    onClick={() => handleTabClick('metrics')}
                  >
                    Metrics
                  </li>
                  <li
                    className={`p-3 px-5  ${
                      activeTab === 'history' ? 'text-sky-500 atas cursor-pointer font-semibold border-b-4 border-sky-500 transition-colors' : 'text-gray-500'
                    }`}
                    onClick={() => handleTabClick('history')}
                  >
                    History
                  </li>
                  <li
                    className={`p-3 px-5  ${
                      activeTab === 'setting' ? 'text-sky-500 atas cursor-pointer font-semibold border-b-4 border-sky-500 transition-colors' : 'text-gray-500'
                    }`}
                    onClick={() => handleTabClick('setting')}
                  >
                    Setting
                  </li>
                </ul>
              </div>
            </div>
                {/* Body */}
            <div className='px-5 py-5 flex flex-col '>
             
                    {/* pemanggil */}
              {renderContent()}
            </div>
          

          </ContainerCard>
        </div>
      </div>
      
    </main>
  );

}

export default Dashboard