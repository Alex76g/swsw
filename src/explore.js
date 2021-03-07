console.log("belül:", params);

params.sz = 5;

return {
   egyik = params.egyik || "egyik placeholder",
   masik = params.masik || "masik placeholder",
   harmadik = params.harmadik || "harmadik placeholder",
   doubleFn = function(x){
      return 2*x;
   }
};