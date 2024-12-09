// Prompt orqali ma'lumotlarni olish
var num1 = parseFloat(prompt("1-raqamni kiriting:"));
var operator = prompt("Tanlang: 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("2-raqamni kiriting:"));

// Ma'lumotlarni tekshirish
if (isNaN(num1) || isNaN(num2)) {
    alert("Iltimos, to'g'ri son kiriting.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("Iltimos, to'g'ri operator tanlang (1, 2, 3 yoki 4).");
} else {
    // Kontentlar yaratish va uslublash
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.fontFamily = "'Roboto', sans-serif";
    document.body.style.background = "linear-gradient(to right, #6a11cb, #2575fc)";
    document.body.style.color = "#fff";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";

    // Konteyner
    var container = document.createElement('div');
    container.style.backgroundColor = "#ffffff";
    container.style.borderRadius = "20px";
    container.style.padding = "40px";
    container.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    container.style.textAlign = "center";
    container.style.width = "320px";
    container.style.transition = "transform 0.3s";
    container.style.color = "#333";
    container.style.fontSize = "16px";
    container.style.fontWeight = "500";
    container.onmouseover = function() {
        container.style.transform = "scale(1.05)";
    };
    container.onmouseout = function() {
        container.style.transform = "scale(1)";
    };
    document.body.appendChild(container);

    // Sarlavha
    var title = document.createElement('h1');
    title.innerText = "Zo'r Kalkulyator";
    title.style.marginBottom = "20px";
    title.style.fontSize = "28px";
    title.style.color = "#2575fc";
    container.appendChild(title);

    // Kirish maydonlari
    var inputContainer = document.createElement('div');
    inputContainer.style.marginBottom = "20px";
    container.appendChild(inputContainer);

    var num1Input = document.createElement('input');
    num1Input.value = num1;
    num1Input.disabled = true;
    num1Input.style.width = "100%";
    num1Input.style.padding = "10px";
    num1Input.style.marginBottom = "10px";
    num1Input.style.border = "2px solid #ddd";
    num1Input.style.borderRadius = "10px";
    num1Input.style.fontSize = "16px";
    num1Input.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
    inputContainer.appendChild(num1Input);

    var operatorSelect = document.createElement('select');
    operatorSelect.disabled = true;
    operatorSelect.innerHTML = `
        <option value="1" ${operator == '1' ? 'selected' : ''}>+</option>
        <option value="2" ${operator == '2' ? 'selected' : ''}>-</option>
        <option value="3" ${operator == '3' ? 'selected' : ''}>*</option>
        <option value="4" ${operator == '4' ? 'selected' : ''}>/</option>
    `;
    operatorSelect.style.width = "100%";
    operatorSelect.style.padding = "10px";
    operatorSelect.style.marginBottom = "10px";
    operatorSelect.style.border = "2px solid #ddd";
    operatorSelect.style.borderRadius = "10px";
    operatorSelect.style.fontSize = "16px";
    operatorSelect.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
    inputContainer.appendChild(operatorSelect);

    var num2Input = document.createElement('input');
    num2Input.value = num2;
    num2Input.disabled = true;
    num2Input.style.width = "100%";
    num2Input.style.padding = "10px";
    num2Input.style.marginBottom = "20px";
    num2Input.style.border = "2px solid #ddd";
    num2Input.style.borderRadius = "10px";
    num2Input.style.fontSize = "16px";
    num2Input.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.1)";
    inputContainer.appendChild(num2Input);

    // Tugma
    var button = document.createElement('button');
    button.innerText = "Natijani ko'rish";
    button.style.width = "100%";
    button.style.padding = "15px";
    button.style.backgroundColor = "#2575fc";
    button.style.color = "#fff";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
    button.onmouseover = function() {
        button.style.backgroundColor = "#6a11cb";
    };
    button.onmouseout = function() {
        button.style.backgroundColor = "#2575fc";
    };
    container.appendChild(button);

    // Natija
    var resultText = document.createElement('h3');
    resultText.innerText = "Natija: ";
    var result = document.createElement('span');
    resultText.appendChild(result);
    result.style.fontWeight = "bold";
    result.style.color = "#2575fc";
    container.appendChild(resultText);

    // Tugma bosilganda natijani hisoblash
    button.addEventListener('click', function() {
        var resultValue;
        if (operator === '1') {
            resultValue = num1 + num2;
        } else if (operator === '2') {
            resultValue = num1 - num2;
        } else if (operator === '3') {
            resultValue = num1 * num2;
        } else if (operator === '4') {
            if (num2 === 0) {
                alert("0 ga bo'lsa bo'lmaydi.");
                return;
            }
            resultValue = num1 / num2;
        }
        result.innerText = resultValue;
    });
}