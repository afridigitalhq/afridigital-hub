const API_BASE="API.base";
export async function sendCommand(payload){
  return fetch(API_BASE+"/api/afriai/command",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(payload)
  });
}
