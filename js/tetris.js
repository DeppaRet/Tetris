function gameStart() {
    difficulty = document.getElementById('difficulty').options.selectedIndex;
    if (difficulty == 0) {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'J': [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'L': [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'Big square': [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]
        }
        availableFigures = ['I', 'O', 'Big square', 'J', 'L'];
    }
    else if (difficulty == 1) {
        tetrominos = {
            'I': [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0]
            ],
            'J': [
                [1,0,0],
                [1,1,1],
                [0,0,0],
            ],
            'L': [
                [0,0,1],
                [1,1,1],
                [0,0,0],
            ],
            'O': [
                [1,1],
                [1,1],
            ],
            'S': [
                [0,1,1],
                [1,1,0],
                [0,0,0],
            ],
            'Z': [
                [1,1,0],
                [0,1,1],
                [0,0,0],
            ],
            'T': [
                [0,1,0],
                [1,1,1],
                [0,0,0],
            ]
        }
        availableFigures = ['I', 'O', 'S', 'J', 'L', 'Z', 'T'];
    }
    else if (difficulty == 2) {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'J': [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'L': [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'S': [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ],
            'Z': [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ],
            'T': [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'U': [
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
            'Jo': [
                [0, 0, 1],
                [0, 0, 1],
                [1, 1, 1],
            ],
            'Dot': [
                [0, 1, 0],
            ],
            'inclined': [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ],
            'Big square': [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]
        }
        availableFigures = ['I', 'O', 'Big square', 'inclined',  'Dot', 'J', 'U', 'T', 'Z', 'S', 'L', 'Jo'];
    }
    else {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'Big square': [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]
        }
        availableFigures = ['I', 'O', 'Big square'];
    }

    tetromino = getNextTetromino();
    rAF = requestAnimationFrame(loop);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getFiguresByDifficulty() {
    difficulty = document.getElementById('difficulty').options.selectedIndex;
    if (difficulty == 0) {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'J': [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'L': [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'Big square': [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]
        }
        availableFigures = ['I', 'O', 'Big square', 'J', 'L'];
    } else if (difficulty == 1) {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'J': [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'L': [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'S': [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ],
            'Z': [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ],
            'T': [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ]
        }
        availableFigures = ['I', 'O', 'S', 'J', 'L', 'Z', 'T'];
    } else if (difficulty == 2) {
        tetrominos = {
            'I': [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            'J': [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'L': [
                [0, 0, 1],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'O': [
                [1, 1],
                [1, 1],
            ],
            'S': [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ],
            'Z': [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ],
            'T': [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0],
            ],
            'U': [
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
            'Jo': [
                [0, 0, 1],
                [0, 0, 1],
                [1, 1, 1],
            ],
            'Dot': [
                [0, 1, 0],
            ],
            'inclined': [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ],
            'Big square': [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ]
        }
        availableFigures = ['I', 'O', 'Big square', 'inclined', 'Dot', 'J', 'U', 'T', 'Z', 'S', 'L', 'Jo'];
    } else {
        tetrominos = {
            'I': [
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1]
                // [0, 0, 0, 0],
                // [1, 1, 1, 1],
                // [0, 0, 0, 0],
                // [0, 0, 0, 0]
            ],
            'O': [
                [0,0,0,0,0],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [0,0,0,0,0]
                // [1, 1],
                // [1, 1],
            ],
            'Big square': [
                [0,0,0,0,0],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [1,1,1,1,1],
                [0,0,0,0,0]
            ]
        }
        availableFigures = ['I', 'O', 'Big square'];
    }
    return (availableFigures);
}


// создаём последовательность фигур, которая появится в игре
function generateSequence() {
    // тут — сами фигуры

    const sequence = getFiguresByDifficulty();
    // const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z', 'U', 'J2', 'Dot', 'inclined', 'Big square', 'Pyramid'];

    while (sequence.length) {
        // случайным образом находим любую из них
        const rand = getRandomInt(0, sequence.length - 1);
        const name = sequence.splice(rand, 1)[0];
        // помещаем выбранную фигуру в игровой массив с последовательностями
        tetrominoSequence.push(name);
    }
}

// получаем следующую фигуру
function getNextTetromino() {
    // если следующей нет — генерируем
    if (tetrominoSequence.length === 0) {
        generateSequence();
    }
    // берём первую фигуру из массива
    const name = tetrominoSequence.pop();
    // сразу создаём матрицу, с которой мы отрисуем фигуру
    const matrix = tetrominos[name];

    // I и O стартуют с середины, остальные — чуть левее
    const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

    // I начинает с 21 строки (смещение -1), а все остальные — со строки 22 (смещение -2)
    const row = name === 'I' ? -1 : -2;

    // вот что возвращает функция
    return {
        name: name,      // название фигуры (L, O, и т.д.)
        matrix: matrix,  // матрица с фигурой
        row: row,        // текущая строка (фигуры стартуют за видимой областью холста)
        col: col         // текущий столбец
    };
}

// поворачиваем матрицу на 90 градусов
function rotate(matrix) {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
    );
    // на входе матрица, и на выходе тоже отдаём матрицу
    return result;
}

// проверяем после появления или вращения, может ли матрица (фигура) быть в этом месте поля или она вылезет за его границы
function isValidMove(matrix, cellRow, cellCol) {
    // проверяем все строки и столбцы
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] && (
                // если выходит за границы поля…
                cellCol + col < 0 ||
                cellCol + col >= playfield[0].length ||
                cellRow + row >= playfield.length ||
                // …или пересекается с другими фигурами
                playfield[cellRow + row][cellCol + col])
            ) {
                // то возвращаем, что нет, так не пойдёт
                return false;
            }
        }
    }
    // а если мы дошли до этого момента и не закончили раньше — то всё в порядке
    return true;
}

// когда фигура окончательна встала на своё место
function placeTetromino() {
    // обрабатываем все строки и столбцы в игровом поле
    for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {

                // если край фигуры после установки вылезает за границы поля, то игра закончилась
                if (tetromino.row + row < 0) {
                    return showGameOver();
                }
                playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
            }
        }
    }

    // проверяем, чтобы заполненные ряды очистились снизу вверх
    for (let row = playfield.length - 1; row >= 0; ) {
        if (playfield[row].every(cell => !!cell)) {
            score += (10 * level);
            level = Math.floor(score/(100) + 1);
            for (let r = row; r >= 0; r--) {
                for (let c = 0; c < playfield[r].length; c++) {
                    playfield[r][c] = playfield[r-1][c];
                }
            }
        }
        else {
            row--;
        }
    }

    // если игрок побил прошлый рекорд
    if (score > record) {
        record = score;
        localStorage.record = record;
        recordName = name;
        localStorage.recordName = recordName;
    }
    // получаем следующую фигуру
    tetromino = getNextTetromino();
}

