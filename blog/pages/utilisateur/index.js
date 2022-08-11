import React from 'react';
import Link from 'next/link';
const Index = (props) => {
    console.log(props)
    return (
        <div className='container px-4 pt-5'>
            <h1 className="text-center font-bold">La liste des Utilisateurs</h1>
            <div className="grid">
                {props.users.map(user=>(
                    <div className="w-full border flex justify-between items-center pl-5">
                        <h5>{user.username}</h5>

                        <Link href={"/utilisateur/"+user.id}>
                            <a className='px-4 py-3 border rounded-sm text-bue-500 hover:bg-blue-500 hover:text-white'>Contacter</a>
                
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps(){
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await data.json();
    return {
        props:{
            users
        }
    }
}

export default Index;
