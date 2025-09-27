export function Header({ showBagItems, wishlist }) {
  return (
    <div
      className="p-2 mb-4 flex justify-around items-center"
      style={{ backgroundColor: "#2874F0" }}
    >
      <div>
        {/* <h2>Flipkart</h2> */}
        <img
          src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
          alt=""
          className="h-12"
        />
      </div>
      <div>
        <button className="myBtn" onClick={showBagItems}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdEYJWy438DWyVWOnvbw1Aydy8-VNEbQ_B592E3Pste2GYBetOTs142mx9-QOEBZ3dQc&usqp=CAU"
            alt="cart"
            className="h-12"
          />
          <p className="text-white">
            {wishlist.length === 0 ? "Cart" : wishlist.length}
          </p>
        </button>
      </div>
    </div>
  );
}
