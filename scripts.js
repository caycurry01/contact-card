document.getElementById('add-contact').addEventListener('click', function () {
    const contact = {
        name: "Cayla Curry",
        tel: "+19105152421",
        email: "cayla.curry01@gmail.com",
        note: "LinkedIn: https://www.linkedin.com/in/caylacurry"
    };

    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL:${contact.tel}
EMAIL:${contact.email}
NOTE:${contact.note}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${contact.name}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
