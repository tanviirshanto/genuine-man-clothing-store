
import User from "@/models/userModel";
import Order from "@/models/orderModel";

import Index from "../../../components/profile/index";

export async function GetUser(id:string) {
  const p = await User.findOne({_id:id});

  return p;
}

export async function GetOrder(userid:string) {
  const p = await Order.findOne({ user_id: userid });
console.log(p.orders);
  return p.orders.toObject();
}

export default async function Profile({ params }:any) {
  const user = await GetUser(params.id)
  const orders = await GetOrder(params.id);
  return (
    <div
      className="text-sm text-[
#C6C1B9] mb-14 md:mx-14 "
    >
      <div className="mt-4 ml-5 text-xs">
        <a href="/">Home</a>/<span>Profile</span>
      </div>
      <Index user={user} orders={orders} />
    </div>
  );
}
