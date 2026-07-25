import API from "../config/api";

export async function askAfriAI(message, sessionId="landing"){
  const url=`${API.afriai}/ask`;

  console.log("AfriAI URL:",url);

  const response=await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      sessionId,
      message
    })
  });

  if(!response.ok){
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
