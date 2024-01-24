'use client'
import React, { useState } from 'react'
import ProfileMenu from './profilemenu'
import Info from './info'
import Orders from './orders'


function Index({user,orders}) {
    const [active, setActive]=useState(2)
  return (
    <div className="flex flex-col md:flex-row md:ml-5 gap-10 md:gap-20 md:mt-14 mt-8">
      <ProfileMenu active={active} setActive={setActive} />

      {active === 1 && <Info user={user} />}
      {active === 2 && <Orders orders={orders} />}
    </div>
  );
}

export default Index