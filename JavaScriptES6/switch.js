const fruit = "uva";

switch (fruit) {
    case "banana":
        console.log ('$3.00');
        break;
    case "melão":   
    case "uva":
    case "maça":
    default:
        console.log ('está em falta');
        break;
    }