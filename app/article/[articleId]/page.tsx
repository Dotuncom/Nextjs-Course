
import Link from 'next/link';
import React from 'react'

const NewArticles = async({params,searchParams}:
    {
        params:Promise<{articleId:string}>,
        searchParams:Promise<{lang?:'en'|'fr'|'es'}>
    })=>{
    const {articleId} = await params;
    const {lang ='en'} = await searchParams
  return (
    <div>
        <h1>New article {articleId}</h1>
        <p>Reading in {lang}</p>
 <Link href={'/'}>
 Home
 </Link>

 <div>
    <Link href={`/article/${articleId}?lang=en`}>Enlish</Link>
    <Link href={`/article/${articleId}?lang=fr`}>French</Link>
    <Link href={`/article/${articleId}?lang=es`}>Spanish</Link>
 </div>
    </div>
  )
}

export default NewArticles