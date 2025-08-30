import ArticlePreview from '@/components/ArticlePreview';
import { FaLongArrowAltRight } from "react-icons/fa";

const UpcomingWebinars = () => {
    const articles = [
        {
            id: 0,
            title: 'Title',
            shortDesc: 'Thursday 4 September | Register now!'
        },
        {
            id: 1,
            title: 'Title',
            shortDesc: 'Thursday 4 September | Register now!'
        },
        {
            id: 2,
            title: 'Title',
            shortDesc: 'Apply now for a chance to network with top law firms in London, Manchester or virtually this winter!'
        }
    ]
    return (
        <div className='container flex items-center justify-between py-12'>
            <h2 className='text-4xl mb-6 font-bold w-1/3'>
                Upcoming Webinars
            </h2>
            <div className='mt-2 w-2/3'>
                {articles.map(item=> {
                    return (
                        <div key={item.id}>
                            <div className='flex py-8 group items-center justify-between cursor-pointer duration-300 transition-all hover:scale-[1.01]'>
                                <div>
                                    <h2 className='text-4xl font-bold mb-4 group-hover:underline'>{item.title}</h2>
                                    <span className='text-md text-body-color'>{item.shortDesc}</span>
                                </div>
                                <FaLongArrowAltRight className='text-3xl'/>
                            </div>
                            <hr className='mb-8'/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default UpcomingWebinars