var result = {
   egyik: params.egyik || "egyik placeholder",
   masik: params.masik || "masik placeholder",
   harmadik: params.harmadik || "harmadik placeholder",
   doubleFn: function(x){return 2*x;}
};

// overriding original value
params.sz = 5;

return result;