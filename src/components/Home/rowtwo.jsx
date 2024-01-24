
 import menstapered from "../../assets/Mens_Tapered.jpg";
 import mensstraight from "../../assets/Mens_Straight.jpg";
 import mensbootcut from "../../assets/Mens_Bootcut.jpg";
import ItemCard from "./itemCard";

function RowTwo({ jeans }) {
    // console.log(jeans)
  return (
    <div className="z-10">
      <div className="pb-5 ">
        <div className="   ">
          <div className=" text-slate-900 text-4xl   flex items-center justify-center mb-10 mt-10">
            <h1 className="font-extrabold " >New Arrivals</h1>
          </div>
          <div className="flex items-center pt-3 pl-5 gap-8  min-w-full overflow-x-auto  scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400 scrollbar-rounded-full">
            {jeans?.map((sp) => 
              
            {
              //  console.log(sp)
              return <ItemCard xyz={JSON.stringify(sp)} key={sp._id} />;

            })}

            {/* <ItemCard imgUrl={menstapered}/>

            <ItemCard imgUrl={mensstraight}/>

            <ItemCard imgUrl={mensbootcut}/>

            <ItemCard imgUrl={menstapered}/>

            <ItemCard imgUrl={mensstraight}/>
            <ItemCard imgUrl={mensbootcut}/> */}
          </div>
        </div>
      </div>
    </div>
  );
 }

export default RowTwo;
