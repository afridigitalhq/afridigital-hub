const base = "/modules/";

const routes = [
  ["header","header.html"],
  ["marquee","marquee.html"],
  ["auth","auth.html"],
  ["services","services.html"],
  ["footer","footer.html"]
];

async function load(id,file){
  const el = document.getElementById(id);
  if(!el) return;

  try{
    const res = await fetch(base + file);
    const html = await res.text();
    el.innerHTML = html;
    console.log("✅",file);
  }catch(e){
    el.innerHTML = "<div style='color:red'>Failed "+file+"</div>";
  }
}

window.addEventListener("DOMContentLoaded",()=>{
  routes.forEach(([id,file])=>load(id,file));

  const chat = document.getElementById("chat-widget");
  if(chat){
    chat.onclick = ()=> alert("💬 Chat coming soon");
  }
});
