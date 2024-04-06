import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayButton from './playbutton.png'; // Import the PNG file for the LIVE icon
import Image from 'react-bootstrap/Image';

function Card2() {
  return (
    <div className="relative">
      {/* Gray overlay */}
      <div className="absolute z-10 inset-0 bg-gray-500 opacity-20 rounded-2xl"></div>
      {/* Card */}
      <Card style={{width: '320px'}} className="border bg-white rounded-2xl m-1 shadow-md w-full uicard">
        {/* First Section: Top Section */}
        <div className="flex justify-between items-center bg-gray-300 px-4 py-2 rounded-t-2xl">
          {/* Left Side: LIVE */}
          <div className="flex items-center">
            <Image width={"20px"} src='./noentry.svg'/> {/* Use the imported image */}
            <span style={{ color: '#aeaeae', fontWeight: '', fontSize: '14px' }}>  &nbsp; Expired</span> 
          </div>
          {/* Right Side: #235533 */}
          <div style={{ color: '#aeaeae', fontSize: '13px',fontWeight: '700' }}>#235533</div>
        </div>

        {/* Second Section: Horizontal Slider Track */}
        <div className="relative h-2">
          <div style={{ background: '#7644d8', width: '0%' }} className="h-full absolute left-0"></div> {/* Slider track with the color #7644d8, taking up 1/4 of the width */}
          <div style={{ background: '#dbdbe9', width: '100%' }} className="h-full absolute right-0"></div> {/* Grey track for the remaining width */}
        </div>

        {/* Upper Image */}
        <div className="flex justify-center items-center mt-4 example">
          <img src="./upperarrowgray.svg" alt="Top Image" className="h-1/2 upperarrowgreen" />
          <div className='overlay-textup'>
            <h1 className='font-extrabold text-green-400' style={{fontSize:'20px'}}>UP</h1>
            <p style={{color:'#2d1362'}}><span className='font-bold'>1.76x</span>  Payout</p>
          </div>
        </div>

        {/* Third Section: Rectangle with Text */}
        <div className="p-4 ml-3 mr-3 border-2 border-pink-400 bg-white rounded-2xl">
          {/* Rectangle Text */}
          <p style={{color: 'black', fontSize:'12px', fontWeight: 'bold'}}>CLOSED PRICE</p>
          <div className="flex justify-between mt-2">
            <div>
              <p style={{color: '', fontSize: '22px'}} className='pricemain font-black text-end  text-pink-400 border-bottom border-1 border-dotted' >$584.0956</p>
            </div>
            <div>
              <p style={{color: 'black'}} className='p-1 bg-pink-400 rounded-md' >↑ $1.3874</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <p style={{color: 'black', fontSize:'14px'}}>Locked Price</p>
              <p style={{color: 'black', fontSize:'16px',fontWeight: 'bold'}}>Prize Pool</p>
            </div>
            <div>
              <p className='text-end' style={{color: 'black', fontSize:'14px'}}>$584.6000</p>
              <p style={{color: 'black', fontSize:'16px',fontWeight: 'bold'}}>2.1799 BNB</p>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center items-center example">
          <img src="./bottomarrowred.png" alt="Bottom Image" className="h-1/2" style={{ position: 'relative' }} />
          <div className='overlay-textdown'>
            <p style={{color:'white'}}>2.04x Payout</p>
            <h1 className='text-white-400 font-extrabold' style={{color:'', fontSize:'20px'}}>DOWN</h1>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Card2;
