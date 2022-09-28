class PhysicalPersonPage {
    page() {
        bodyInnerHTML.innerHTML = `
            <h1>Заполните данные</h1>
            <input id="fullName" placeholder="Введите ФИО">
            <input id="inn" placeholder="Введите ваш ИНН">

            <input id="dateOfBirth" placeholder="Введите ваше день рождения">
            <input id="passportSeries" placeholder="Введите серию паспорта">
            <input id="passportNumber" placeholder="Введите номер паспорта">
            <input id="passportDate" placeholder="Введите дату выдачи паспорта">
            <button onclick = 'physicalPersonPage.request()'>продолжить</button>`;
    }

    request() {
        const fullName = document.getElementById("fullName");
        const inn = document.getElementById("inn");

        const dateOfBirth = document.getElementById("dateOfBirth");
        const passportSeries = document.getElementById("passportSeries");
        const passportNumber = document.getElementById("passportNumber");
        const passportDate = document.getElementById("passportDate");
        
        // const client = new Client("markuss", "12231231", "physical");
        // const physicalPerson = new PhysicalPerson("12.11.2001", 9412, 453212, "25.10.2020");

        const client = new Client(fullName.value, inn.value, "physical");
        const physicalPerson = new PhysicalPerson(dateOfBirth.value, passportSeries.value, passportNumber.value, passportDate.value);
        server.addPerson(client, physicalPerson);
    }
}