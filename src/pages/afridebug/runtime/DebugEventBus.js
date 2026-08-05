const listeners = {};

export function emitDebugEvent(type,payload){
  (listeners[type] || []).forEach(callback=>callback(payload));
}

export function subscribeDebugEvent(type,callback){
  if(!listeners[type]){
    listeners[type]=[];
  }

  listeners[type].push(callback);

  return ()=>{
    listeners[type]=listeners[type].filter(
      item=>item!==callback
    );
  };
}
