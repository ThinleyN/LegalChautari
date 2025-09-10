import ArticlePreview from '@/components/ArticlePreview';
import { getFeaturedArticle } from '@/sanity/client';

export const revalidate = 0;

const LatestArticles = async () => {
    const fetchedArticles = await getFeaturedArticle();
    console.log(fetchedArticles, "feature")
    return (
        <div className=''>
            <div className='container py-12 light:bg-primary'>
                <h2 className='!text-4xl mb-6 font-bold ' >
                    Latest Articles
                </h2>
                <hr className='mb-5'></hr>
                <div className='flex flex-col lg:flex-row gap-8 mt-2'>
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