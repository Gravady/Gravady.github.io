let antal_burkar_counter_numer = Math.floor(Math.random() * 10000);
let antal_nöjda_köpare = Math.floor(Math.random() * 40);
let antal_friluftsliv = Math.floor(Math.random() * 45000);

function counter() {
    antal_burkar_counter_numer += Math.floor(Math.random() * 13);
    antal_nöjda_köpare += Math.floor(Math.random() * 5);
    antal_friluftsliv += antal_burkar_counter_numer * Math.floor(Math.random() * 15);
    document.getElementById("antal_burkar_counter").innerHTML = `Burkar Köpta: ${antal_burkar_counter_numer}`;
    document.getElementById("nöjda_köpare_counter").innerHTML = `Nöjda Köpare: ${antal_nöjda_köpare}`;
    document.getElementById("kvadrat_meter_friluftsliv_räddat_counter").innerHTML = `Kvadrat Meter Friluftsliv Räddat: ${antal_friluftsliv}`;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(counter, 1000);
    
    const celebirtyWindow = document.getElementById("celebirty_window");
    const closeButton = document.getElementById("close_button");

    document.getElementById("celebirty_button").addEventListener("click", () => {
        celebirtyWindow.style.display = "block";
    });

    const closeWindow = () => {
        celebirtyWindow.style.display = "none";
    };

    closeButton.addEventListener("click", closeWindow);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && celebirtyWindow.style.display === "block") {
            closeWindow();
        }
    });

    const surströmmingProdukter = document.querySelectorAll(".surströmming-produkt");
    surströmmingProdukter.forEach((produkt) => {
        produkt.addEventListener("click", () => {
            const produktWindow = produkt.querySelector(".produkt_window");
            window.alert("Du har köpt en produkt");
        });
    });

    const om_oss = document.getElementById("om_oss");
    const företag = document.getElementById("företag");
    const kontakt = document.getElementById("kontakt");
    const privat = document.getElementById("privat");
    const twitter = document.getElementById("twitter");

    om_oss.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });

    företag.addEventListener("click", () => {
        window.location.href = "https://www.facebook.com";
    });
});

$("#close_button").on("click", function() {
    console.log("test");
});

