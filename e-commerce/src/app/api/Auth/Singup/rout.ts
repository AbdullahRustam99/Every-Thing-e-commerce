import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();

  try {
    const { email, password } = await request.json();

    console.log("EMAIL", email, "PASSOWERD", password);

      cookieStore.set("Email", email , {httpOnly:true});
      
      cookieStore.set("Password", password, { httpOnly: true });
      
        
  } catch (error) {
    return NextResponse.json(error);
  }
};

