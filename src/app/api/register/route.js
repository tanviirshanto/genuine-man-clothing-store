import bcrypt from 'bcryptjs'
import {connect} from '../../../dbConfig/dbConfig'
import { NextResponse } from 'next/server';
import User from '../../../models/userModel'


connect();
export async function POST(request){
  const body = await request.json();
  
    const { name, email, password } = body;

    if(!name || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }
    
    const exist = await User.findOne({
            email
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = 
    {
            name,
            email,
            password:hashedPassword
        }
        const newUser = new User(userData);
        newUser.save()
  .then((savedUser) => {
    console.log('User saved:', savedUser);
    // Handle successful save
  })
  .catch((error) => {
    console.error('Error saving user:', error);
    // Handle error
  });

    return NextResponse.json(result)
}