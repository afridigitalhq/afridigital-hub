import { Routes, Route } from "react-router-dom";
import BuyerApp from "../app/BuyerApp";
import SellerApp from "../app/SellerApp";
import AdminApp from "../app/AdminApp";

export default function CommerceRouter(){
  return (
    <Routes>
      <Route path="/" element={<BuyerApp />} />
      <Route path="/seller" element={<SellerApp />} />
      <Route path="/admin" element={<AdminApp />} />
    </Routes>
  );
}
