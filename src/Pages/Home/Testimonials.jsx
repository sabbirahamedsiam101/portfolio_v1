import { useEffect, useState } from "react";
import TestimonialCard from "../../Componets/TestimonialCard";

export default function Testimonials() {
    const [reviews, setReviews] = useState([])
    // const reviews = [

    //     {
    //       name: 'Daniella Doe',
    //       role: 'Mobile dev',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/12.jpg',
    //       review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //     {
    //       name: 'Jane Doe',
    //       role: 'Marketing',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/14.jpg',
    //       review: 'Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //     {
    //       name: 'Yanick Doe',
    //       role: 'Developer',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/18.jpg',
    //       review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //     {
    //       name: 'Jane Doe',
    //       role: 'Mobile dev',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/2.jpg',
    //       review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //     {
    //       name: 'Andy Doe',
    //       role: 'Manager',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/62.jpg',
    //       review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //     {
    //       name: 'Yanndy Doe',
    //       role: 'Mobile dev',
    //       imgSrc: 'https://randomuser.me/api/portraits/women/19.jpg',
    //       review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.'
    //     },
    //   ];

    useEffect(() => {
        fetch(`/reviews.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (
        <div className="text-gray-600  my-14 " id="reviews">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-gray-800  md:text-4xl">
                        We have some fans.
                    </h2>
                </div>
                <div className="md:columns-2 hau lg:columns-3 gap-8 space-y-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="aspect-auto p-8 border-2 border-gray-100 hover:border-blue-400 duration-300 hover:scale-105 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 "
                        >
                            <div className="flex gap-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={review.imgSrc}
                                    alt="user avatar"
                                    width="400"
                                    height="400"
                                    loading="lazy"
                                />
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 ">{review.name}</h6>
                                    <p className="text-sm text-gray-500 ">{review.role}</p>
                                </div>
                            </div>
                            <p className="mt-8">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
