import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから対象を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに対象を追加する関数
const createIncompleteList = (text) => {
  // divタグ
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ
  const li = document.createElement("li");
  li.innerText = text;

  // buttonタグ
  const completeB = document.createElement("button");
  completeB.innerText = "完了";
  completeB.addEventListener("click", () => {
    deleteFromIncompleteList(completeB.parentNode);
    //完了リストに追加
    const addTarget = completeB.parentNode;
    //　todo内容を取得
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backB = document.createElement("button");

    backB.addEventListener("click", () => {
      const deleteTarget = backB.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backB.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    backB.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backB);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteB = document.createElement("button");
  deleteB.innerText = "削除";
  deleteB.addEventListener("click", () => {
    deleteFromIncompleteList(deleteB.parentNode);
  });

  // divタグの子要素を入れる
  div.appendChild(li);
  div.appendChild(completeB);
  div.appendChild(deleteB);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
