console.log("belül:", params);

params.sz = 5;

result.egyik = params.egyik || "egyik placeholder";
result.masik = params.masik || "masik placeholder";
result.harmadik = params.harmadik || "harmadik placeholder";

result.doubleFn = function(x){
   return 2*x;
}

return result;