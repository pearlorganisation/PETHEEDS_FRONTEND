import React from 'react'
import { useLocation } from 'react-router'
import parse from "html-react-parser";

const BlogDetails = () => {

    const { state } = useLocation()
    console.log("state::", state)
    return (
        <article className=" mt-4 min-h-[20rem] rounded-md duration-300 hover:shadow-sm container mx-auto py-12">
            <div className="grid  gap-3 w-[70%] mx-auto">
                <img
                    src={`${state?.banner}`}
                    loading="lazy"

                    className="w-full rounded-t-md"
                    onError={(event) => {
                        event.target.src =
                            "/placeholder.jpg";
                        event.onerror = null;
                    }}
                />
                <div className="space-y-2 py-3 flex flex-col justify-center gap-1 items-start p-1">
                    <div className=" rounded-2xl text-slate-950 bg-white w-fit font-medium flex gap-3">
                        <div className='px-3 py-2 rounded-3xl border-2 border-yellow-400 bg-yellow-400/30'>#Technology</div> <div className='px-3 py-2 rounded-3xl border-2 border-blue-400 bg-blue-400/30'>#Science</div>
                    </div>

                    <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                        <div class="flex items-center space-x-3">
                            <img
                                class="w-12 h-12 rounded-full object-cover"
                                src='https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt=""
                                onError={(event) => {
                                    event.target.src =
                                        "/placeholder.jpg";
                                    event.onerror = null;
                                }}
                            />{" "}
                            <div>
                                <span class="text-white text-sm">
                                    Abhishek Bahuguna
                                </span>
                                <span class="block text-white text-xs">
                                    abhishek@pearloraganisation
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className=" text-2xl mt-1">{state?.topic}</p>
                        <p>{state?.topicDescription}</p>
                    </div>
                </div>
                <div>
                    {
                        parse(state?.description)
                    }


                </div>
            </div>
        </article>
    )
}

export default BlogDetails