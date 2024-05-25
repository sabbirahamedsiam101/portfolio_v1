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
        <div className=" 2xl:mx-[7%] mx-[5%] relative">
            <h1 className="text-black font-labil-grotesk text-[13vw] mt-[5vw] font-semibold leading-[1.3]   lg:tracking-[-0.02em] tracking-[4px] text-left"
            > Websites & Branding
                <a href="#about" className="duration-300">
                    <button className="text-black  bg-[#F9F9F9] relative py-[1.5vw] px-[3vw] rounded-full  text-[2vw] font-semibold leading-[1.4] lg:ml-7 ml-3 tracking-[-0.01em] text-left"
                    >
                        <span>
                            <style>{keyframes}</style>
                            SCROLL DOWN <FaArrowDown className="float-end  " style={arrowStyle} />
                        </span>
                    </button>
                </a>
            </h1>

            <section className=" flex lg:flex-row flex-col lg:items-center items-start mt-6 lg:justify-between ">
                <div className="  sm:ml-5">
                    <h3 className="text-black font-labil-grotesk text-[29px] font-semibold leading-[1.3] tracking-[-0.01em] text-left"
                    > Let ' s Talk</h3>
                    <p className="text-black font-labil-grotesk text-2xl font-medium leading-[1.4] tracking-[-0.01em] text-left"
                    >sabbirahamedsiam101@gmail.com</p>
                </div>
                <div className=" max-w-[450px] mt-6 p-5 border-2 border-black">
                    <h1 className="text-black font-labil-grotesk md:text-xl text-lg font-medium leading-[1.4] tracking-wide text-left"
                    >Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.</h1>
                </div>
            </section>

        </div>
    )
}
