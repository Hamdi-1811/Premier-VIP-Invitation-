
import React, { useState } from 'react';
import Section from './Section';
import VideoModal from './VideoModal';
import { videoData } from '../constants';
import { VideoData } from '../types';

const VideoBelt: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

    const openModal = (video: VideoData) => {
        setSelectedVideo(video);
    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    const doubledVideos = [...videoData, ...videoData];

    return (
        <>
            <section className="video-stage w-full py-12 my-10">
                <div className="text-center">
                    <div className="section-title-bg">
                        <h3 className="text-3xl md:text-4xl font-light text-amber-500">Exclusive Performance Highlights</h3>
                    </div>
                </div>
                <div className="video-belt">
                    {doubledVideos.map((video, index) => (
                        <div
                            key={`${video.title}-${index}`}
                            className="video-item w-56 sm:w-64 flex-shrink-0 text-center text-white inline-block mx-4"
                            onClick={() => openModal(video)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && openModal(video)}
                        >
                            <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden shadow-2xl cursor-pointer group">
                                <video className="w-full h-full object-cover" muted loop playsInline autoPlay>
                                    <source src={video.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition duration-300">
                                    <svg className="w-10 h-10 text-amber-500 opacity-70" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5v14l11-7z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-3 text-sm font-light tracking-wider uppercase text-amber-500">{video.title}</p>
                            <p className="text-xs opacity-70 text-gray-400">{video.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>
            {selectedVideo && (
                <VideoModal video={selectedVideo} onClose={closeModal} />
            )}
        </>
    );
};

export default VideoBelt;