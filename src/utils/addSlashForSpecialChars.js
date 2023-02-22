function getSpecialChars(str) {
    // eslint-disable-next-line no-useless-escape
    const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

    return specialChars.split('').filter((specialChar) => str.includes(specialChar));
}

function addSlashForSpecialChars(str = '') {
    let specialChars = getSpecialChars(str);

    specialChars.forEach((specialChar) => {
        str = str.replaceAll(specialChar, `\\${specialChar}`);
    });

    return str;
}

export default addSlashForSpecialChars;
