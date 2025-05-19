function CheckOut({ subtotal }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-6">
      <div className="flex flex-col md:flex-row items-start  gap-2">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border px-3 py-2 rounded w-full md:w-auto"
        />
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Apply Coupon
        </button>
      </div>
      <div className="border p-4 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Cart Total</h2>
        <div className="flex justify-between border-b pb-2">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between border-b pb-2 font-semibold">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded self-start">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
