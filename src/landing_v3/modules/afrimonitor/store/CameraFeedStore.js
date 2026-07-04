const listeners=new Set();
let feeds=[];
export const CameraFeedStore={getFeeds:()=>feeds,setFeeds:(next)=>{feeds=Array.isArray(next)?next:[];listeners.forEach(fn=>fn(feeds));},updateFeed:(feed)=>{feeds=feeds.filter(f=>f.id!==feed.id).concat(feed);listeners.forEach(fn=>fn(feeds));},subscribe:(fn)=>{listeners.add(fn);return()=>listeners.delete(fn);}};
export default CameraFeedStore;
