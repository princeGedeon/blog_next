
import Link from "next/link"
import Head from "next/head"
export default function Home() {

 
  return (
    <>
    <Head>
       <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog | By PrinceG</title>

    </Head>
    
    <div className="container mx-auto px-10 pt-5">
      <h1 className="text-3xl font-normal sm:text-4xl md:text-5xl xl:text-6xl">Bienvenue sur <span className="font-extrabold text-blue-900">Prince.io</span></h1>
      <span>Le blog des princes  par princeGedeon jr</span>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:bottom-10">
                    <Link href="/blog" >
                    <a className="animate-bounce bg-white p-2 w-12 h-12 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center sm:w-16 sm:h-16">
                        <svg className="w-6 h-6 rotate-180 text-violet-500 sm:w-8 h-8 hover:rotate-90" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                          </svg>

                    </a>
                    </Link>
                </div>
      <div className="mt-10 mx-auto flex flex-col  gap-4  md:flex-row">
        <div className="w-full min-h-fit max-h-full border border-gray-500 px-5 py-5  rounded-md">
          <h3 className="font-bold text-xl">Lisez les articles</h3>
          <h6 className="text-gray-500 text-sm mb-1">Maximisez votre culture</h6>
          <p className="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat molestias unde quibusdam odio at sit.</p>
          <Link href="/blog" >
          <a className="text-blue-800 text-md rounded-md bg-gray-400 mt-2 px-2 py-3 hover:bg-gray-600 hover:text-slate-100 ">Visitez le blog</a>
          </Link>

        </div>
        <div className="w-full min-h-fit max-h-full border border-gray-500 px-5 py-5  rounded-md">
          <h3 className="font-bold text-xl">Faites un tour vers la liste des membres</h3>
          <h6 className="text-gray-500 text-sm mb-1">Rencontrez des devs</h6>
          <p className="text-sm mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat molestias unde quibusdam odio at sit.</p>
          <Link href="/utilisateur" >
          <a className="text-blue-800 text-md rounded-md bg-gray-400 mt-2 px-2 py-3 hover:bg-gray-600 hover:text-slate-100 ">Découvrez la liste des membres</a>
          </Link>

        </div>
      </div>

     
     
    </div>
    </>
  )
}
