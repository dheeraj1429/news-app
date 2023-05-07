import SearchComponent from '@/Components/SearchComponent/SearchComponent';
import CartComponent from '@/Components/CartComponent/CartComponent';
import { useEffect, useState } from 'react';

const getData = async function (query) {
   const matchesNews = await fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${query}&safeSearch=Off&textFormat=Raw&freshness=Day&count=12`,
      {
         headers: {
            'x-rapidapi-key':
               'f711544f45msh11267e28666b41cp1770e1jsnb523c9fc2989',
         },
      }
   );
   const response = await matchesNews.json();
   return response;
};

export default function Home({ data }) {
   const [Search, setSearch] = useState(null);
   const [SearchData, setSearchData] = useState(null);

   const searchHandler = function (value) {
      setSearch(value);
   };

   useEffect(() => {
      if (Search) {
         getData(Search).then((res) => {
            setSearchData(res);
         });
      }
   }, [Search]);

   return (
      <div className="p-5 bg-gray-50 w-full h-screen">
         <SearchComponent event={searchHandler} />
         {!!data && (
            <div className="py-5">
               <CartComponent data={SearchData || data} />
            </div>
         )}
      </div>
   );
}

export async function getStaticProps() {
   const response = await getData('cracket');

   return {
      props: {
         data: response,
      },
      revalidate: 1,
   };
}
