const removeTodo = (id) => {
  $(`#${id}`).remove()
}

const passiveTodo = (id) => {
  let t = $(`#${id} `);
  t.addClass("passive")
}

let addTodoFunc = function (todo) {

  let todoCount = 1;
  if ($("#todoContent tr:last-child").attr("id") !== undefined) {
    todoCount = parseInt($("#todoContent tr:last-child").attr("id")) + 1
  }
  const date = new Date().toLocaleDateString();
  let element = `
  <tr id=${todoCount}>
      <th scope="row">${todoCount}</th>
      <td class="todoDesc">${todo}</td>
      <td class="date">${date}</td>
      <td>
        <div class="events">
          <button class="btn rounded-pill btn-danger" onclick="removeTodo(${todoCount})"><i class="fa-solid fa-trash"></i></button>
          <button class="btn rounded-pill btn-success" onclick="passiveTodo(${todoCount})"><i class="fa-solid fa-square-check"></i>
          </button>
        </div>
      </td>
    </tr>
  `;
  $("#todoContent").append(element)
}

$("#enterTodo").on("submit", function (e) {
  let input = $("#newTodoValue");
  if (input.val() !== "") {
    addTodoFunc(input.val());
  }
  input.val("");
  input.trigger("blur");
  e.preventDefault()
})