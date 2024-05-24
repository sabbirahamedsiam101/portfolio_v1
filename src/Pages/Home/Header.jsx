import { FaArrowDown } from "react-icons/fa";
export default function Header() {
    const arrowStyle = {
        display: 'inline-block',
        marginLeft: '0.5rem',
        marginTop: '0.5rem',
        animation: 'upDown 1.5s ease-in-out infinite',
    };

    const keyframes = `
    @keyframes upDown {
      0%, 100% { 
        transform: translateY(0);
        color: red; 
      }
      50% { 
        transform: translateY(-10px);
        color: black ; 
      }
    }
  `;
    return (
        <div className=" mx-[7%]">
            <h1 className="text-black font-labil-grotesk text-[13vw] mt-[5vw] font-semibold leading-[0.9] tracking-[-0.02em] text-left"
            > Websites & Branding
                <button className="text-black  bg-[#F9F9F9] relative  py-6 px-10 rounded-full  text-[20px] font-semibold leading-[1.4] ml-7 tracking-[-0.01em] text-left"
                >
                    <span>
                        <style>{keyframes}</style>
                        SCROLL DOWN <FaArrowDown className="float-end  " style={arrowStyle} />
                    </span>
                </button>
            </h1>
        </div>
    )
}
