var digitlist = "abcdefghijklmnopqrstuvwzyz0987654321!@#$%^&*()_+";
var p = "";

function generatedPass(plength) {
    p=""
    for (var i = 0; i < plength; i++) {
        p += digitlist.charAt(Math.floor(Math.random() * digitlist.length));
    }
    return p;
}

function getlength(val)
{
    document.genpass.output.value = generatedPass(val);
}