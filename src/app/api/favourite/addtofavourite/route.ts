import Favourite from "../../../../models/favouriteModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";


connect();

export async function POST(request: NextRequest, response: NextResponse) {


  const body = await request.json();
  //  console.log(body)
  const { favouriteItem, userid } = body;
  // console.log(favouriteItem)


  // console.log(user_id);
  if (!userid) {
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  // Find the user's cart based on the user ID
    let userFavourite = await Favourite.findOne({ user_id: userid });
    //  console.log(userFavourite);
  if (!userFavourite)
  {
    userFavourite=new Favourite({ user_id: userid, items: [] });
    }
  if (userFavourite) {
const existingItemIndex = userFavourite.items.findIndex((item) => {
  return item.id.toString() === favouriteItem.id.toString();
})
      // ; console.log(existingItemIndex);
      if (existingItemIndex !== -1) {
         console.log("Item already exists");
      } else {

         console.log("two")
        userFavourite.items.push(favouriteItem);
      }

    }
  else {
     console.log("item don't exist")
    
    userFavourite.items.push(favouriteItem)
    }
      
        
    


  // Save the updated cart
  await userFavourite
    .save()
    .then((userFavourite) => {
      console.log("Item added to Favourite", userFavourite);
      // Handle successful save
    })
    .catch((error: any) => {
      console.error("Error adding to Favourite", error);
      // Handle error
    });

  return NextResponse.json(userFavourite);
}
