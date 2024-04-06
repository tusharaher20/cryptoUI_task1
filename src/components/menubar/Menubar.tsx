import React from 'react';

interface MenubarProps {
  scrollLeftHandler: () => void;
  scrollRightHandler: () => void;
}

const Menubar: React.FC<MenubarProps> = ({ scrollLeftHandler, scrollRightHandler }) => {
  const isMobile = window.innerWidth < 768; // Define the breakpoint for mobile screens

  return (
    <div style={{ background: '#c3ceea' }} className="w-full flex justify-between items-center h-20 bg-gray-200 px-4">
      {/* Left Section */}
      {!isMobile && (
        <div className="flex items-center">
          <div className="flex-grow"> {/* Flex-grow to push the input to the end */}
            <div className="flex items-center">
              <img width={'60px'} src='./bitcoinlogo.png' className="mr--4 relative left-6" />
              <div className="flex-grow">
                <div className="p-2 bg-white rounded-lg border text-black border-gray-300"><span className='font-black'>&nbsp;&nbsp;&nbsp; BNBUSD</span> <span className='text-xs bottomCssMain font-bold relative'>$228.53332</span> </div>
              </div>
              <button className="flex items-center bg-transparent border-none">
                {/* SVG icon here */}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Center Section */}
      <div className="bg-white rounded-xl p-4 flex items-center justify-between w-36 relative">
        <button onClick={scrollLeftHandler} className="button absolute left-0">
          <img width={'20px'} src='./leftarrow.svg' className="mr-4" alt="Left Arrow" />
        </button>
        <button onClick={scrollRightHandler} className="button absolute right-0">
          <img width={'20px'} src='./rightarrow.svg' className="ml-4" alt="Right Arrow" />
        </button>
        <img width={'60px'} src='./purplecards.png' style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '-20px' }} alt="Purple Cards" />
      </div>

      {/* Right Section */}
      {!isMobile && (
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="flex-grow"> {/* Flex-grow to push the input to the end */}
              <div className="flex items-center">
                <div className="flex-grow">
                  <div className="p-2 bg-white rounded-lg border text-black border-gray-300"><span className='font-black'>00:38</span> <span className='text-xs bottomCssMain font-bold relative '>5m &nbsp;&nbsp;&nbsp;</span> </div>
                </div>
                <img width={'60px'} src='./clockicon.png' className="mr--4 relative right-5" />
                <button className="flex items-center bg-transparent border-none">
                  {/* SVG icon here */}
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center bg-white rounded-lg border-none p-2 ">
              <img width={'20px'} src='./questionmarkicon.svg' className="mr--4" />
            </button>
            <button className="flex items-center bg-white rounded-lg border-none p-2">
              <img width={'20px'} src='./trophy.svg' className="mr--4" />
            </button>
            <button className="flex items-center bg-white rounded-lg border-none p-2">
              <img width={'20px'} src='./tiemr.svg' className="mr--4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
