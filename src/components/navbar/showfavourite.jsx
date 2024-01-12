import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { fetchFavouriteItems } from '@/redux/favourite/favouriteSlice';

import FavouriteItem from './favouriteItem'

function FavouritesView() {
    const [isVisible, setIsVisible] = useState(false)
  const { data: session } = useSession();
  const [user_id, setUserId] = useState(null);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useSelector(
        (state) => state.favourite
    );

  
const items = data ? data.items : [];
      useEffect(() => {

    if (session && !user_id) {
      const getUserId = async () => {
        const id = session?.user?.id;
        setUserId(id);
      };
      getUserId();
    }
  }, [session, user_id]);


  useEffect(() => {
    if ( user_id)
      dispatch(fetchFavouriteItems({ user_id }));
  }, [user_id, dispatch]);
  
      let content = null;
  

    if (session) {
        if (isLoading) content = <p>Loading...</p>;

        if (!isLoading && isError)
            content = <p className="error">There was an error occured</p>;

        if (!isLoading && !isError && items?.length > 0) {
            content = items?.map((i) => {
                //  console.log(i);
                return <FavouriteItem item={i} key={i._id} user_id={user_id} />;
            })
        }
    }


    return (
      <div className="relative">
        <button
          className="mr-5 w-[15%]"
          onClick={() => setIsVisible(!isVisible)}
        >
          ❤️
        </button>
        <div
          className={`${
            isVisible ? "" : "invisible"
          } absolute bg-slate-100 px-1 py-2 flex flex-col rounded-lg text-center border shadow-md gap-5 w-[400px]`}
          style={{
            position: "absolute",
            top: "180%", 
            left: "50%", 
            transform: "translateX(-50%)", 
          }}
        >
          {content}
        </div>
      </div>
    );
}

export default FavouritesView