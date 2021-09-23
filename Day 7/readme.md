
Some notes:

//take care of security, edge cases and perfomance in backend always


 yeah so the abcd from index.js,

 /ab?cd => b can come or Not, its optional, wont affect the result 


 /a(bc)?d  => suppose bc is optional, i.e ya to bc aae ya to bilkul hi ni aae => club kar diya


 /ab?cd => b can repeat as many times as it wants, same result


 /ab*cd => b ke baad kuch bhi but end mein always cd 


 /a/ => a ke baad kuchh bhi, start a se ho (regex)


 /*fly$/ => aage kuchh bhi end mein fly hona chahiye like butterfly, dragonfly


for dynamic routing => '/users/:userID/book/:bookID' => colon waale dynamic value honge. => get this in req.params

==============================

?q=somth smth => beech mein & normally likhne se it takes as dusra query, so we use uri encoder aise dono likhne ke liye
normally inspect -> encodeURIcomponent("somthg&smth") -> jo string aae usko use karlo

