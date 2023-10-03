function swap() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    let a = 0,
        b = 0
    let x = arr.length / 2

    for (let i = 0; i < arr.length / 2; i++) {
        a = arr[i]
        b = arr[x]

        arr[i] = b
        arr[x] = a
        x--
    }
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
        a = arr[i]
        b = arr[x]

        arr[i] = b
        arr[x] = a
        x++
    }
}


function reduceArr() {
    let t1 = [12, 0, 3, -3, 9, 1, 6, 7]
    let t2 = [4, 8, 3, -14, 8, 1, 4, 7]
    let t3 = []

    for (let i = 0; i < t1.length; ++i) {
        // t3.push(t1[i] + t2[i])
        t3[i] = t1[i] + t2[i]
    }

    console.log(t3);

}


function posNeg() {
    let tab = [12, 22, 8, 0, -11, 7, 8, 3, 0, 0, 8, 2]
    let tab_pos = []
    let tab_neg = []


    for (let i = 0; i < tab.length; ++i) {
        if (tab[i] > 0) {
            tab_pos.push(tab[i])
        } else if (tab[i] < 0) {
            tab_neg.push(tab[i])
        }
    }

    console.log(tab_pos);
    console.log(tab_neg);
}

function croissan() {
    let arr = [1, 2, 3, 4, 5]
    let state = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            state = false
            break;
        }
        state = true
    }

    if (state == true) {
        console.log('oui');
    } else {
        console.log('no');
    }
}

let arr = [2, 5, 3, 1, 12, 8, 1, 7, 8, 13, 22, 6, 7]
function minx(numbers) {
    let min = numbers[0];
    let ind = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            [min, ind] = [numbers[i], i]
        }
    }
    console.log(min);
    console.log(ind);
};

minx(arr)