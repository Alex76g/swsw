console.log("belül:", params);
console.log("belül a harmadik:", params.harmadik);

params.egyik = params.egyik || "egyik placeholder";
params.masik = params.masik || "masik placeholder";

params.harmadik = params.harmadik || "harmadik placeholder";
console.log("belül a harmadik a végén:", params.harmadik);

//function remoteFn(){
//    console.log("invoked");
//}
//
//return remoteFn;