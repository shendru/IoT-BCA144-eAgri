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
        <p className="text-green-700">90% - Good</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-black/30 font-bold">Last Harvest</p>
        <p>15/08/2024</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-black/30 font-bold">
          Next Harvest Prediction
        </p>
        <p>29/09/2024 - 45 Days</p>
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
      <div className="mb-5">
        <p className="text-sm text-black/30 font-bold">Soil Mosture</p>
        <p>{iot ? `${iot.field3} %` : "Loading..."}</p>
      </div>
    </section>
  );
}

export default SectionCard;
