
import Link from "next/link"

export default function Home() {
  return (
    <div className="container px-10 pt-5">
      <h1 className="text-3xl">Bienvenue sur <span className="font-extrabold text-blue-900">Prince.io</span></h1>
      <span>Le blog des princes</span>
      <div className="mt-10 mx-auto flex flex-col  gap-4  sm:flex-row">
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
          <Link href="/contactl" >
          <a className="text-blue-800 text-md rounded-md bg-gray-400 mt-2 px-2 py-3 hover:bg-gray-600 hover:text-slate-100 ">Découvrez la liste des membres</a>
          </Link>

        </div>
      </div>

     
     
    </div>
  )
}
