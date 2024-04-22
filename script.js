
run =() => {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let Op = document.getElementById("output");
    Op.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    Op.contentWindow.eval(jsCode);
};

