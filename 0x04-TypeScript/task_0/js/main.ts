interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Howard",
    lastName: "Wolowitz",
    age: 33,
    location: "California"
}

const student2: Student = {
    firstName: "Sheldon",
    lastName: "Cooper",
    age: 35,
    location: "California"
}

const studentList: Array<Student> = [student1, student2];

const styleSheet = `
    html {
        margin: 0;
        height: 100px;
    }
    body {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        margin: 10%
    }
    table {
        border-collapse: collapse;
    }
    thead {
        font-weight: bold;
    }
    td {
        padding: 10px;
        border: 1px solid gray;
        cursor: pointer;
    }
    td:hover {
        background: gainsboro;
    }

    td:nth-child(1) {
        text-align: center;
    }
    `;

    /**
     * Displays informarion about students in a table
     * @param students The list of students to display
     * @author Opiyo24 <https://github.com/Opiyo24
     */

export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</d>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.insertAdjacentElement('beforeend', headRow);

    for (const student of students) {
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', '<td>${student.firstName}</td>');
        bodyRow.insertAdjacentHTML('beforeend', '<td>${student.location}</td>');
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }

    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
