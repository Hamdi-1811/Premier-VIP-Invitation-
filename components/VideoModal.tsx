
import React, { useEffect, useRef } from 'react';
import { VideoData } from '../types';

interface VideoModalProps {
    video: VideoData;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && modalRef.current === e.target) {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={modalRef} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
            <div className="relative w-full max-w-5xl">
                <button 
                    onClick={onClose} 
                    className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-500 transition z-10"
                    aria-label="Close video player"
                >
                    &times;
                </button>
                <div className="bg-black rounded-lg overflow-hidden border-2 border-amber-500/50">
                    <video controls autoPlay className="w-full" style={{ maxHeight: '80vh' }}>
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p id="video-modal-title" className="text-white text-center mt-4 text-xl font-semibold">{video.title}</p>
            </div>
        </div>
    );
};

export default VideoModal;