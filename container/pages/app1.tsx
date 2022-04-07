import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';


const App1 = dynamic(() => import('remote/App'), {
  ssr: false,
});

const App1Page = ()=>{

  return (
    <div style={{
      margin:'0 auto',
      width:'350px',
      background:'#f2f5f4',
      textAlign:'center'
    }} >
      <App1 />
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

  return{
    props:{
      
    }
  }

}


export default App1Page