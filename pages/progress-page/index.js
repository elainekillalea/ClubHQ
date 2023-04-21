import Progress from "../../components/tools/Progress";
import classes from '../../styles/Home.module.css';

function ProgressP() {
    return(
      <Progress />
    );
}

export default ProgressP;

// import HomePageSpecific from "../Components/HomePage/HomePageSpecific" 
// import classes from "./index.module.css"
// import useSWR, { SWRConfig } from 'swr'


// const fetcher = async () => {
//   let response = await fetch('/api/getPageDataFromUrl', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ pageUrl: '/' }),
//   });
//   response = await response.json()
//   return response.data
// }

// function HomePageSwr() {
//   const { data } = useSWR('/', () => fetcher())
//   const pageData = data
//   return (
//     <div className={classes.mainDiv}>
//       <HomePageSpecific pageData={pageData} />
//     </div>
//   )
// }

// export default function Home({ fallback }) {
//   return (
//     <SWRConfig value={{ fallback }}>
//       <HomePageSwr />
//     </SWRConfig>
//   )
// }

// export async function getStaticProps() {
//   let response = await fetch('http://localhost:8000/getPageDataFromUrl', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ pageUrl: '/' }),
//   });
//   let pageData = await response.json();
//   pageData = pageData.data

//   return {
//     props: {
//       fallback: {
//         '/': pageData
//       }
//     }
//   }




