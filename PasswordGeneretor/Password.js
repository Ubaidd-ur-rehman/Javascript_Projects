function generatePassword() {
    const passwordBox = document.getElementById('inputpswd');
    const length = 12;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const specialchar = "!@#$%^&*()_+~?></.,|\}{";
    const allchars = upperCase + lowerCase + numbers + specialchar;

    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialchar[Math.floor(Math.random() * specialchar.length)];

    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById('inputpswd');
    const copyIcon = document.getElementById('copyIcon');

    passwordBox.select();
    document.execCommand('copy');

    // Change icon color or provide visual feedback if needed
    copyIcon.style.color = 'green';

    // Reset icon color after a short delay (optional)
    setTimeout(() => {
        copyIcon.style.color = '';
    }, 1000);
}