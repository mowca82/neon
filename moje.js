var pesel;
function sprawdzPesel() {
    const reg = /[0-9]{11}/;
    pesel = document.getElementById("pesel").value;
    var rok = pesel.substr(0, 2);
    var miesiac = pesel.substr(2, 2);
    var dzien = pesel.substr(4, 2);
    var myDiv = document.getElementById("wynik");

    const miesiace = [
        "",
        "styczen",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień",
    ];

    if (pesel.length >= 12 || !reg.test(pesel)) {
        myDiv.innerHTML = "<br>Podaj prawidłową wartość PESEL";
    } else {
        if (miesiac > 20) {
            rok = "20" + rok;
            miesiac = miesiac - 20;
        } else {
            rok = "19" + rok;
        }

        if (pesel.substr(09, 1) % 2 == 0) {
            sex = "Jesteś kobietą w wieku " + (2022 - rok) + " lat";
        } else {
            sex = "Jesteś mężczyzną w wieku " + (2022 - rok) + " lat";
        }

        if (2022 - rok > 90) {
            document.getElementById("test").innerHTML =
                "<br>Podaj prawidłową wartość PESEL<br>Chyba jestes za stary! " +
                (2022 - rok) +
                " lat?!";
        } else {
            if (miesiac > 12 || miesiac < 1) {
                document.getElementById("test").innerHTML =
                    "Kalendarz majów! - nieprawidłowy miesiac - " + miesiac;
            } else {
                if (dzien > 31 || dzien < 1) {
                    document.getElementById("test").innerHTML =
                        "Kalendarz majów - nieprawidłowy dzień! - " + dzien;
                } else {
                    myDiv.innerHTML =
                        "<br>" +
                        sex +
                        "<br>Twój dzień urodzenia to: " +
                        dzien +
                        " " +
                        miesiace[parseInt(miesiac)] +
                        " " +
                        rok +
                        "<br><br><button onclick=zapisz()>zapisz</button>";
                }
            }
        }
    }

    //document.getElementById("test").innerHTML = "" + rok;
}
const savepesel = [];
function zapisz() {
    savepesel.push(pesel);

    savepesel.sort();
    for (let i = 0; i < savepesel.length; i++) {
        document.getElementById("wynik").innerHTML += "<br>" + savepesel[i];
    }
}
