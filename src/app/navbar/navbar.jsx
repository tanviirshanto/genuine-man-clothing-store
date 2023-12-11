
// import Cart from './cart'
// import CartButton from './cartbutton'
//      import CartShow from './Sidebar/cartshow'
import Menu from '../../components/navbar/menu'
// import MainSidebar from './Sidebar/sidebar'
// import Searchbox from './searchbox'
import Signin from '../../components/navbar/signin'
import Signup from '../../components/navbar/signup'

import CartView from '../../components/navbar/cartview'
import Categories from '../../components/navbar/categories'
import Image from 'next/image'

 import Cottons4 from '../../../public/Cottons4.svg'

function Navbar() {
  return (
    <div className=' bg-slate-50 shadow-md'>
    <div className="   flex justify-between items-center  w-[92%] mx-auto py-1 whitespace-nowrap h-16">
        <div className='flex items-center'>
            <Menu/>
            <div>
            <a href="/" className='inline mr-10'> <Image
  height={0} width={0} src={Cottons4}  className=' inline w-[150px] ' alt="" /> </a>
            </div>
            <Categories/>
        </div>
        <div className='hidden'>
        <a href="/"><Image 
  height="0" src="Cottons4.svg" width={150} className=' inline '  alt="" /></a>
        </div>
        <div className='flex items-center'>
          <CartView/>
        <Signin/><Signup/>
        {/* <MainSidebar/> */}
       
        

        </div>
        {/* <!-- drawer component --> */}


    </div></div>
  )
}

export default Navbar