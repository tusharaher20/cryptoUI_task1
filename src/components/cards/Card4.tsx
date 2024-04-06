import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayButton from './playbutton.png'; // Import the PNG file for the LIVE icon
import Image from 'react-bootstrap/Image';

function Card4() {
  return (
    <Card style={{width: '320px'}} className="border bg-white rounded-2xl m-1 shadow-md w-full uicard">



      {/* First Section: Top Section */}
      <div style={{background:'#7644d8'}} className="flex justify-between items-center  px-4 py-2 rounded-t-2xl">
        {/* Left Side: LIVE */}
        <div className="flex items-center">
        <Image width={'26px'} src='./playbuttonwhite.png'/> {/* Use the imported image */}
          <span style={{ color: 'white', fontWeight: '', fontSize: '14px' }}>  &nbsp; Next</span> 
        </div>
        {/* Right Side: #235533 */}
        <div style={{ color: 'white', fontSize: '13px',fontWeight: '700' }}>#235533</div>
      </div>




      {/* Second Section: Horizontal Slider Track */}
      <div className="relative h-2">
        <div style={{ background: 'white', width: '25%' }} className="h-full absolute left-0"></div> {/* Slider track with the color #7644d8, taking up 1/4 of the width */}
        <div style={{ background: 'white', width: '75%' }} className="h-full absolute right-0"></div> {/* Grey track for the remaining width */}
      </div>



      {/* Upper Image */}

      <div className="flex justify-center items-center mt-4 example">
        <img src="./upperarrowgray.svg" alt="Top Image" className="h-1/2 upperarrowgreen" />
        <div className='overlay-textup'>        <h1 className='font-extrabold text-green-400' style={{fontSize:'20px'}}>UP</h1>
        <p className='' style={{color:'#2d1362'}}><span className='font-bold'>1.35x</span>  Payout</p>
</div>
      </div>



{/* Third Section: Rectangle with Text */}
<div style={{border:'1px solid  rgb(2,0,36)'}} className="p-4 ml-3 mr-3 border-2 border-blue-400 bg-white rounded-2xl">
  {/* Rectangle Text */}
  <div className="flex justify-between  ">
    <div>
      <p style={{color: 'black'}} className=' font-black' >Prize Pool</p>
    </div>
    <div>
      <p style={{color: 'black'}} className=' font-black rounded-md' >2.3760 BNB</p>
    </div>
  </div>
  <div className="flex flex-col">
    <button style={{background:'#31d1ab'}} className="w-full py-2  font-bold  text-white rounded-2xl">Enter UP</button>
    <button className="w-full mt-2 py-2 bg-pink-400 font-bold text-white rounded-2xl">Enter DOWN</button>
  </div>
</div>






      {/* Bottom Image */}
      <div className="flex justify-center items-center example">
        <img src="./bottomarrowgray.png" alt="Bottom Image" className="h-1/2" style={{ position: 'relative' }} />
        <div className='overlay-textdown'>
          <p style={{color:'black'}}>3.84x Payout</p>
          <h1 className='text-pink-400 font-extrabold' style={{color:'', fontSize:'20px'}}>DOWN</h1>
        </div>
      </div>
      {/* Rest of the Card Content */}
      {/* <Card.Img variant="top" src="./images3.jpeg" />
      <Card.Body className="whitespace-normal">
        <Card.Title style={{ color: 'black' }}>Card Title</Card.Title>
        <Card.Text style={{ color: 'black' }}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
  );
}

export default Card4;
