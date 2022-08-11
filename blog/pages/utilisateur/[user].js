import React from 'react';

const User = (props) => {
    console.log(props.user);

    return (
        <div className='container px-4 pt-3 mx-auto'>
            <h1 className='text-center mb-4'>Nom  : {props.user.username}</h1>
            
  
                <div className='border px-2 py-3 flex justify-between'>
                    <h2 className=''>Nom</h2>
                    <h4 className=''>{props.user.name}</h4>
                </div>

                <div className='border px-2 py-3 flex justify-between'>
                    <h2 className=''>Email</h2>
                    <h4 className=''>{props.user.email}</h4>
                </div>
                <div className='border px-2 py-3 flex justify-between'>
                    <h2 className=''>Phone Number</h2>
                    <h4 className=''>{props.user.phone}</h4>
                </div>
                <div className='border px-2 py-3 flex justify-between'>
                    <h2 className=''>Website</h2>
                    <h4 className=''>{props.user.website}</h4>
                </div>
         </div>
           
    );
}

export async function getStaticProps(context){
    const id=context.params.user;
    
    const url="https://jsonplaceholder.typicode.com/users/"+id.toString();
    const data=await fetch(url);
    const user=await data.json();
    

    return {
        props:{
            user
        }
    }


}
export async function getStaticPaths(){
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await data.json();

    const paths=users.map(item=>({
        params:{user:item.id.toString()}
    }))
    return {
        paths,
        fallback:false

    }
}
export default User;
