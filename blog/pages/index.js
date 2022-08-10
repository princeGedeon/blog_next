
import Link from "next/link"

export default function Home() {
  return (
    <div className="container px-10 pt-5">
      <h1 className="text-3xl">Bienvenue sur <span className="font-extrabold text-blue-900">Prince.io</span></h1>
      <span>Le blog des princes</span>
      <div className="mt-10 mx-auto flex flex-col  gap-4  sm:flex-row">
        <div className="w-full border border-gray-500 px-5 py-5  rounded-md">
          <h3>Lisez les articles</h3>
          <h6 className="text-gray-500 my-1">Maximisez votre culture</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat molestias unde quibusdam odio at sit.</p>
          <Link href="/blog">
          <a>Visitez le blog</a>
          </Link>

        </div>
        <div className="border w-full  border-gray-500  px-5 py-5  rounded-md">
          1
        </div>
      </div>

     
     
    </div>
  )
}
