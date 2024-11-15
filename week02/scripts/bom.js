const chapterInput = document.getElementById("chapterInput");
const addChapterBtn = document.getElementById("addChapterBtn");
const chapterList = document.getElementById("chapterList");

addChapterBtn.addEventListener("click", () => {
    const chapterTitle = chapterInput.value.trim();

    if (chapterTitle !== "") {
        const li = document.createElement("li");

        li.textContent = chapterTitle;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("deleteBtn");

        li.appendChild(deleteBtn);

        chapterList.appendChild(li);

        chapterInput.value = "";

        deleteBtn.addEventListener("click", () => {
            chapterList.removeChild(li);
        });
    }
});
