
var array_numeri = [1,2,3,4,5,6,7,8];


function filtraNumeriPari (array) {


    array = array.filter(function (a) {

        if (a % 2 == 0) {
            
            return 1

        }  else {

            return 0
        }

    })

    console.log(array)

}

filtraNumeriPari(array_numeri)

