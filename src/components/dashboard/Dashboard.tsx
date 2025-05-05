import React from "react";
import GoatTestImage from "../../assets/goat-test-img.jpg";
import GoatLiveFootage from "../../assets/video/goat-live.mp4";

function Dashboard() {
  return (
    <section className="bg-transparent flex-1 flex flex-col xl:flex-row-reverse gap-[1rem]">
      <div className="flex-1/3 bg-[#ECECEC] rounded-lg overflow-hiddend">
        <video autoPlay loop muted className="rounded-md">
          <source src={GoatLiveFootage} type="video/mp4" />
        </video>
        {/* <img
          className="w-full rounded-md object-contain"
          src={GoatTestImage}
          alt=""
        /> */}
      </div>
      <div className="flex-1 bg-[#ECECEC] rounded-lg">
        <section className="flex text-center justify-between border-b-2 border-[#E5E5E5] mx-[1rem] h-[5%]">
          <div className="ml-[1rem] h-full">Tab 1</div>
          <div className="border-b-2 h-full">Tab 2</div>
          <div className="h-full">Tab 3</div>
          <div className="h-full">Tab 4</div>
          <div className="mr-[1rem] h-full">Tab 5</div>
        </section>
      </div>
    </section>
  );
}

export default Dashboard;
