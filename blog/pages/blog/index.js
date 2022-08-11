import React from 'react';
import Link from 'next/link';
import {v4 as uuidv4} from "uuid";
const Index = (props) => {
    console.log(props.articles)
    return (
        <div className='container mx-auto mt-8'>
            <h1 className="text-center text-bold text-3xl font-bold">Bienvenue sur le blog</h1>
            <p className="text-center">Voici les articles</p>
            <div className="w-full px-10 mx-auto mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {props.articles.map(article=>(
                <div key={uuidv4()} className="h-[175px] px-3 py-4 shadow-sm rounded-md border">
                    <h5 className='text-md font-medium mb-2'>{article.title}</h5>
                    <p className='mb-3 text-sm text-gray-500'>{article.body.slice(0,20)+"..."}</p>
                
                    <Link href={'/blog/'+article.id.toString()}>
                    <a className="text-sm px-3 py-2 rounded-md border text-blue-600 hover:bg-blue-500 hover:text-white" >Lire cet Article</a>
                    </Link>
                </div>



            ))}   
                
                </div>     
        </div>
    );
}

export async function getStaticProps(){
    const data= await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles=await data.json();

    return {
        props:{
            articles
        }
    }
}

export default Index;
