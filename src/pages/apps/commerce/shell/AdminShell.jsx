import CommerceShell from "./CommerceShell";

export default function AdminShell({ children }){

  return (
    <CommerceShell>
      <section className="admin-shell">
        {children}
      </section>
    </CommerceShell>
  );
}
