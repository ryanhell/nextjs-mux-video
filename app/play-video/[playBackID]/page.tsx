import VideoCard from "@/components/VideoCard";
import React from "react";

interface Props {
  params: {
    playBackID: string;
  };
}
// drastic wise pink paddle drive slot offer fiction palm morning remind aerobic
const Page = ({ params }: Props) => {
  const { playBackID } = params;

  return (
    <div className="my-8">
      <VideoCard playbackId={playBackID} />
    </div>
  );
};

export default Page;
