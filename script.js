var students = ['Бартновський Микита','Блажиєвський Віталій','Буканов Ілля','Букрєєва Олександра',
        'Буценко Данило','Данилов Ілля','Дімітров Микола','Іваницький Руслан','Максименко Єгор','Ольховик Денис',
        'Полупан Олександр','Прокидянчик Даніїл','Сичов Олександр','Томащук Іван','Хижняк Данило','Цехмістро Данило',
        'Шевченко Дмитро','Шиленко Михайло','Щербак Аліна','Щолкін Михайло','Янакаєв Айдар'];
        var disciplines = ['Моделювання систем','Системне програмне забезпечення',"Архітектура комп'ютера",
        "Комп'ютерна схемотехніка",'Internet-технології','Мікроконтроллери та їх системи','Фізичне виховання'];
        var intervalId;
        var generatingData = false;
        var rowIndex = 1;

        // Функція для додавання нового рядка до таблиці
        function addRow() {
            var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(-1);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            // Генеруємо випадкові дані
            var randomStudents = students[Math.round(Math.random() * (students.length - 1))];
            var randomDisciolines = disciplines[Math.round(Math.random() * (disciplines.length - 1))];
            var randomGrade = Math.floor(Math.random() * (101-59) + 59);

            // Вставляємо дані в рядок
            cell1.innerHTML = randomStudents;
            cell2.innerHTML = randomDisciolines;
            cell3.innerHTML = randomGrade;

            rowIndex++;
        }

        // Додаємо обробник події для кнопки "Старт"
        document.getElementById("startButton").addEventListener("click", function() {
            if (!generatingData) {
                document.getElementById("dataTable").style.display = 'inline-table';
                var interval = parseInt(document.getElementById("intervalInput").value);
                intervalId = setInterval(addRow, interval);
                generatingData = true;
            }
        });

        // Додаємо обробник події для кнопки "Зупинити"
        document.getElementById("stopButton").addEventListener("click", function() {
            clearInterval(intervalId);
            generatingData = false;
        });
        // Додаємо обробник події для кнопки "Очистити"
        document.getElementById("clearButton").addEventListener("click", function() {
            document.getElementById("dataTable").style.display = 'none';
            var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
            table.innerHTML = ''; // Очищуємо tbody
            rowIndex = 1;
            clearInterval(intervalId);
            generatingData = false;
        
        });