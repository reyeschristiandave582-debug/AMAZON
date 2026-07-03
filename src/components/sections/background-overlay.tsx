import React from 'react';
import { Star, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-green-500 animate-rotate-slow" />
        <Star className="absolute top-40 left-10 w-8 h-8 text-accent animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-8 h-8 text-accent animate-twinkle" />
        <Gift className="absolute bottom-40 left-16 w-8 h-8 text-green-500 animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-8 h-8 text-accent animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-green-500 animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-accent animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
          <Image
            src="https://i.imgur.com/WyguY7V.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-20 left-10 w-17 h-17 object-contain animate-float-gentle delay-1000"
          />
          <Image
            src="https://i.imgur.com/K38Fcjd.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-32 right-10 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/7Ni7oOc.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/3 left-20 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/2dGIWwB.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/1 right-24 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/4p9VUYh.png"
            alt=""
            width={160}
            height={160}
            className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/wBDFHJB.png"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-32 right-20 w-20 h-20 object-contain animate-float-gentle"
          />
      </div>
    </>
  );
};


export default AnimatedBackground;

