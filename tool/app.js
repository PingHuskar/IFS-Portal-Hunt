const main = (res) => {
    try {
        const r = JSON.parse(res)
        document.getElementById(`result`).innerText = `{portalName:'${r.result[8]}',geo: [${r.result[2]/10**6},${r.result[3]/10**6}],img: '${r.result[7].split("/")[r.result[7].split("/").length-1]}'},
        `
        document.getElementById(`portalImg`).src = `https://lh3.googleusercontent.com/${r.result[7].split("/")[r.result[7].split("/").length-1]}`
        document.getElementById(`portalName`).innerText = `${r.result[8]}`
    } catch (e) {
        console.log("Format Incorrect, Plz Try Again ^.^; ")
    }
}