import { getInternships } from '@/sanity/client';
import InternshipPreview from '../atoms/InternshipPreview';

export const revalidate = 0;

const InternshipOfTheWeek = async() => {
    const internships = await getInternships();
    console.log(internships, "inter")
    return (
        <div className='container py-12'>
            <h2 className='!text-4xl mb-6 font-bold'>
                Intership of the Week
            </h2>
            <hr className='mb-5'></hr>
            <div className='flex flex-col lg:flex-row gap-8 mt-2'>
                {internships.map(item=> {
                    return (
                        <InternshipPreview key={item._id} data={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default InternshipOfTheWeek