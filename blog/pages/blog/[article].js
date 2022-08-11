import React from 'react';

const Article = (props) => {
    
    return (
        <div className='container px-4 pt-5'>
            <h1 className="text-center mb-4 text-xl font-extrabold">{props.article.title}</h1>
            <p className='text-center'>{props.article.body}</p>
        </div>
    );
}
export async function getStaticProps(context){
    const id=context.params.article.toString();
    const p="https://jsonplaceholder.typicode.com/posts/"+id;
    const data= await fetch(p);
    const article=await data.json();
    return {
        props:{
            article
        }
    }

}

export async function getStaticPaths(){
    const data= await fetch("https://jsonplaceholder.typicode.com/posts");
    const articles=await data.json();

    const paths=articles.map(item=>({
        params:{article:item.id.toString()}
    }))

    return {
        paths,
        fallback:false
    }
}

export default Article;
