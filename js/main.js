function carsCaro() {
    const parent = document.querySelector('.carosile')
    const left = document.querySelector('#left')
    const carCarocile = document.querySelector('#carCarocile')
    const item1 = document.querySelector('#carCarocile .content h4')
    const item2 = document.querySelector('#carCarocile .content a i')
    const item3 = document.querySelector('#carCarocile .content a')
    const item4 = document.querySelector('#carCarocile .info .offers i')
    const item5 = document.querySelector('#carCarocile .btns button ')

    const colors = ['#F08025', '#abc9c7', '#3A494D', '#00519A', '#E6C45A']

    let itemsStack = [...parent.children]
    left.addEventListener('click', leftFunction)
    let x = 1

    function leftFunction() {
        if (x == 5) {
            x = 0
        }
        carCarocile.style.transition = '1.4s'
        carCarocile.style.backgroundImage = `url(..//imgs/c${x}.jpg)`
        item1.style.color = colors[x]
        item2.style.color = colors[x]
        item3.style.borderColor = colors[x]
        item4.style.color = colors[x]
        item5.style.color = colors[x]
        x++
        let f = itemsStack.shift()
        itemsStack.push(f)
        parent.innerHTML = ''
        for (let i = 0; i < itemsStack.length; i++) {
            parent.append(itemsStack[i])
        }
        for (let i = 0; i < itemsStack.length; i++) {
            itemsStack[i].classList.add('c-leftAnimation')
        }
    }

}

carsCaro()


function slidingBar() {
    const [...trgs] = document.querySelectorAll('.treger')
    trgs[0].parentElement.style.height = 'fit-content'
    for (let i = 0; i < trgs.length; i++) {
        trgs[i].addEventListener('click', myFun)
    }

    function myFun() {
        for (let i = 0; i < trgs.length; i++) {
            trgs[i].parentElement.style.height = '50px'
        }
        let thisParent = this.parentElement
        thisParent.style.height = 'fit-content'
    }


}
slidingBar()

const names = ['Locas', 'Ana', 'Johny', 'Clodia', 'Yan']

function rev() {
    const [...elms] = document.querySelectorAll('.im')
    const user = document.querySelector('.userName')

    elms.forEach((item, ind) => {
        item.addEventListener('click', function () {
            elms.forEach(el => {
                el.classList.remove('imActive')
            })
            this.classList.add('imActive')
            user.textContent = names[ind]
        })
    })
}
 

rev()


function animate() {
    function e(e) {
        for (var t = []; e;) t.unshift(e), e = e.parentNode;
        for (let e = 0; e < t.length; e++)
            if ("avoid" == t[e].className || "carosile" == t[e].className) return !0
    }
 
    function t(e, t) {
        e.getBoundingClientRect().top <= window.innerHeight && (e.classList.add(t), "P" == e.tagName && setTimeout(() => {
            e.style.visibility = "visible"
        }, 1e3)), e.getBoundingClientRect().top >= window.innerHeight && ("P" == e.tagName && (e.style.visibility = "hidden"), e.classList.remove(t))
    }
    const [...n] = document.querySelectorAll("*");
    window.addEventListener("scroll", function() {
        for (let i = 0; i < n.length; ++i)
            if (!e(n[i])) {
                if ("P" === n[i].tagName) {
                    t(n[i], "animateAll");
                    continue
                }
                if ("H1" === n[i].tagName || "H2" === n[i].tagName || "H3" === n[i].tagName) {
                    t(n[i], "animateH1");
                    continue
                }
                if ("IMG" === n[i].tagName) {
                    t(n[i], "animateIMG");
                    continue
                }
            }
    })
}
animate()