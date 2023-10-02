//Create Account by Tyler Creager 09/02/2023
/*Modification Log
version 0.0 - 09/15/2023 working with script from student download as a baseline
version 0.1 - 09/17/2023 fine tuning.  
version 0.5 - 09/30/2023 replaced FAQ with an accordian from jQuery UI

*/


"use strict";
$(document).ready( () => 
            $("#faq").accordion({ 
                event: "click",
                heightStyle: "content",
                collapsible: true ,
                active: false
            })
        )

