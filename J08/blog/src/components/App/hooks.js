import { useEffect, useState } from "react";
import axios from 'axios';

// Par convention, les custom hooks commenceront toujours pas use.
export const useApi = () => {
    const [isZen, setIsZen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // console.log(categoriesData);
    // console.log(postsData);

    const fetchDatasFromApi = async () => {
        setIsLoading(true);

        const { data: categories } = await axios("https://oblog-react.vercel.app/api/categories");
        const { data: posts } = await axios("https://oblog-react.vercel.app/api/posts");

        setCategories(categories);
        setPosts(posts);

        setIsLoading(false);
    }

    useEffect(() => {
        fetchDatasFromApi();
    }, [])

    return {
        isZen, setIsZen, categories, posts, isLoading
    }
}