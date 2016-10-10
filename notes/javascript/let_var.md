#Let vs. Var

The difference is scoping.

`var` is scoped to the nearest function block.

`let` is scoped to the nearest enclosing block. Variables declared with `let`
are not accessible before they are declared in their enclosing block. 

###**Global**

Both are identical when used outside a function block.
~~~~
    let me = 'go'; 
    var i = 'able'; 
~~~~


###**Function**

They are identical when used like this in a function block.
~~~~
    function ingWithinEstablishedParameters() { 
      let terOfRecommendation = 'awesome worker!'; 
      var sityCheerleading = 'go!'; 
    } 
~~~~


###**Block**

`let` is only visible in the `for()` loop and `var` is visible to the
whole function.
~~~~
    function allyIlliterate() {
    //tuce is *not* visible out here

      for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
      }

      //tuce is *not* visible out here
    }
~~~~

~~~~
    function byE40() {
      for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
      }

     //nish *is* visible out here
    } 
~~~~ 


##**AirBnB Style Guide**

###2.1
If you must reassign references, use `let` instead of `var`.

(`let` is block-scoped rather than function-scoped like `var`)

~~~~
//bad
var count = 1;
if (true) {
  count += 1;
}


//good, use the let.
let count = 1;
if (true) {
  count += 1;
}
~~~~

###2.2 Const

Use `const` for all your referencesl avoid using `var`

(This ensures you can't reassign your references, which can lead to bugs
and difficult to comprehend code)

~~~~
//bad
var a = 1;
var b = 2;

//good
const a = 1;
const b = 2;
~~~~
