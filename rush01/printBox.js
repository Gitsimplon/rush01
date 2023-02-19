
function printBox(width , height)
{
var linex = "*";
var liney = "\n*" ;
this.largeur = linex;
this.longeur = liney;
for (let x = 0; x < width; x++) {
    this.largeur += linex;
}

for (let y = 0; y < height; y++) {
    
    this.longeur += liney;
    
}

var cotex = largeur +longeur;
var cotey = longeur + largeur;

var Box = cotex + cotey;
console.log(cotex + largeur);

}
printBox(8,1);