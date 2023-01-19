import Link from 'next/link'

export default function Hero() {
	return (
		<>
		<h1>Welcome to My Blog</h1>
           <Link href="/page1" legacyBehavior>
		<a>Sample Website1</a>
	   </Link>
		
	   <p><Link href="/page2" legacyBehavior>
                <a>Sample Website2</a>
           </Link></p>

	   <p><Link href="/page3" legacyBehavior>
                <a>Sample Website3</a>
           </Link></p>

	   <p><Link href="/page4" legacyBehavior>
                <a>Sample Website4</a>
           </Link></p>

	   <p><Link href="/page5" legacyBehavior>
                <a>Sample Website5</a>
           </Link></p>


		</>

	)
}
