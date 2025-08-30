import ArticlePreview from '@/components/ArticlePreview';
import { getArticles } from '@/sanity/client';

const LatestArticles = async () => {
    const fetchedArticles = await getArticles();
    return (
        <div className=''>
            <div className='container py-12 light:bg-primary'>
                <h2 className='text-4xl mb-6 font-bold ' >
                    Latest Articles
                </h2>
                <hr className='mb-5'></hr>
                <div className='flex gap-8 mt-2'>
                    {fetchedArticles.map(item=> {
                        return (
                            <ArticlePreview 
                                key={item._id} 
                                data={item} 
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LatestArticles