function switchLanguage(lang) {
    alert(`เปลี่ยนภาษาเป็น: ${lang === 'th' ? 'ไทย' : 'English'}`);
}

function search() {
    const query = document.getElementById('searchInput').value;
    alert(`ค้นหา: ${query}`);
}
