let total = 0;
$("article").each(function (i) {
    total++;
    $(this).attr('id', 'thnaos-' + (i + 1))
})
const arr = [];
const change = [];
let i;
for (i = 1; i <= total; i++) {
    arr.push(i);
}
arr.sort(
    function () {
        return 0.5 - Math.random();
    }
);
arr.lenth = total / 2;
for (i = 1; i <= arr.lenth; i++) {
    change.push(arr[i]);
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const scroll = (dis) => new Promise((resolve, reject) => {
    return new Promise(function (resolve, reject) {
        $('html,body').animate({scrollTop: $(dis).offset().top - $(window).height()*0.382});
        resolve();
    })
});
const hide = (dis) => new Promise((resolve, reject) => {
    return new Promise(function (resolve, reject) {
        $(dis).attr('style', 'visibility:hidden');
        resolve();
    })
});
function down() {
    (async function () {
        for (const i in change) {
            const dis = "#thnaos-" + change[i];
            scroll(dis).then();
            await sleep(500);
            hide(dis).then();
            await sleep(1000);
        }
    })()
}

function up() {
    const show = (dis) => new Promise((resolve, reject) => {
        return new Promise(function (resolve, reject) {
            $(dis).attr('style', 'visibility:');
            resolve();
        })
    });
    (async function () {
        for (const i in change) {
            const dis = "#thnaos-" + change[i];
            scroll(dis).then();
            await sleep(500);
            show(dis).then();
            await sleep(1000);
        }
    })()
}
