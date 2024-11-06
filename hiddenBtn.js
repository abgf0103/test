document.addEventListener("DOMContentLoaded", function () {
    // .hiddenBtn 클릭 시 search-container 위치를 위로 이동해 숨김
    const btnSearch = document.querySelector(".hiddenBtn");
    const searchContainer = document.querySelector(".search-container");
    const icon = btnSearch.querySelector("i"); // 아이콘 요소 선택

    let isFormVisible = true;

    btnSearch.addEventListener("click", function (event) {
        event.preventDefault(); // 버튼 기본 동작 방지
        const searchHeight = searchContainer.clientHeight;

        if (isFormVisible) {
            // 검색창을 화면 밖으로 위로 올려서 숨기기
            searchContainer.style.top = `-${searchHeight}px`; // 위로 숨김
            icon.classList.remove("fa-angle-up"); // 아이콘 변경
            icon.classList.add("fa-angle-down");
        } else {
            // 검색창을 원래 위치로 내려서 보이기
            searchContainer.style.top = "20px"; // 다시 보임
            icon.classList.remove("fa-angle-down"); // 아이콘 변경
            icon.classList.add("fa-angle-up");
        }
        isFormVisible = !isFormVisible;
    });
});
