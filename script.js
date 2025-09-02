const title = document.getElementById('title');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
let colorIndex = 0;

setInterval(() => {
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 2000);

const saveBtn = document.getElementById('saveBtn');
const showBtn = document.getElementById('showBtn');
const deleteBtn = document.getElementById('deleteBtn');
const tableBody = document.getElementById('tableBody');
let editIndex = -1; 
saveBtn.addEventListener('click', () => {
    const rekam = document.getElementById('rekam').value;
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const penyakit = document.getElementById('penyakit').value;
    const nomorRuang = document.getElementById('nomorRuang').value;
    const bpjs = document.getElementById('bpjs').value;
    const tanggalMasuk = document.getElementById('tanggalMasuk').value;
    const tanggalKeluar = document.getElementById('tanggalKeluar').value;

    const patientData = {
        rekam,
        nama,
        alamat,
        penyakit,
        nomorRuang,
        bpjs,
        tanggalMasuk,
        tanggalKeluar
    };

    if (editIndex === -1) {
        let patients = JSON.parse(localStorage.getItem('patients')) || [];
        patients.push(patientData);
        localStorage.setItem('patients', JSON.stringify(patients));
    } else {
        let patients = JSON.parse(localStorage.getItem('patients'));
        patients[editIndex] = patientData;
        localStorage.setItem('patients', JSON.stringify(patients));
        editIndex = -1; 
    }

    clearForm();
    showPatients();
});

function showPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    tableBody.innerHTML = '';
    patients.forEach((patient, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.rekam}</td>
            <td>${patient.nama}</td>
            <td>${patient.alamat}</td>
            <td>${patient.penyakit}</td>
            <td>${patient.nomorRuang}</td>
            <td>${patient.bpjs}</td>
            <td>${patient.tanggalMasuk}</td>
            <td>${patient.tanggalKeluar}</td>
            <td>
                <button onclick="editPatient(${index})">Edit</button>
                <button onclick="deletePatient(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editPatient(index) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    const patient = patients[index];

    document.getElementById('rekam').value = patient.rekam;
    document.getElementById('nama').value = patient.nama;
    document.getElementById('alamat').value = patient.alamat;
    document.getElementById('penyakit').value = patient.penyakit;
    document.getElementById('nomorRuang').value = patient.nomorRuang;
    document.getElementById('bpjs').value = patient.bpjs;
    document.getElementById('tanggalMasuk').value = patient.tanggalMasuk;
    document.getElementById('tanggalKeluar').value = patient.tanggalKeluar;

    editIndex = index; 
}

function deletePatient(index) {
    let patients = JSON.parse(localStorage.getItem('patients'));
    patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(patients));
    showPatients();
}

function clearForm() {
    document.getElementById('patientForm').reset();
}

document.addEventListener('DOMContentLoaded', showPatients);

let isShown = false; 

function toggleShow() {
    const showBtn = document.getElementById('showBtn');
    isShown = !isShown; 

    if (isShown) {
        showBtn.innerHTML = '🔓 Show'; // emotikon gembok terbuka
        showPatients(); 
    } else {
        showBtn.innerHTML = '🔒 Show'; // emot gembok terkunci
        tableBody.innerHTML = ''; 
    }
}