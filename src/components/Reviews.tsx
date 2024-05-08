import { SVGProps } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import Link from 'next/link';

interface Testimonial {
  username: string;
  name: string;
  testimonial: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    username: '@shadcn',
    name: 'Irene S.',
    testimonial: 'William did a fantastic job taking care of my 100lb puppy, definitely not an easy job. Lots of pictures and videos and even a great sense of humour, He also took a great care of the apartment. Very highly recommend!',
    stars: 5
  },
  {
    username: '@shadcn',
    name: 'Lisa C.',
    testimonial: 'William took great care of our rambunctious 1yo, Riley. He was super communicative and sent many photos/videos. Riley was very comfortable with him and our house was well taken care of too! He really went above and beyond.',
    stars: 5
  },
  {
    username: '@shadcn',
    name: 'Daniel G',
    testimonial: 'William did an amazing job watching my dog Charlie for a few days while I was out of town. He was highly responsible, caring, and communicative, sending regular photos and updates. He also left the apartment clean and tidy. I could tell Charlie felt comfortable with William. I give William my highest recomendation!',
    stars: 5
  }
];

export default function Component() {
  return (
    <>
      <section className="py-12 mt-64 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What Others Have Said</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Hear from our satisfied customers and see who trusts our products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ username, name, testimonial, stars }) => (
              <div key={name} className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  {/* <Avatar className="w-10 h-10 mr-4">
                    <AvatarImage alt={username} src="/placeholder-user.jpg" />
                    <AvatarFallback>{username.toUpperCase()}</AvatarFallback>
                  </Avatar> */}
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex items-center text-yellow-500 mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} className={`w-5 h-5 ${i < stars ? '' : 'text-gray-300 dark:text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                  {testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Additional sections can be added similarly using dynamic data */}
    </>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
