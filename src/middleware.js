import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const cookiesStore = await cookies();
    const tokenCookie = cookiesStore.get('token');
    const token = tokenCookie?.value;

    const path = request.nextUrl.pathname;
    const publicRoutes = ['/', '/products', '/about'];
    const guestOnlyRoutes = ['/login', '/signUp',];
    const protectedRoutes = ["/wishlist", "/cart", "/profile"]

    if (token && guestOnlyRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!token && protectedRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/products', '/about', '/login', '/signUp', '/wishlist', '/cart', "/profile"],
};
