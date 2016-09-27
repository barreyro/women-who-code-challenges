##Let vs. Var

The difference is scoping.

`var` is scoped to the nearest function block

`let` is scoped to the nearest enclosing block. Variables declared with `let`
are not accessible before they are declared in their enclosing block. 

###**Global**

Both are identical when used outside a function block
~~~~
    let me = 'go'; 
    var i = 'able'; 
~~~~


###**Function**

They are identical when used like this in a function block
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
