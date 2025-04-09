/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

export default function BlogCarousel() {
  interface Blog {
    id: number;
    image: string;
    title: string;
    category: string;
    link: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const skeletonCards = 5;
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(true);
      
      try {
        const response = await fetch('/assets/blogs/blogs.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (blogs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (blogs.length - visibleCards + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [blogs.length, visibleCards]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 32; 
      carouselRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }
  }, [currentIndex, visibleCards]);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, blogs.length - visibleCards));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, blogs.length - visibleCards));
  };

  return (
    <div className="relative max-w-full mx-auto py-32 px-6">
      <div className="flex flex-col">
        <div className="text-[50px] w-[300px] font-[500] text-[#414141] text-left">Our Latest</div>
        <div className="text-[50px] w-[300px] font-[500] text-[#414141] text-left -mt-4 mb-6">Blogs</div>
      </div>
    
      <div className="relative overflow-hidden">
        {blogs.length > 0 && (
          <button
            onClick={prevSlide}
            style={{ backgroundColor: '#BA24D5' }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10"
            disabled={currentIndex === 0}
            aria-label="Previous blog posts"
            aria-disabled={currentIndex === 0}
          >
            <FaChevronLeft size={20} />
            
          </button>
        )}
        {blogs.length > 0 && (
          <button
            onClick={nextSlide}
            style={{ backgroundColor: '#BA24D5' }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-lg cursor-pointer text-white text-3xl hover:bg-purple-700 transition z-10"
            disabled={currentIndex >= blogs.length - visibleCards}
            aria-label="Next blog posts"
            aria-disabled={currentIndex >= blogs.length - visibleCards}
          >
            <FaChevronRight size={20} />

          </button>
        )}
        
        {loading ? (
          <div className="flex gap-8">
            {[...Array(skeletonCards)].map((_, i) => (
              <div key={i} className="flex-shrink-0 rounded w-[300px]">
                <Skeleton height={400} />
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-visible">
            <div 
              ref={carouselRef}
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{ width: `${blogs.length * (426 + 32)}px` }} 
            >
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="flex-shrink-0 w-[426px]"
                >
                  <div className="bg-white shadow-lg flex flex-col h-[470px] overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="relative w-full h-[246px] bg-gray-100">
                      {!loadedImages[blog.id] && (
                        <Skeleton className="absolute inset-0" />
                      )}
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        loading={index < visibleCards ? 'eager' : 'lazy'}
                        onLoadingComplete={() => handleImageLoad(blog.id)}
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="pt-5 pb-10 px-5 grid grid-rows-[20%_50%_30%] gap-5">
                      <p className="text-[14px] font-[600] text-[#333333]">{blog.category}</p>
                      <h3 className="text-[18px] font-[600] text-[#333333]">{blog.title}</h3>
                      <Link href={`/blog/${blog.id}`} className="text-[#333333] text-[16px] font-[500] underline underline-offset-2 hover:text-purple-600">
                        Read Blog
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-center mt-8 space-x-4">
          {blogs.length > 0 && [...Array(Math.max(blogs.length - visibleCards + 1, 1))].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition ${
                index === currentIndex ? 'w-4 h-4 bg-[#BA24D5]' : 'bg-[#999999]'
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}