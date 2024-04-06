import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayButton from './playbutton.png'; // Import the PNG file for the LIVE icon
import Image from 'react-bootstrap/Image';

function Card2() {
  return (
    <div className="relative">
      {/* Gray overlay */}
      <div className="absolute z-10 inset-0 bg-gray-500 opacity-10 rounded-2xl"></div>
      {/* Card */}
      <Card style={{width: '320px'}} className="border bg-white rounded-2xl m-1 mt-9 shadow-md w-full uicard">
        {/* First Section: Top Section */}
        <div className="flex justify-between items-center bg-gray-300 px-4 py-2 rounded-t-2xl">
          {/* Left Side: LIVE */}
          <div className="flex items-center">
            <Image width={"20px"} src='./clock.svg'/> {/* Use the imported image */}
            <span style={{ color: 'black', fontWeight: '', fontSize: '14px' }}>  &nbsp; Later</span> 
          </div>
          {/* Right Side: #235533 */}
          <div style={{ color: '#aeaeae', fontSize: '13px',fontWeight: '700' }}>#235533</div>
        </div>

        {/* Second Section: Horizontal Slider Track */}
        <div className="relative h-2 py-0">
          <div style={{ background: 'white', width: '0%' }} className="h-full absolute left-0"></div> {/* Slider track with the color #7644d8, taking up 1/4 of the width */}
          <div style={{ background: 'white', width: '100%' }} className="h-full absolute right-0"></div> {/* Grey track for the remaining width */}
        </div>

        {/* Upper Image */}
        <div className="flex justify-center items-center mt-4 example">
          <img src="./upperarrowgray.svg" alt="Top Image" className="h-1/2 upperarrowgreen" />
          <div className='overlay-textup'>
            <h1 className='font-extrabold text-gray-400' style={{fontSize:'20px'}}>UP</h1>
          </div>
        </div>

        {/* Third Section: Rectangle with Text */}
        <div className="p-4 ml-3 mr-3 border-2 border-gray-200 bg-white rounded-2xl">
          {/* Rectangle Text */}
          <div className="">
    <p style={{ color: 'black', textAlign: 'center' }} className='font-black'>Entry starts on</p>
    <p style={{ color: 'black', textAlign: 'center' }} className='font-black'>~ 00:38</p>
  </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center items-center example">
          <img src="./bottomarrowgray.png" alt="Bottom Image" className="h-1/2" style={{ position: 'relative' }} />
          <div className='overlay-textdown'>
            <h1 className='text-gray-400 font-extrabold' style={{color:'', fontSize:'20px'}}>DOWN</h1>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Card2;