// показываем надпись Game Over
function showGameOver() {
    // прекращаем всю анимацию игры
    cancelAnimationFrame(rAF);
    gameOver = true;
    context.fillStyle = 'black';
    context.globalAlpha = 0.75;
    context.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
    context.globalAlpha = 1;
    context.fillStyle = 'white';
    context.font = '36px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
}

// следим за нажатиями на клавиши
document.addEventListener('keydown', function(e) {
    if (gameOver) return;

    // стрелки влево и вправо
    if (e.which === 37 || e.which === 39) {
        const col = e.which === 37
            ? tetromino.col - 1
            : tetromino.col + 1;

        if (isValidMove(tetromino.matrix, tetromino.row, col)) {
            tetromino.col = col;
        }
    }

    // стрелка вверх — поворот
    if (e.which === 38) {
        // поворачиваем фигуру на 90 градусов
        const matrix = rotate(tetromino.matrix);
        if (isValidMove(matrix, tetromino.row, tetromino.col)) {
            tetromino.matrix = matrix;
        }
    }

    // стрелка вниз — ускорить падение
    if(e.which === 40) {
        const row = tetromino.row + 1;
        // если опускаться больше некуда — запоминаем новое положение
        if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
            tetromino.row = row - 1;
            // ставим на место и смотрим на заполненные ряды
            placeTetromino();
            return;
        }
        // запоминаем строку, куда стала фигура
        tetromino.row = row;
    }
});


function showScore() {
    contextScore.clearRect(0,0,canvasScore.width,canvasScore.height);
    contextScore.globalAlpha = 1;
    contextScore.fillStyle = 'black';
    contextScore.font = '18px Courier New';
    contextScore.fillText('Уровень: ' + level, 15, 20);
    contextScore.fillText('Очков:   ' + score, 15, 50);
    contextScore.fillText('Чемпион: ' + recordName, 160, 20);
    contextScore.fillText('Рекорд:  ' + record, 160, 50);

}
//функция рестарта
function restart(){
    gameOver = false;
    context.clearRect(0,0,canvas.width,canvas.height);
    // заполняем сразу массив пустыми ячейками
    for (let row = -2; row < 20; row++) {
        playfield[row] = [];
        for (let col = 0; col < 10; col++) {
            playfield[row][col] = 0;
        }
    }
    score = 0;
}

// главный цикл игры
function loop() {

    // начинаем анимацию
    rAF = requestAnimationFrame(loop);
    // очищаем холст
    context.clearRect(0,0,canvas.width,canvas.height);
    showScore();
    // рисуем игровое поле с учётом заполненных фигур
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
            if (playfield[row][col]) {
                const name = playfield[row][col];
                context.fillStyle = colors[name];

                // рисуем всё на один пиксель меньше, чтобы получился эффект «в клетку»
                context.fillRect(col * grid, row * grid, grid-1, grid-1);
            }
        }
    }

    // рисуем текущую фигуру
    if (tetromino) {

        // фигура сдвигается вниз каждые 35 кадров
        if (++count > (36 - level)) {
            tetromino.row++;
            count = 0;

            // если движение закончилось — рисуем фигуру в поле и проверяем, можно ли удалить строки
            if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
                tetromino.row--;
                placeTetromino();
            }
        }

        // не забываем про цвет текущей фигуры
        context.fillStyle = colors[tetromino.name];

        // отрисовываем её
        for (let row = 0; row < tetromino.matrix.length; row++) {
            for (let col = 0; col < tetromino.matrix[row].length; col++) {
                if (tetromino.matrix[row][col]) {

                    // и снова рисуем на один пиксель меньше
                    context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
                }
            }
        }
    }
}