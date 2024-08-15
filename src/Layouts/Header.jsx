import React from "react";

export default function Header({children}) {
  return (
    <header>
        {children}

        {/* header contents */}
        <div className="flex lg:flex-row flex-col px-20 items-stretch pt-8">   
            <div className="content-section flex-1 self-center">
                <div class="title text-[64px] leading-[74px] text-center pb-12 font-medium font-[Poppins]">
                    <span className="text-indigo-500">Better<br /></span> Cloud Financial<br /> Intelligence.
                </div>
                <div className="text-center text-[16px] pb-10 font-[Poppins]">Ternary supports the lifecycle of your cloud spend.</div>
                <div className="text-center">
                    <button className="bg-indigo-500 rounded-full text-white py-3 px-6 font-[Poppins]">
                        Book a demo
                    </button>
                </div>
            </div>
            <div className="flex-1 flex gap-3">
                <div className="flex-1 h-full flex flex-col gap-3">
                    <div className="bg-[#013281] rounded-lg px-6 py-3 lg:h-[90%]">
                        <div class="amount pb-1">$7.5B+</div>
                        <div className="count-des">Cloud spend under<span class="lg:block inline"> manangement</span></div>
                        <div className="pt-8">
                            <div className="peak py-[3.5px] rounded-full bg-[#0066DC] mb-2 w-[100%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0066DC] mb-2 w-[95%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0063D8] mb-2 w-[90%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0061D2] mb-2 w-[85%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#005ECF] mb-2 w-[80%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#005AC8] mb-2 w-[75%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0058C4] mb-2 w-[70%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0055BF] mb-2 w-[65%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0053BB] mb-2 w-[60%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0150B7] mb-2 w-[55%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#004DB1] mb-2 w-[50%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#014BAC] mb-2 w-[45%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0048A7] mb-2 w-[40%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#0045A4] mb-2 w-[35%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#01429E] mb-2 w-[30%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#00409A] mb-2 w-[25%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#003E95] mb-2 w-[20%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#013A91] mb-2 w-[15%]"></div>
                            <div className="peak py-[3.5px] rounded-full bg-[#00378A] mb-2 w-[10%]"></div>
                        </div>
                    </div>
                    <div className="bg-[#013281] rounded-lg px-5 py-5">
                        <div class="amount pb-1">55</div>
                        <div className="count-des">Major features releases in 2023</div>
                    </div>
                </div>
                <div className="flex-1 h-full flex flex-col gap-3">
                    <div className="bg-[#013281] rounded-lg px-5 py-5">
                        <div class="amount pb-1">$1.5B+</div>
                        <div className="count-des">Costs savings realized</div>
                    </div>
                    <div className="bg-[#013281] rounded-lg px-6 py-3">
                        <div class="amount pb-1">$25K+</div>
                        <div className="count-des">New anomalies this quarter</div>
                        <div className="pt-8">
                            <img src="./assets/Images/group_11.webp" width="90%" alt="card3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
