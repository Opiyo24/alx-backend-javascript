export default function getStdentByLocation(students, city) {
    return students.filter((student) => student.location === city);
}