import CommerceShell from "./CommerceShell";

export default function SellerShell({ children }){

  return (
    <CommerceShell>
      <section className="seller-shell">
        {children}
      </section>
    </CommerceShell>
  );
}
