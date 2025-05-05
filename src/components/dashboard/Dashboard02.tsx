import React from "react";
import { useState } from "react";
import GreenHouse from "../../assets/greenhouse.jpeg";
import Plant1 from "../../assets/plant_1.png";
import Plant2 from "../../assets/plant_2.png";
import Plant3 from "../../assets/plant_3.png";
import Plant4 from "../../assets/plant_4.png";
import Plant5 from "../../assets/plant_5.png";
import Plant6 from "../../assets/plant_6.png";
import { Maximize, CircleHelp, CircleDot } from "lucide-react";
import SectionCard from "../card/SectionCard";

function Dashboard() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [analytic, setAnalytic] = useState<boolean>(true);

  return (
    <div className="flex-1 flex">
      <section className="w-[25%] bg-white shadow-2xl">
        <div className="mx-[2rem]">
          <div className="mt-[4rem] mb-[2rem] h-[2rem] flex items-center">
            <p className="font-bold text-2xl">Plant Section Overview</p>
          </div>
          <div>
            <p className="font-bold mb-3">Overall health:</p>
            <div className="flex">
              <div className="w-[30%] flex">
                <p className="text-[3rem] items-center">
                  92<span className="text-black/40 text-[2rem]">%</span>
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex">
                  <p className="px-2 text-sm text-white bg-green-600 rounded-3xl">
                    Good
                  </p>
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[1rem] mt-[1rem]">
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
              <section className="bg-[#DCDCDC] flex justify-between p-2 rounded-lg">
                <div>
                  <p>Section 1</p>
                  <p>Calamansi</p>
                </div>
                <div>95%</div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1">
        <div className="mx-[2rem]">
          <div className="mt-[4rem] h-[2rem] flex items-center mb-[2rem]">
            <p className="font-bold text-2xl">Greenhouse Monitoring</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-lg">
            <img className="w-full h-auto block" src={GreenHouse} alt="" />
            {activeSection === "" && (
              <>
                <div className="absolute right-[25%] bottom-[25%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 1</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 1");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute left-[43.1%] bottom-[20%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 2</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 2");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute left-[20%] bottom-[25%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 3</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 3");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute right-[40%] bottom-[40%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 4</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 4");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute right-[50%] bottom-[37%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 5</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 5");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute left-[34%] bottom-[40%] flex flex-col items-center gap-2">
                  <div className="border-white/20 text-white bg-white/10 backdrop-blur-md border px-2 rounded-3xl">
                    <p>Section 6</p>
                  </div>
                  <div
                    className="cursor-pointer rounded-full border-white/20 text-white bg-white/30 backdrop-blur-md border p-1 w-fit"
                    onClick={() => {
                      setActiveSection("Section 6");
                    }}
                  >
                    <CircleDot className="w-4 h-4" />
                  </div>
                </div>
              </>
            )}
            {activeSection === "Section 1" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant1}
                alt=""
              />
            )}
            {activeSection === "Section 2" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant2}
                alt=""
              />
            )}
            {activeSection === "Section 3" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant3}
                alt=""
              />
            )}
            {activeSection === "Section 4" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant4}
                alt=""
              />
            )}
            {activeSection === "Section 5" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant5}
                alt=""
              />
            )}
            {activeSection === "Section 6" && (
              <img
                className="flex-1 h-full w-full absolute top-0"
                src={Plant6}
                alt=""
              />
            )}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white absolute left-[1.1rem] top-[1.1rem] flex rounded-md overflow-hidden w-[12rem] shadow-lg">
              <div
                className={`w-1/2 py-[.7rem] px-[1.3rem] hover:rounded-tr-md hover:rounded-br-md hover:bg-gray-800/40 ${
                  analytic && "bg-gray-800/40 rounded-tr-md rounded-br-md"
                } cursor-pointer text-center transition`}
              >
                Analytic
              </div>
              <div className="w-1/2 py-[.7rem] px-[1.3rem] hover:rounded-tl-md hover:rounded-bl-md hover:bg-gray-800/40 cursor-pointer text-center transition">
                CCTV
              </div>
            </div>
            <div className="absolute flex justify-between w-[5rem] bottom-[1.1rem] left-[1.1rem] bg-white/30 backdrop-blur-md border border-white/20 text-white px-2 py-2 rounded-md shadow-lg">
              <Maximize className="cursor-pointer" />
              <CircleHelp className="cursor-pointer" />
            </div>

            {activeSection !== "" && (
              <SectionCard
                setActiveSection={setActiveSection}
                sectionName={activeSection}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
