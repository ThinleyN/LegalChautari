import { getWebinar } from "@/sanity/client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const UpcomingWebinars = async () => {
    const weinbars = await getWebinar();
    return (
        <div className='container flex items-center justify-between py-12'>
            <h2 className='text-4xl mb-6 font-bold w-1/3'>
                Upcoming Webinars
            </h2>
            <div className='mt-2 w-2/3'>
                {weinbars.map(item=> {
                    return (
                        <Link href={`/webinar/${item.slug?.current}`} key={item._id}>
                            <div className='flex py-8 group items-center justify-between cursor-pointer duration-300 transition-all hover:scale-[1.01]'>
                                <div>
                                    <h2 className='text-4xl font-bold mb-4 group-hover:underline'>{item.title}</h2>
                                    <span className='text-md text-body-color'>{item.excerpt}</span>
                                </div>
                                <FaLongArrowAltRight className='text-3xl'/>
                            </div>
                            <hr className='mb-8'/>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default UpcomingWebinars