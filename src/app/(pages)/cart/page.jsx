import getUserCart from "@/app/actions/cart/getCart";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MoreActionCart from "@/components/cart/actionCart";
import CheckOut from "@/components/cart/checkOut";
import CountCard from "@/components/Count/Counter";
import DeleteProduct from "@/components/MyButton/DeleteProduct";
import NoCard from "@/components/Products/NOCard/NoCard";
import { cookies } from "next/headers";
import Image from "next/image";

async function Cart() {
  const crumb = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
  ];
  const cookiesStore = await cookies();
  const tokenCookie = cookiesStore.get("token");
  const token = tokenCookie?.value;

  const userCart = await getUserCart(token);
  return (
    <div className="container m-auto py-8 px-4 min-h-[900px]">
      <div>
        <Breadcrumb crumbs={crumb} />
      </div>
      <div>
        <div className=" py-8">
          {userCart.numOfCartItems !== 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 ">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className="*:font-medium *:text-gray-900">
                      <th className="px-3 py-2 whitespace-nowrap">Product</th>
                      <th className="px-3 py-2 whitespace-nowrap">Price</th>
                      <th className="px-3 py-2 whitespace-nowrap">Quantity</th>
                      <th className="px-3 py-2 whitespace-nowrap">Subtotal</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 *:even:bg-gray-50 ">
                    {userCart.data.products.map((object) => {
                      return (
                        <tr
                          className="*:text-gray-900 *:first:font-medium"
                          key={object._id}
                        >
                          <td className="px-3 py-2 whitespace-nowrap">
                            <div className="flex items-center gap-5 w-fit">
                              <div className="relative w-[54px] h-[54px]">
                                <Image
                                  src={object.product.imageCover}
                                  alt={object.product.title}
                                  width={600}
                                  height={900}
                                  className=" h-full w-full object-contain"
                                />
                                <div className="absolute -top-1 -left-1 cursor-pointer">
                                  <DeleteProduct
                                    ProductID={object.product._id}
                                    token={token}
                                  />
                                </div>
                              </div>
                              <p>
                                {object.product.title
                                  .split(" ")
                                  .slice(0, 2)
                                  .join(" ")}
                              </p>
                            </div>
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            $ {object.price}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap w-30">
                            <CountCard
                              MyCount={object.count}
                              id={object.product._id}
                            />
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            ${object.price * object.count}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div>
                <MoreActionCart />
              </div>
              <div>
                <CheckOut subtotal={userCart.data.totalCartPrice} />
              </div>
            </>
          ) : (
            <NoCard />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
