import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const cookiesstore = cookies();

	const isLogin = cookiesstore.get("IsLogin")?.value;

	console.log(isLogin);
	if (!isLogin) {
		return NextResponse.redirect(new URL("/Join", request.url));
	} else {
		if (isLogin === "0" && request.nextUrl.pathname === "/Cart/Checkout") {
			return NextResponse.redirect(new URL("/Singin", request.url));
		}
		if (isLogin === "1" && request.nextUrl.pathname === "/Singin") {
			return NextResponse.redirect(new URL("/Cart/Checkout", request.url));
		}
		console.log("MIDDEWARE IS RUN !!!!!!!");
		return NextResponse.next();
	}
}

export const config = {
	matcher: ['/Cart/Checkout',],
};
