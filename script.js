const form = document.getElementById('myForm');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.firstname.value;
    const city = form.city.value;

    // Funkce pro spočítání samohlásek a souhlásek (zdroj, internet)
    function countVowelsAndConsonants(str) {
        const vowels = 'aeiouAEIOU';
        let vowelCount = 0;
        let consonantCount = 0;

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                vowelCount++;
            } else if (/[a-zA-Z]/.test(str[i])) {
                consonantCount++;
            }
        }

        return { vowelCount, consonantCount };
    }

    const firstNameCounts = countVowelsAndConsonants(firstName);
    const cityCounts = countVowelsAndConsonants(city);

    // výsledek
    const result = `Jmeno(${firstName}), Město(${city})`;

    resultParagraph.textContent = result;
});
