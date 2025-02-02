import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const cookiesstore = await cookies();

	const isLogin = cookiesstore.get("IsLogin")?.value;

	console.log(isLogin);

	if (isLogin === "0" && request.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/Singin", request.url));
	}
	if (isLogin === "1" && request.nextUrl.pathname === "/Singin") {
		return NextResponse.redirect(new URL("/", request.url));
	}
	console.log("MIDDEWARE IS RUN !!!!!!!");
}

export const config = {
	matcher: ['/', '/Singin'],
};
