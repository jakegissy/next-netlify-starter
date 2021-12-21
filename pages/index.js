import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Jake's app!" />
        <p className="description">
        </p>
             <SCRIPT language="JavaScript">
            var password; 
            var pass1="SECRET_PASSWORD"; 
            password=prompt('Enter Password',' '); 
            if (password==pass1) 
            alert('Correct Password! Click OK to Enter!'); 
            else { window.location="http://YOURDOMAIN.com/"; 
            } 
            </SCRIPT>
      </main>

      <Footer />
    </div>
  )
}
