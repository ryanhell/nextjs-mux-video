"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RenderVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch("/api/mux/list");
      const data = await res.json();
      setVideos(data.data || []);
      console.log("videos", data.data);
    };
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <h2>Video Evidence:</h2>
      <p>
      These are the videos which the prosecutor forwarded to me after nearly an entire YEAR. I had finally forced them to hand over as is, by submitting my own motion for evidence under due process discovery laws, since JUSTIN TITUS AND SEAN ESTWORTHY of Chelan Public public defenders refused to engage and obtain. I also files for a FORENSICS PRESERVATION MOTION which commically caught the prosecutor off guard and caused near panic it appeared. JUDGE JORDAN had ruled over my foreensics preservation somehow it was not my right to contest they had ALTERED the evidence.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-6 py-6">
      {videos.map((video: any) =>
        video.playback_ids?.[0] ? (
          <Link
            href={`/play-video/${video.playback_ids?.[0].id}`}
            key={video.id}
            className=""
          >
            <Image
              //   src={video.thumbnailUrl}
              src={`https://image.mux.com/${video.playback_ids?.[0].id}/thumbnail.jpg?time=5`}
              alt={video.title}
              className="object-cover rounded"
              height={300}
              width={500}
            />
            <h3 className="mt-2 text-center">{video.title}</h3>
          </Link>
        ) : null
      )}
    </div>
  );
};

export default RenderVideos;
