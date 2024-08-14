

var output_element= document>MediaQueryList('.output_element')
let color=3;

switch (color)
{

    case 1:
        output_element.textContent="RED";
        break;

    case 2:
         output_element.textContent="GREEN";
        break; 
        
    case 3:
        output_element.textContent="BLUE";
        break;
    
    case 4:
         output_element.textContent="MAGENTA";
        break;

    case 5:
         output_element.textContent="YELLOW";
         break;
        
    case 6:
         output_element.textContent="CYNA";
          break;

    default:
        output_element.textContent="UNKNOWN COLOR"
 }    
