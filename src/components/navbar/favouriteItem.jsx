import { removeFavourite } from '@/redux/favourite/favouriteSlice';
import Image from 'next/image';
import React from 'react'
import { useDispatch } from 'react-redux';

function FavouriteItem({ item, user_id }) {
  const { clothtype, variation, name, id, image, price } = item;
  const dispatch = useDispatch();
  const postData = {
    userid: user_id,id
  };
  async function handleRemove (e) {
    e.preventDefault();
    console.log(id);
    dispatch(removeFavourite(postData));
  };

  return (
    <div className="px-2 ">
      <a href={`/${clothtype}/${variation}/${name}/${id}`}>
        <div className="flex  my-5 gap-3 cursor-pointer ">
          <div className="w-[30%]">
            <Image
              width={200}
              height={200}
              src={image}
              className="h-24 w-full "
              alt=""
            />
          </div>
          <div className="flex flex-col  w-[60%]">
            <h1 className="overflow-hidden">{name}</h1>

            <div>
              <h1>
                Price: <span className="font-bold">${price}</span>
              </h1>
            </div>
            <div className="underline">
              <button onClick={handleRemove}>Remove</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default FavouriteItem