import CommerceShell from "./CommerceShell";

export default function BuyerShell({ children }){

  return (
    <CommerceShell>
      <section className="buyer-shell">
        {children}
      </section>
    </CommerceShell>
  );
}
