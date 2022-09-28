class LegalPersonPage {
    page() {
        bodyInnerHTML.innerHTML = `
            <h1>Заполните данные</h1>
            <input id="fullName" placeholder="Введите ФИО">
            <input id="inn" placeholder="Введите ваш ИНН">

            <input id="nameCompany" placeholder="Введите название компании">
            <input id="address" placeholder="Введите адрес">
            <input id="ogrn" placeholder="Введите ОГРН">
            <input id="innCompany" placeholder="Введите ИНН компании">
            <input id="kpp" placeholder="Введите КПП">
            <button onclick = 'legalPersonPage.request()'>продолжить</button>`;
    }

    request() {
        const fullName = document.getElementById("fullName");
        const inn = document.getElementById("inn");

        const nameCompany = document.getElementById("nameCompany");
        const address = document.getElementById("address");
        const ogrn = document.getElementById("ogrn");
        const innCompany = document.getElementById("innCompany");
        const kpp = document.getElementById("kpp");

        // const client = new Client("markuss", "12231231", "legal");
        // const legalPerson = new LegalPerson("markITT", "Kolotushkina 12", "7984293", "34753485", "38409589");
        
        const client = new Client(fullName.value, inn.value, "legal");
        const legalPerson = new LegalPerson(nameCompany.value, address.value, ogrn.value, innCompany.value, kpp.value);
        server.addPerson(client, legalPerson);
    }
}
