import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data
import { principal, facultyDepartments } from './src/lib/facultyPeople.js';

const photosDir = path.join(__dirname, 'public', 'images', 'faculties');
const allPhotos = fs.readdirSync(photosDir).filter(f => f.endsWith('.JPG') || f.endsWith('.jpg') || f.endsWith('.png'));

const usedPhotos = new Set();
const facultiesWithoutPhoto = [];

function checkPerson(person) {
  if (person.photo && person.photo.trim() !== '') {
    const photoName = path.basename(person.photo);
    usedPhotos.add(photoName);
  } else {
    facultiesWithoutPhoto.push(person.name);
  }
}

// Check principal
checkPerson(principal);

// Check all departments
facultyDepartments.forEach(dept => {
  if (dept.head) checkPerson(dept.head);
  if (dept.assistants) {
    dept.assistants.forEach(checkPerson);
  }
});

const unusedPhotos = allPhotos.filter(p => !usedPhotos.has(p));

let out = "=== PHOTOS WITHOUT FACULTY DETAILS ===\n";
out += unusedPhotos.length > 0 ? unusedPhotos.join("\n") : "None";
out += "\n\n=== FACULTIES WITHOUT PHOTOS ===\n";
out += facultiesWithoutPhoto.length > 0 ? facultiesWithoutPhoto.join("\n") : "None";
fs.writeFileSync("output_details.txt", out);
