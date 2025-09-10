"use client";
import ArticlePreview from "@/components/ArticlePreview";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Dropdown, { OptionsProp } from "@/components/atoms/Select";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchParam {
    category: string;
    search: string;
}

const defaultCategory = {
    label: 'All', value: ''
}

const NewsJournal = () => {
    const params = useParams();
    const router = useRouter();

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchParams, setSearchParams] = useState({} as SearchParam);
    const [filteredArticles, setFilteredArticles] = useState([]);

    const fetchedArticles = async () => {
        const articles = await axios.get('/api/articles');
        setArticles(articles.data);
        setFilteredArticles(articles.data);
    }

    const buildCategoryOptions =  async() => {
        const res = await axios.get('/api/used-article-categories');
        const options = res.data.map(item => {
            return {
                label: item,
                value:  item
            }
        })
        setCategories([defaultCategory ,...options]);
        console.log(res, "resss")
    }

    useEffect(()=> {
        fetchedArticles(); 
        buildCategoryOptions();
    },[])

    const handleSelect = (item: OptionsProp) => {
        setSearchParams({...searchParams, category: item.value})
    }

    useEffect(() => {
        if(searchParams.category == ''){
            setFilteredArticles(articles);
            return;
        }
        const filtered = articles.filter(item => item.categories == searchParams.category);
        setFilteredArticles(filtered);
    },[searchParams])

    return (
        <>
        <Breadcrumb
            pageName="News & Journal"
            description=""
        />
        <div className="container py-16">
            <div className="mb-12 w-1/3">
                <label className="mb-2 block">Categories:</label>
                <Dropdown instanceId={'categories'} options={categories} onChange={handleSelect}/>
            </div>

            <div className="flex flex-wrap flex-col lg:flex-row gap-8 mt-2">
                {filteredArticles.map(item => {
                    return (
                        <ArticlePreview key={item._id} data={item}  />
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default NewsJournal;