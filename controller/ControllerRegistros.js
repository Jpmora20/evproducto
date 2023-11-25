const categories = ['negocios', 'diversion', 'transporte', 'comida'];
const expenses = [];

// Función para mostrar los gastos en la lista
function displayAllExpenses() {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos elementos

  // Recorrer todos los gastos y crear tarjetas (cards) para cada uno
  expenses.forEach(expense => {
    const card = document.createElement('div');
    card.classList.add('expense-card');
    card.innerHTML = `
      <p><strong>Valor:</strong> $${expense.value}</p>
      <p><strong>Categoría:</strong> ${expense.category}</p>
      <p><strong>Descripción:</strong> ${expense.description}</p>
    `;
    expenseList.appendChild(card);
  });
}

// Manejar el evento de envío del formulario
document.getElementById('expenseForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener valores del formulario
  const value = document.getElementById('expenseValue').value;
  const category = document.getElementById('expenseCategory').value;
  const description = document.getElementById('expenseDescription').value;

  // Agregar nuevo gasto al array de gastos
  expenses.push({ value, category, description });

  // Mostrar todos los gastos actualizados en la lista
  displayAllExpenses();
});