import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate, type PanInfo } from 'framer-motion';

import evm1 from '../../assets/mit gallery/EVM/aditya.jpeg';
import ncc1 from '../../assets/mit gallery/NCC/Copy of DSC_2586.jpg.webp';
import spandan1 from '../../assets/mit gallery/spandan/TOWgame_spandan.webp';
import event1 from '../../assets/mit gallery/Events/event.jpeg';
import campus1 from '../../assets/mit gallery/campus/camp1.jpeg';

import evm2 from '../../assets/mit gallery/EVM/aman.jpeg';
import ncc2 from '../../assets/mit gallery/NCC/Copy of DSC_2873.jpg.webp';
import spandan2 from '../../assets/mit gallery/spandan/green_dance_spandan.webp';
import event2 from '../../assets/mit gallery/Events/event2.jpg';

import evm3 from '../../assets/mit gallery/EVM/judge.jpeg';
import ncc3 from '../../assets/mit gallery/NCC/IMG-20240921-WA0014.jpg.jpeg';
import spandan3 from '../../assets/mit gallery/spandan/jeet_spandan.webp';

import evm4 from '../../assets/mit gallery/EVM/mehak.jpeg';
import ncc4 from '../../assets/mit gallery/NCC/IMG-20250216-WA0106.jpg.jpeg';
import spandan4 from '../../assets/mit gallery/spandan/medal_spandan.webp';

import evm5 from '../../assets/mit gallery/EVM/visitor.jpeg';
import ncc5 from '../../assets/mit gallery/NCC/IMG_20250202_084052.jpg.webp';
import spandan5 from '../../assets/mit gallery/spandan/stage_couple_spandan.webp';

import ncc6 from '../../assets/mit gallery/NCC/IMG_20250520_161935.jpg.webp';
import spandan6 from '../../assets/mit gallery/spandan/teacher_spandan.webp';

const items = [

    { id: 1, url: ncc1, title: 'NCC' },
    { id: 2, url: spandan1, title: 'Spandan' },
    { id: 3, url: event1, title: 'Events' },
    { id: 4, url: campus1, title: 'Campus' },
    { id: 5, url: evm1, title: 'EVM' },

    { id: 6, url: evm2, title: 'EVM' },
    { id: 7, url: ncc2, title: 'NCC' },
    { id: 8, url: spandan2, title: 'Spandan' },
    { id: 9, url: event2, title: 'Events' },

    { id: 10, url: evm3, title: 'EVM' },
    { id: 11, url: ncc3, title: 'NCC' },
    { id: 12, url: spandan3, title: 'Spandan' },

    { id: 13, url: evm4, title: 'EVM' },
    { id: 14, url: ncc4, title: 'NCC' },
    { id: 15, url: spandan4, title: 'Spandan' },

    { id: 16, url: evm5, title: 'EVM' },
    { id: 17, url: ncc5, title: 'NCC' },
    { id: 18, url: spandan5, title: 'Spandan' },

    { id: 19, url: ncc6, title: 'NCC' },
    { id: 20, url: spandan6, title: 'Spandan' },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

interface ThumbnailsProps {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnails({ index, setIndex }: ThumbnailsProps) {
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (thumbnailsRef.current) {
            let scrollPosition = 0;
            for (let i = 0; i < index; i++) {
                scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
            }

            scrollPosition += MARGIN_PX;

            const containerWidth = thumbnailsRef.current.offsetWidth;
            const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
            scrollPosition -= centerOffset;

            thumbnailsRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [index]);

    return (
        <div
            ref={thumbnailsRef}
            className='overflow-x-auto'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
            <div className='flex gap-0.5 h-20 pb-2' style={{ width: 'fit-content' }}>
                {items.map((item, i) => (
                    <motion.button
                        key={item.id}
                        onClick={() => setIndex(i)}
                        initial={false}
                        animate={i === index ? 'active' : 'inactive'}
                        variants={{
                            active: {
                                width: FULL_WIDTH_PX,
                                marginLeft: MARGIN_PX,
                                marginRight: MARGIN_PX,
                            },
                            inactive: {
                                width: COLLAPSED_WIDTH_PX,
                                marginLeft: 0,
                                marginRight: 0,
                            },
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className='relative shrink-0 h-full overflow-hidden rounded'
                    >
                        <img
                            src={item.url}
                            alt={item.title}
                            className='w-full h-full object-cover pointer-events-none select-none'
                            draggable={false}
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

export default function ThumbnailCarousel() {
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);

    useEffect(() => {
        if (!isDragging && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth || 1;
            const targetX = -index * containerWidth;

            animate(x, targetX, {
                type: 'spring',
                stiffness: 400,
                damping: 40,
            });
        }
    }, [index, x, isDragging]);

    // Auto-slide functionality
    useEffect(() => {
        if (isDragging) return;

        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [isDragging]);

    return (
        <div className='w-full max-w-[1000px] mx-auto px-4 lg:px-10 pb-8'>
            <div className="section-chip" style={{ justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <span className="chip-dot"></span>Memories
            </div>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                Life at <span>MIT Indore</span>
            </h2>
            <div className='flex flex-col gap-3'>
                {/* Main Carousel */}
                <div className='relative overflow-hidden rounded-lg bg-black' ref={containerRef}>
                    <motion.div
                        className='flex'
                        drag='x'
                        dragConstraints={{ left: -((items.length - 1) * (containerRef.current?.offsetWidth || 1000)), right: 0 }}
                        dragElastic={0.05}
                        dragMomentum={true}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
                            setIsDragging(false);
                            const containerWidth = containerRef.current?.offsetWidth || 1;
                            const offset = info.offset.x;
                            const velocity = info.velocity.x;

                            let newIndex = index;

                            // If fast swipe, use velocity
                            if (Math.abs(velocity) > 400) {
                                newIndex = velocity > 0 ? index - 1 : index + 1;
                            }
                            // Otherwise use offset threshold (20% of container width)
                            else if (Math.abs(offset) > containerWidth * 0.2) {
                                newIndex = offset > 0 ? index - 1 : index + 1;
                            }

                            // Clamp index
                            newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                            setIndex(newIndex);
                        }}
                        style={{ x, cursor: isDragging ? 'grabbing' : 'grab' }}
                        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    >
                        {items.map((item) => (
                            <div key={item.id} className='shrink-0 w-full h-[300px] md:h-[500px] flex justify-center items-center'>
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className='w-full h-full object-cover rounded-lg pointer-events-none select-none drop-shadow-md'
                                    draggable={false}
                                    loading={Math.abs(index - items.findIndex(i => i.id === item.id)) <= 1 ? "eager" : "lazy"}
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Previous Button */}
                    <motion.button
                        disabled={index === 0}
                        onClick={() => setIndex((i) => Math.max(0, i - 1))}
                        className={`absolute left-4 text-black top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === 0
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M15 19l-7-7 7-7'
                            />
                        </svg>
                    </motion.button>

                    {/* Next Button */}
                    <motion.button
                        disabled={index === items.length - 1}
                        onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
                        className={`absolute text-black right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${index === items.length - 1
                                ? 'opacity-40 cursor-not-allowed'
                                : 'bg-white hover:scale-110 hover:opacity-100 opacity-70'
                            }`}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                            />
                        </svg>
                    </motion.button>

                    {/* Image Counter */}
                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
                        {index + 1} / {items.length}
                    </div>

                    {/* Title Overlay */}
                    <div className='absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg'>
                        <h3 className="text-lg font-medium shadow-sm">{items[index].title}</h3>
                    </div>
                </div>

                <Thumbnails index={index} setIndex={setIndex} />
            </div>
        </div>
    );
}
