const allpara = document.getElementsByClassName("para");
let totalprice = 0;
let seatCount = 40;
let seat = 0;
for (let para of allpara) {
  para.addEventListener("click", function handleSelect(event) {
    seat = seat + 1;
    document.getElementById("up").innerText = seat;

    const placeName = event.target.innerText;

    if (seatCount > 0) {
      seatCount--;
    } else {
      return;
    }

    setInnerText("seatLeft", seatCount);

    const catagory = "Economy";
    const price = 550;

    const selectedContainer = document.getElementById("place");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = placeName;
    td2.innerText = catagory;
    td3.innerText = price;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    selectedContainer.appendChild(tr);
    event.target.style.backgroundColor = "#1dd100";
    event.target.style.color = "#ffffff";

    totalprice += price;
    const pricecontainer = document.getElementById("price");
    const Gpricecontainer = document.getElementById("gprice");
    pricecontainer.innerText = totalprice;
    Gpricecontainer.innerText = totalprice;

    if (seat === 4) {
      const CouponBtn = document.getElementById("CouponBtn");
      CouponBtn.removeAttribute("disabled");
      CouponBtn.style.backgroundColor = "#1DD100";

      const AllSeat = document.getElementById("AllSeat");
      AllSeat.classList.add("pointer-events-none");
    }

    if (totalprice >= 550 ) {
      document.getElementById("next").removeAttribute("disabled");
      document.getElementById("next").style.backgroundColor = "#1DD100";
    }
  });
}

function CupponBtnClick() {
  const seatup = document.getElementById("up").innerText;
  const coupon = document.getElementById("coupon").value;
  const Cuponfield = document.getElementById("Cuponfield");

  const priceText = document.getElementById("price").innerText;
  const price = parseInt(priceText);

  if ((seatup > 3 && coupon === "coupon20") || coupon === "NEW15") {
    document.getElementById("gprice").innerText = price * 0.8;
    Cuponfield.classList.add("hidden");
  } else {
    alert("invalid coupon");
  }
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

document.getElementById("reset").addEventListener("click", () => {
  window.location.reload();
});
