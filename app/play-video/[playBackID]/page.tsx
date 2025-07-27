import VideoCard from "@/components/VideoCard";
import React from "react";

interface Props {
  params: {
    playBackID: string;
  };
}

const Page = ({ params }: Props) => {
  const { playBackID } = params;

  return (
    <div className="my-8">
      <VideoCard playbackId={playBackID} />
    </div>
  );
};

export default Page;
