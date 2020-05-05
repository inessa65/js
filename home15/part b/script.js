const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const input = document.getElementById("file-input");
    const file = input.files[0];
    if (!file) {
        alert("choice the file");
        return;
    }
    const reader = new FileReader();
    reader.onload = function () {
        //console.log(reader.result);

        const result = reader.result;

        const textArea = document.getElementById("textarea");

        let res = getNumber(result);
        for (let k in res) {
            // console.log(k,res[k])
            textArea.value += `${res[k]}, ${k}\n`;
        }

        console.log(getNumber(result));
    };

    reader.readAsText(file);
});
let h = "jhgfd kjhgf kjhg kjh";
function getNumber(result) {
    const res = {};
    for (let i = 0; i < result.length; i++) {
        const ch = result[i];
        if (!res[ch]) {
            res[ch] = 0;
        }
        res[ch]++;
        //console.log(ch)
    }
    return res;
}

//console.log(getNumber(result) )
