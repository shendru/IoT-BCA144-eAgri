import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  sectionName: string;
}

function SectionCard({ setActiveSection, sectionName }: Props) {
  const [iot, setIOT] = useState<any>();

  useEffect(() => {
    async function fetchThingSpeakData() {
      const channelID = "2947060";
      const apiKey = "PARCRO443GXQRC7G";
      const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?results=1&api_key=${apiKey}`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        let feeds = data.feeds;

        setIOT(feeds[0]);
        console.log("Gathering IoT Data");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchThingSpeakData();

    const interval = setInterval(fetchThingSpeakData, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Updated IoT Data:", iot);
  }, [iot]);
  return (
    <section className="absolute px-5 bg-white w-[20%] right-[0.5rem] top-[0.5rem] rounded-lg">
      <X
        className="absolute cursor-pointer right-[1rem] top-[0.3rem]"
        onClick={() => setActiveSection("")}
      />
      <p className="font-bold my-5">{sectionName}</p>
      <div className="mb-2">
        <p className="text-sm text-black/30 font-bold">Plant</p>
        <p>{"Calamansi (microcarpa)"}</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-black/30 font-bold">Health</p>
        <p
          className={`${
            sectionName === "Section 4" || sectionName === "Section 5"
              ? "text-yellow-500"
              : "text-green-700"
          }`}
        >
          {sectionName === "Section 4"
            ? "76% - Okay"
            : sectionName === "Section 5"
            ? "57% - Poor"
            : "95% - Good"}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-black/30 font-bold">Last Harvest</p>
        <p>15/08/2025</p>
      </div>
      <div className="mb-2">
        {sectionName === "Section 1" && (
          <>
            <p className="text-sm text-green-700 font-bold">Ready To Harvest</p>
          </>
        )}
        {sectionName !== "Section 1" && (
          <>
            <p className="text-sm text-black/30 font-bold">
              Next Harvest Prediction
            </p>
            <p>20/06/2025 - 45 Days</p>
          </>
        )}
      </div>
      <div className="border-b-1 border-black/20 mb-2"></div>
      <div className="flex mb-2">
        <div className="flex-1">
          <p className="text-sm text-black/30 font-bold">Humidity</p>
          <p>{iot ? `${iot.field2} %` : "Loading..."}</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-black/30 font-bold">Temperature</p>
          <p>{iot ? `${iot.field1} °C` : "Loading..."}</p>
        </div>
      </div>
      <div className="flex mb-5">
        <div className="flex-1">
          <p
            className={`text-sm ${
              sectionName === "Section 4" ? "text-red-500" : "text-black/30"
            } font-bold`}
          >
            Soil Moisture
          </p>
          {sectionName !== "Section 4" && (
            <p>{iot ? `${iot.field3} %` : "Loading..."}</p>
          )}
          {sectionName === "Section 4" && <p>{"0.0037 %"}</p>}
        </div>
        <div className="flex-1">
          <p
            className={`text-sm ${
              sectionName === "Section 5" ? "text-red-500" : "text-black/30"
            } font-bold`}
          >
            pH Level
          </p>
          {sectionName === "Section 5" && <p>4.3</p>}
          {sectionName !== "Section 5" && <p>7.2</p>}
        </div>
      </div>
    </section>
  );
}

export default SectionCard;
