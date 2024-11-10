document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const people = parseInt(document.getElementById('people').value);
    const total = parseFloat(document.getElementById('total').value);
    const paymentMethod = document.getElementById('payment-method').value;

    let discount = 0;

    // Aplica o desconto de 10% para PIX ou dinheiro
    if (paymentMethod === 'PIX' || paymentMethod === 'dinheiro') {
        discount = total * 0.10;
    }

    const finalAmount = total - discount;
    const amountPerPerson = finalAmount / people;

    // Exibe o resultado
    document.getElementById('result').innerHTML = `
        <p>Valor total da conta: R$ ${total.toFixed(2)}</p>
        <p>Desconto aplicado: R$ ${discount.toFixed(2)}</p>
        <p>Valor final: R$ ${finalAmount.toFixed(2)}</p>
        <p>Valor por pessoa: R$ ${amountPerPerson.toFixed(2)}</p>
    `;
});
