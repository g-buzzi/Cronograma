var d = new Date();
var w = 'd' + String(d.getDay());
document.head.insertAdjacentHTML("beforeend", `<style>tr.info td.${w}{background:rgba(20,20,80, 0.3)}</style>`)

function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: href,
    }).click();
}