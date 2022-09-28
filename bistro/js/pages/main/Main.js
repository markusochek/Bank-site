class Main {
    page() {
        bodyInnerHTML.innerHTML = `
            <button onclick = 'physicalPersonPage.page()'>Заполнить данные как физическое лицо</button>
            <button onclick = 'legalPersonPage.page()'>Заполнить данные как юридическое лицо</button>
            <button onclick = 'logout.page()'>Выход из системы</button>`;
    }
}