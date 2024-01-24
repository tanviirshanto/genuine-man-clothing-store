

function Categories() {
  return (

        <div className="  items-center  gap-10 hidden md:flex text-sm">
        
          <div className="group flex items-center relative">
          
          <a href="" className="font-semibold">Shirts</a>
          <div className="invisible group-hover:visible absolute  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-slate-100 px-1 py-2 w-36 flex flex-col rounded-lg text-center top-[140px] border shadow-md gap-5   ">
          <a href="/categories/formal-shirt" className="hover:bg-black hover:text-slate-50">Formal-Shirt</a>
            <a href="/categories/casualshirt" className="hover:bg-black hover:text-slate-50">Casual-Shirt</a>

            <a href="/categories/tshirts" className="hover:bg-black hover:text-slate-50">T-Shirt</a>
            <a href="/categories/polo" className="hover:bg-black hover:text-slate-50">Polo</a>
          </div>

            </div>

            <div className="group flex items-center relative">
          
          <a href="" className="font-semibold">Pant</a>
          <div className="invisible group-hover:visible absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 px-1 py-2 w-36 flex flex-col rounded-lg text-center top-[110px] border shadow-md gap-5">
          <a href="/categories/jeans" className="hover:bg-black hover:text-slate-50">Jeans</a>
            <a href="/categories/chinos" className="hover:bg-black hover:text-slate-50">Chinos</a>
            <a href="/categories/formal-pant" className="hover:bg-black hover:text-slate-50">Formal-Pant</a>
          </div>

            </div>
            
            
            <a href="/categories/accesories" className="font-semibold">Accessories</a>


        </div>
  
  )
}

export default Categories