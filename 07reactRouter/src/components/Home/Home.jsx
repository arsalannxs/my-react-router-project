import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            React Development
                            <span className="hidden sm:block text-3xl mt-2 text-gray-500">
                                Made Simple & Fast
                            </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition-all duration-200"
                            to="/about"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </div>

                {/* Top/Hero Image */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex items-center justify-start sm:px-10">
                    <img 
                        className="w-96 rounded-2xl shadow-xl border border-gray-200" 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                        alt="Developer Workspace" 
                    />
                </div>
            </aside>

            {/* Bottom Large Image */}
            <div className="grid place-items-center sm:mt-20 mt-10 px-4">
                <img 
                    className="sm:w-3/4 w-full rounded-3xl shadow-2xl" 
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&q=80" 
                    alt="Code Editor Dark Mode" 
                />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-14 font-semibold text-gray-800">
                Build Awesome UIs with React Router
            </h1>
        </div>
    );
}