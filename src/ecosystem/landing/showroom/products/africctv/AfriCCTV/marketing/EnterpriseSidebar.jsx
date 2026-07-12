export default function EnterpriseSidebar(){
  const stats=[
    ["System Status","Protected"],
    ["AI Detection","Active"],
    ["Recording","24/7"],
    ["Encryption","AES-256"],
    ["Cameras","04 Online"],
    ["Health","100%"]
  ];

  return(
    <aside className="enterprise-sidebar">
      <h3>Security Operations</h3>
      {stats.map(([label,value])=>(
        <div key={label} className="sidebar-row">
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </aside>
  );
}
