import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlayButton from './playbutton.png'; // Import the PNG file for the LIVE icon
import Image from 'react-bootstrap/Image';

function Card3() {
  return (
    <Card style={{width: '320px', border: '1px solid #7644d8', borderBottom: '3px solid #7644d8'}} className="border bg-white rounded-2xl m-1 shadow-md w-full uicard">



      {/* First Section: Top Section */}
      <div className="flex justify-between items-center bg-white px-4 py-2 rounded-t-2xl">
        {/* Left Side: LIVE */}
        <div className="flex items-center">
        <Image src='./playbutton.png'/> {/* Use the imported image */}
          <span style={{ color: '#7644d8', fontWeight: '900', fontSize: '14px' }}>  &nbsp; LIVE</span> 
        </div>
        {/* Right Side: #235533 */}
        <div style={{ color: '#7644d8', fontSize: '13px',fontWeight: '700' }}>#218486</div>
      </div>




      {/* Second Section: Horizontal Slider Track */}
      <div className="relative h-2">
        <div style={{ background: '#7644d8', width: '75%' }} className="h-full absolute left-0"></div> {/* Slider track with the color #7644d8, taking up 1/4 of the width */}
        <div style={{ background: '#ccc', width: '25%' }} className="h-full absolute right-0"></div> {/* Grey track for the remaining width */}
      </div>



      {/* Upper Image */}

      <div className="flex justify-center items-center mt-4 example">
        <img src="./upperarrowgray.svg" alt="Top Image" className="h-1/2 upperarrowgray upperarrowpink" />
        <div className='overlay-textup'>        <h1 className='font-extrabold text-green-400' style={{fontSize:'20px'}}>UP</h1>
        <p className='' style={{color:'#2d1362'}}><span className='font-bold'>2.15x</span>  Payout</p>
</div>
      </div>



{/* Third Section: Rectangle with Text */}
<div className="p-4 ml-3 mr-3 border-2 border-pink-400 bg-white rounded-2xl">
  {/* Rectangle Text */}
  <p style={{color: 'black', fontSize:'12px', fontWeight: 'bold'}}>CLOSED PRICE</p>
  <div className="flex justify-between mt-2">
    <div>
      <p style={{color: '', fontSize: '22px'}} className='pricemain font-black  text-pink-400 border-bottom border-1 border-dotted' >$228.5332</p>
    </div>
    <div>
      <p style={{color: 'white'}} className='p-1 bg-pink-400 rounded-md' >↓ $-0.4141</p>
    </div>
  </div>
  <div className="flex justify-between mt-2">
    <div>
      <p style={{color: 'black', fontSize:'14px'}}>Locked Price</p>
      <p style={{color: 'black', fontSize:'16px',fontWeight: 'bold'}}>Prize Pool</p>
    </div>
    <div>
      <p className='text-end' style={{color: 'black', fontSize:'14px'}}>$228.9473</p>
      <p style={{color: 'black', fontSize:'16px',fontWeight: 'bold'}}>8.5143 BNB</p>
    </div>
  </div>
</div>






      {/* Bottom Image */}
      <div className="flex justify-center items-center example">
        <img src="./bottomarrowred.png" alt="Bottom Image" className="h-1/2" style={{ position: 'relative' }} />
        <div className='overlay-textdown'>
          <p style={{color:'white'}}><span className='font-bold'>1.87x</span> Payout</p>
          <h1 className='text-white-400 font-extrabold' style={{color:'', fontSize:'20px'}}>DOWN</h1>
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

export default Card3;
