var lex = ['Lex',179];
var lyl = ['Lilith',188];
var ran = ['Ronnie',168];

function tallestFunc(x,y,z){
    if ((x[1] === y[1]) && (x[1] === z[1]) && (y[1] === z[1])){
        return  'invalid number!';
    } else {
        if ((x[1] > y[1]) && (x[1] > z[1])){
            return x[0] + ' is the tallest';
        } else if ((y[1] > x[1]) && (y[1] > z[1])){
            return y[0] + ' is the tallest';
        } else if ((z[1] > x[1]) && (z[1] > x[1])){
            return z[0] + ' is the tallest';
        }
    }
}

const fungsi = tallestFunc(lex,lyl,ran);

console.log(fungsi);