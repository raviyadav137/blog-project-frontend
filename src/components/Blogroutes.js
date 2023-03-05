import React,{Routes,Route} from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Bollywood from './Bollywood'
import Fitness from './Fitness'
import Food from './Food'
import PageDetail from './PageDetail'
import Pages from './Pages'
const Blogroutes=()=>{
    return(
      <>
      <Details>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bolly' element={<Bollywood/>}/>
        <Route path='/tech' element={<Technology/>}/>
        <Route path='/holly' element={<Hollywood/>}/>
        <Route path='/fit' element={<Fitness/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path=":article/articleid" element={<Pages/>} />
        <Route path="*" element={<PageDetail/>} />
      </Routes>
     </Details>
      </>
    )
}
export default Blogroutes