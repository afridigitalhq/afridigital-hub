import API from "../config/api";

export async function askAfriAI(message, sessionId="landing"){
  const url=`${API.afriai}/ask`;

  console.log("AfriAI URL:",url);

  console.log("AfriAI REQUEST START", url);

  let response;

  try{

    response=await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        sessionId,
        message
      })
    });

  }catch(error){

    console.error("AFRIAI FETCH FAILURE", error);

    throw error;

  }

  console.log("AfriAI RESPONSE STATUS", response.status);

  if(!response.ok){
    throw new Error(`HTTP ${response.status}`);
  }

  const json=await response.json();

  console.log("AfriAI RESPONSE BODY", json);

  return json;
}
