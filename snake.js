// The function gets called when the window is fully loaded
window.onload = function () {
  // Get the canvas and context
  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");

  // quiz
  var quizMode = false;

  var quizData = [
    {
      question:
        "Để tránh xung đột quân sự với quân dân miền Bắc Việt Nam, năm 1946, Pháp đã",
      options: [
        "ký Hiệp ước Hoa - Pháp với Trung Hoa Dân quốc.",
        "phát động chiến tranh tâm lý và chiến tranh kinh tế.",
        "sử dụng lực lượng quân đội Sài Gòn để dọn đường.",
        "tiêu diệt cơ quan đầu não kháng chiến của Việt Nam.",
      ],
      answer: 0,
    },
    {
      question:
        "Việc giải quyết thành công nạn đói, nạn dốt và khó khăn về tài chính sau Cách mạng tháng Tám năm 1945 ở Việt Nam có ý nghĩa gì?",
      options: [
        "Đánh dấu hoàn thành nhiệm vụ đánh đổ chế độ phong kiến.",
        "Tạo cơ sở để các nước xã hội chủ nghĩa công nhận Việt Nam.",
        "Tạo cơ sở thực lực để ký Hiệp định Sơ bộ với Pháp.",
        "Góp phần tạo ra sức mạnh để bảo vệ chế độ mới.",
      ],
      answer: 3,
    },
    {
      question:
        "Những thế lực nào đã đe dọa nền hòa bình ở Việt Nam sau Cách mạng tháng Tám năm 1945?",
      options: [
        "Trung Hoa Dân quốc, Pháp, Nhật.",
        "Trung Hoa Dân quốc, Pháp, Anh, Nhật.",
        "Trung Hoa Dân quốc, Pháp, Anh, Mỹ.",
        "Anh, Nhật, Mỹ.",
      ],
      answer: 1,
    },
    {
      question:
        "Sau cách mạng tháng Tám năm 1945, Chính phủ đã phát động phong trào gì để giải quyết khó khăn về tài chính?",
      options: [
        `“Nhường cơm sẻ áo”, “Hũ gạo cứu đói”…`,
        `“Tăng gia sản xuất! Tăng gia sản xuất ngay!”.`,
        `Xây dựng “Quỹ độc lập”, “Tuần lễ vàng”.`,
        `Tổ chức “ Ngày đồng tâm”, “Hũ gạo cứu đói”.`,
      ],
      answer: 2,
    },
    {
      question:
        "Đảng, Chính phủ và Chủ tịch Hồ Chí Minh thực hiện chủ trương tạm thời hòa hoãn, tránh xung đột với quân Trung Hoa Dân quốc (9/1945 - 3/1946) vì",
      options: [
        "muốn tránh trường hợp cùng một lúc phải đối phó với nhiều kẻ thù.",
        "tập trung lực lượng để cùng một lúc phải giải quyết nhiều khó khăn.",
        "quân Trung Hoa Dân quốc là kẻ thù nguy hiểm nhất của cách mạng.",
        `đất nước còn nhiều khó khăn trong tình thế “Ngàn cân treo sợi tóc”.`,
      ],
      answer: 0,
    },
    {
      question:
        "Biến một hiệp ước hai bên thành thỏa thuận ba bên có lợi cho cách mạng là ý nghĩa của",
      options: [
        "Tạm ước Việt - Pháp (14/9/1946).",
        "Hiệp định Giơnevơ (21/7/1954).",
        "Hiệp định Sơ bộ Việt - Pháp (3/6/1946). ",
        "Hiệp ước Hoa - Pháp (28/2/21946).",
      ],
      answer: 2,
    },
    {
      question:
        "Thế lực nào sau đây đã dọn đường cho thực dân Pháp quay trở lại xâm lược Việt Nam lần thứ hai (9/1945)?",
      options: [
        "Quân đội Anh. ",
        "Quân đội Trung Hoa Dân quốc.",
        "Quân đội Nhật.",
        "Quân đội Mỹ.",
      ],
      answer: 0,
    },
    {
      question:
        "Từ ngày 2/9/1945 đến ngày 6/3/1946, Chính phủ Việt Nam Dân chủ Cộng hòa thực hiện chủ trương nào đối với quân Trung Hoa Dân quốc?",
      options: [
        "Hòa hoãn, tránh xung đột.",
        "Xung đột về quân sự.",
        "Đối đầu căng thẳng.",
        "Ký hiệp ước hòa bình.",
      ],
      answer: 0,
    },
    {
      question:
        "Nội dung nào sau đây không phải là thành tựu trên lĩnh vực giáo dục, văn hóa của Việt Nam trong năm đầu sau Cách mạng tháng Tám năm 1945?",
      options: [
        "Số lượng người biết đọc, biết viết ngày càng tăng.",
        "Công tác y tế, vệ sinh phòng bệnh được tăng cường.",
        "Phong trào Bình dân học vụ kết thúc thắng lợi.",
        "Báo chí cách mạng được quan tâm, phát triển.",
      ],
      answer: 2,
    },
    {
      question:
        "Nội dung nào sau đây đúng về tình hình nước Việt Nam Dân chủ Cộng hòa ngay sau Cách mạng tháng Tám năm 1945?",
      options: [
        "Quyền lãnh đạo của Đảng chưa được xác lập.",
        "Lực lượng vũ trang còn non yếu.",
        "Quyền tự do của nhân dân chưa được xác lập.",
        "Lực lượng chính trị chưa được hình thành.",
      ],
      answer: 1,
    },
    {
      question:
        "Nội dung nào sau đây không phải là quyết định trong phiên họp đầu tiên (3/1946) của Quốc hội khóa I nước Việt Nam Dân chủ Cộng hòa?",
      options: [
        "Xác nhận thành tích của Chính phủ Lâm thời.",
        "Cho phép lưu hành tiền Việt Nam.",
        "Thông qua Chính phủ Liên hiệp kháng chiến.",
        "Lập ra Ban dự thảo Hiến pháp.",
      ],
      answer: 1,
    },
    {
      question:
        "Điểm tương đồng trong chính sách của chính quyền Xô viết Nghệ - Tĩnh (1930 - 1931) và chính quyền Việt Nam Dân chủ Cộng hòa (1945 - 1946) là",
      options: [
        "thành lập lực lượng vũ trang và Hội Liên hiệp quốc dân.",
        "kiên quyết trừng trị những thế lực ra mặt phá hoại.",
        "cho phát hành tiền giấy Việt Nam trên phạm vi cả nước.",
        "thành lập Hội đồng Nhân dân và Ủy ban Nhân dân các cấp.",
      ],
      answer: 1,
    },
    {
      question:
        "Cuộc bầu cử Quốc hội khóa I và Hội đồng nhân dân các cấp ở Việt Nam trong những năm 1945 - 1946 có ý nghĩa nào sau đây?",
      options: [
        "Góp phần kiện toàn bộ máy chính quyền dân chủ nhân dân.",
        "Tạo cơ sở để các nước XHCN đặt quan hệ ngoại giao với Việt Nam.",
        "Đánh dấu sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
        "Nâng cao vị thế, uy tín của Việt Nam trên trường quốc tế.",
      ],
      answer: 0,
    },
    {
      question:
        "Việt Nam ký Hiệp định Sơ bộ với Pháp ngày 6/3/1946 với tư cách",
      options: [
        "một quốc gia độc lập.",
        "một nhà nước liên bang.",
        "một quốc gia tự trị.",
        "một dân tộc thuộc địa.",
      ],
      answer: 0,
    },
    {
      question:
        "Nội dung nào sau đây không phản ánh hành động của Pháp sau khi kí với Chính phủ Việt Nam Hiệp định Sơ bộ (6/3/1946) và Tạm ước (14/9/1946)?",
      options: [
        "Không thi hành các nội dung Hiệp định và Tạm ước.",
        "Tiếp tục gây xung đột vũ trang ở Nam Bộ.",
        "Tìm cách phá hoại nội dung Hiệp định và Tạm ước.",
        "Gửi tối hậu thư đòi ta giải tán lực lượng tự vệ.",
      ],
      answer: 3,
    },
    {
      question:
        "Thuận lợi cơ bản của nước Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám năm 1945 là gì?",
      options: [
        "Sự lãnh đạo tài tình của Đảng Cộng sản Đông Dương.",
        "Việt Nam đã giành được độc lập và xây dựng được chính quyền của riêng mình.",
        "Sự ủng hộ của quần chúng nhân dân.",
        "Sự phát triển của phong trào cách mạng thế giới.",
      ],
      answer: 3,
    },
    {
      question:
        "Nhiệm vụ hàng đầu của cách mạng Việt Nam sau khi Cách mạng tháng Tám thành công là gì?",
      options: [
        "Đấu tranh chống thù trong giặc ngoài.",
        "Xây dựng và bảo vệ chính quyền cách mạng.",
        "Giải quyết tàn dư của chế độ cũ để lại.",
        "Thực hiện đại đoàn kết dân tộc.",
      ],
      answer: 1,
    },
    {
      question:
        "Thực tế cuộc đấu tranh chống ngoại xâm sau Cách mạng tháng Tám năm 1945 đến trước ngày 19/12/1946 ở Việt Nam cho thấy vai trò của đấu tranh ngoại giao là",
      options: [
        "mang tính quyết định.",
        "hỗ trợ thắng lợi quân sự.",
        "phụ thuộc vào thắng lợi quân sự.",
        "độc lập với đấu tranh quân sự.",
      ],
      answer: 1,
    },
    {
      question:
        "Từ cuộc đấu tranh ngoại giao sau Cách mạng tháng Tám 1945 có thể rút ra bài học kinh nghiệm gì cho cuộc đấu tranh bảo vệ chủ quyền Tổ quốc hiện nay?",
      options: [
        "Luôn mềm dẻo trong đấu tranh và trong sách lược.",
        "Cương quyết trong đấu ranh, cứng rắn về sách lược.",
        "Mềm dẻo về sách lược, cương quyết trong đấu tranh.",
        "Luôn nhân nhượng với kẻ thù để có môi trường hòa bình.",
      ],
      answer: 2,
    },
    {
      question:
        "Tinh thần yêu chuộng hòa bình của lời kêu gọi toàn quốc kháng chiến được Đảng ta phát huy như thế nào trong cuộc đấu tranh bảo vệ chủ quyền biển đảo hiện nay?",
      options: [
        "Chấp nhận đổi một phần chủ quyền biển đảo cho một số lợi ích khác.",
        "Đấu tranh hòa bình, trên cơ sở tuân thủ luật pháp quốc tế.",
        "Nhân nhượng với Trung Quốc một số điều khoản.",
        "Đàm phán, chia sẻ quyền lợi với Trung Quốc.",
      ],
      answer: 1,
    },
    // You can add more questions here
  ];

  let quizKeyHandler; // place this at the top near quizMode

  function startQuiz() {
    quizMode = true;
    var quiz = quizData[Math.floor(Math.random() * quizData.length)];

    // Display quiz
    document.getElementById("quiz-question").innerText = quiz.question;
    var buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach((btn, index) => {
      btn.innerText = quiz.options[index];
      // btn.onclick = () => checkQuizAnswer(index, quiz.answer);
    });

    // Add key handler ONCE
    quizKeyHandler = function (e) {
      if (!quizMode) return;
      console.log("lmao");

      const key = e.key;
      if (["1", "2", "3", "4"].includes(key)) {
        // Determine which answer
        checkQuizAnswer(parseInt(key) - 1, quiz.answer);
      }
    };
    // Attach globally once
    window.addEventListener("keydown", quizKeyHandler);
    // document.addEventListener("keydown", quizKeyHandler);
    document.getElementById("quiz-overlay").style.display = "block";
  }

  function checkQuizAnswer(selected, correct) {
    quizMode = false;
    window.removeEventListener("keydown", quizKeyHandler);
    document.getElementById("quiz-overlay").style.display = "none";
    // document.getElementById("viewport").focus(); // ✅ refocus for keyboard control

    if (selected !== correct) {
      gameover = true;
    }
  }

  var sounds = {
    lose: new Audio("assets/audios/collisionpad.wav"),
    grow: new Audio("assets/audios/coin.wav"),
    move: new Audio("assets/audios/collision.wav"),
  };

  var canvas = document.getElementById("viewport");
  var context = canvas.getContext("2d");

  // Fix blur by matching canvas size to screen resolution
  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    // Save current transformation
    context.setTransform(1, 0, 0, 1, 0, 0); // Reset transform before resizing

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    // Apply devicePixelRatio scaling ONCE cleanly
    context.scale(dpr, dpr);
  }

  // call once + when resizing
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Timing and frames per second
  var lastframe = 0;
  var fpstime = 0;
  var framecount = 0;
  var fps = 0;

  var initialized = false;

  // Images
  var images = [];
  var tileimage;

  // Image loading global variables
  var loadcount = 0;
  var loadtotal = 0;
  var preloaded = false;

  // Load images
  function loadImages(imagefiles) {
    // Initialize variables
    loadcount = 0;
    loadtotal = imagefiles.length;
    preloaded = false;

    // Load the images
    var loadedimages = [];
    for (var i = 0; i < imagefiles.length; i++) {
      // Create the image object
      var image = new Image();

      // Add onload event handler
      image.onload = function () {
        loadcount++;
        if (loadcount == loadtotal) {
          // Done loading
          preloaded = true;
        }
      };

      // Set the source url of the image
      image.src = imagefiles[i];

      // Save to the image array
      loadedimages[i] = image;
      console.log("image: ", image);
    }

    // Return an array of images
    return loadedimages;
  }

  // Level properties
  var Level = function (columns, rows, tilewidth, tileheight) {
    this.columns = columns;
    this.rows = rows;
    this.tilewidth = tilewidth;
    this.tileheight = tileheight;

    // Initialize tiles array
    this.tiles = [];
    for (var i = 0; i < this.columns; i++) {
      this.tiles[i] = [];
      for (var j = 0; j < this.rows; j++) {
        this.tiles[i][j] = 0;
      }
    }
  };

  // Generate a default level with walls
  Level.prototype.generate = function () {
    for (var i = 0; i < this.columns; i++) {
      for (var j = 0; j < this.rows; j++) {
        if (i == 0 || i == this.columns - 1 || j == 0 || j == this.rows - 1) {
          // Add walls at the edges of the level
          this.tiles[i][j] = 1;
        } else {
          // Add empty space
          this.tiles[i][j] = 0;
        }
      }
    }
  };

  // Snake
  var Snake = function () {
    this.init(0, 0, 1, 10, 1);
  };

  // Direction table: Up, Right, Down, Left
  Snake.prototype.directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  // Initialize the snake at a location
  Snake.prototype.init = function (x, y, direction, speed, numsegments) {
    this.x = x;
    this.y = y;
    this.direction = direction; // Up, Right, Down, Left
    this.speed = speed; // Movement speed in blocks per second
    this.movedelay = 0;

    // Reset the segments and add new ones
    this.segments = [];
    this.growsegments = 0;
    for (var i = 0; i < numsegments; i++) {
      this.segments.push({
        x: this.x - i * this.directions[direction][0],
        y: this.y - i * this.directions[direction][1],
      });
    }
  };

  // Increase the segment count
  Snake.prototype.grow = function () {
    this.growsegments++;
  };

  // Check we are allowed to move
  Snake.prototype.tryMove = function (dt) {
    this.movedelay += dt;
    var maxmovedelay = 1 / this.speed;
    if (this.movedelay > maxmovedelay) {
      return true;
    }
    return false;
  };

  // Get the position of the next move
  Snake.prototype.nextMove = function () {
    var nextx = this.x + this.directions[this.direction][0];
    var nexty = this.y + this.directions[this.direction][1];
    return { x: nextx, y: nexty };
  };

  // Move the snake in the direction
  Snake.prototype.move = function () {
    // Get the next move and modify the position
    var nextmove = this.nextMove();
    this.x = nextmove.x;
    this.y = nextmove.y;

    // Get the position of the last segment
    var lastseg = this.segments[this.segments.length - 1];
    var growx = lastseg.x;
    var growy = lastseg.y;

    // Move segments to the position of the previous segment
    for (var i = this.segments.length - 1; i >= 1; i--) {
      this.segments[i].x = this.segments[i - 1].x;
      this.segments[i].y = this.segments[i - 1].y;
    }

    // Grow a segment if needed
    if (this.growsegments > 0) {
      this.segments.push({ x: growx, y: growy });
      this.growsegments--;
    }

    // Move the first segment
    this.segments[0].x = this.x;
    this.segments[0].y = this.y;

    // Reset movedelay
    this.movedelay = 0;
  };

  // Create objects
  var snake = new Snake();

  const TILE_SIZE = 32; // or any size you want
  const COLS = Math.floor(window.innerWidth / TILE_SIZE);
  const ROWS = Math.floor(window.innerHeight / TILE_SIZE);

  var level = new Level(COLS, ROWS, TILE_SIZE, TILE_SIZE);

  // Variables
  var score = 0; // Score
  var gameover = true; // Game is over
  var gameovertime = 1; // How long we have been game over
  var gameoverdelay = 0.5; // Waiting time after game over

  // Initialize the game
  function init() {
    // Load images
    images = loadImages(["assets/images/snake-graphics.png"]);
    tileimage = images[0];

    // Add mouse events
    canvas.addEventListener("mousedown", onMouseDown);

    // Add keyboard events
    document.addEventListener("keydown", onKeyDown);

    // New game
    newGame();
    gameover = true;

    // Enter main loop
    main(0);
  }

  // Check if we can start a new game
  function tryNewGame() {
    if (gameovertime > gameoverdelay) {
      newGame();
      gameover = false;
    }
  }

  function newGame() {
    // Initialize the snake
    snake.init(10, 10, 1, 7, 2);

    // Generate the default level
    level.generate();

    // Add an apple
    addApple();

    // Initialize the score
    score = 0;

    // Initialize variables
    gameover = false;
  }

  // Add an apple to the level at an empty position
  function addApple() {
    // Loop until we have a valid apple
    var valid = false;
    while (!valid) {
      // Get a random position
      var ax = randRange(0, level.columns - 1);
      var ay = randRange(0, level.rows - 1);

      // Make sure the snake doesn't overlap the new apple
      var overlap = false;
      for (var i = 0; i < snake.segments.length; i++) {
        // Get the position of the current snake segment
        var sx = snake.segments[i].x;
        var sy = snake.segments[i].y;

        // Check overlap
        if (ax == sx && ay == sy) {
          overlap = true;
          break;
        }
      }

      // Tile must be empty
      if (!overlap && level.tiles[ax][ay] == 0) {
        // Add an apple at the tile position
        level.tiles[ax][ay] = 2;
        valid = true;
      }
    }
  }

  // Main loop
  function main(tframe) {
    // Request animation frames
    window.requestAnimationFrame(main);

    if (!initialized) {
      // Preloader

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a progress bar
      var loadpercentage = loadcount / loadtotal;
      context.strokeStyle = "#ff8080";
      context.lineWidth = 3;
      context.strokeRect(18.5, 0.5 + canvas.height - 51, canvas.width - 37, 32);
      context.fillStyle = "#ff8080";
      context.fillRect(
        18.5,
        0.5 + canvas.height - 51,
        loadpercentage * (canvas.width - 37),
        32,
      );

      // Draw the progress text
      var loadtext = "Loaded " + loadcount + "/" + loadtotal + " images";
      context.fillStyle = "#000000";
      context.font = "16px Verdana";
      context.fillText(loadtext, 18, 0.5 + canvas.height - 63);

      if (preloaded) {
        initialized = true;
      }
    } else {
      // Update and render the game
      update(tframe);
      render();
    }
  }

  // Update the game state
  function update(tframe) {
    var dt = (tframe - lastframe) / 1000;
    lastframe = tframe;

    // Update the fps counter
    updateFps(dt);

    if (!gameover) {
      updateGame(dt);
    } else {
      gameovertime += dt;
    }
  }

  function updateGame(dt) {
    // Pause game while quiz is active
    if (quizMode) return;

    // Move the snake
    if (snake.tryMove(dt)) {
      // Check snake collisions

      // Get the coordinates of the next move
      var nextmove = snake.nextMove();
      var nx = nextmove.x;
      var ny = nextmove.y;

      if (nx >= 0 && nx < level.columns && ny >= 0 && ny < level.rows) {
        if (level.tiles[nx][ny] == 1) {
          // Collision with a wall
          sounds.grow.pause();
          sounds.lose.play();
          gameover = true;
        }

        // Collisions with the snake itself
        for (var i = 0; i < snake.segments.length; i++) {
          var sx = snake.segments[i].x;
          var sy = snake.segments[i].y;

          if (nx == sx && ny == sy) {
            // Found a snake part
            gameover = true;
            break;
          }
        }

        if (!gameover) {
          // The snake is allowed to move

          // Move the snake
          snake.move();

          // Check collision with an apple
          if (level.tiles[nx][ny] == 2) {
            // play sound
            sounds.grow.pause();
            sounds.grow.currentTime = 0;
            sounds.grow.play();

            // Remove the apple
            level.tiles[nx][ny] = 0;

            // Add a new apple
            addApple();

            // Grow the snake
            snake.grow();

            // Add a point to the score
            score++;

            // ----- NEW: Trigger Quiz -----
            startQuiz();
            quizMode = true;
            return; // Stop game update until quiz is done
          }
        }
      } else {
        // Out of bounds
        gameover = true;
      }

      if (gameover) {
        gameovertime = 0;
      }
    }
  }

  function updateFps(dt) {
    if (fpstime > 0.25) {
      // Calculate fps
      fps = Math.round(framecount / fpstime);

      // Reset time and framecount
      fpstime = 0;
      framecount = 0;
    }

    // Increase time and framecount
    fpstime += dt;
    framecount++;
  }

  // Render the game
  function render() {
    // Draw background
    // context.fillStyle = "#577ddb";
    context.fillStyle = "#bcae76";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawLevel();
    drawSnake();

    // score
    context.fillStyle = "#fff";
    context.font = "20px Verdana";
    context.textAlign = "right";
    context.fillText("Điểm: " + score, window.innerWidth - 32, 20);
    context.textAlign = "left";

    // Game over
    if (gameover) {
      context.fillStyle = "rgba(0, 0, 0, 0.5)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#ffffff";
      context.font = "24px Verdana";
      drawCenterText(
        "Nhấn một phím bất kì để chơi",
        0,
        window.innerHeight / 2,
        window.innerWidth,
      );
    }
  }

  // Draw the level tiles
  function drawLevel() {
    for (var i = 0; i < level.columns; i++) {
      for (var j = 0; j < level.rows; j++) {
        // Get the current tile and location
        var tile = level.tiles[i][j];
        var tilex = i * level.tilewidth;
        var tiley = j * level.tileheight;

        // Draw tiles based on their type
        if (tile == 0) {
          // Empty space
          context.fillStyle = "#f7e697";
          context.fillRect(tilex, tiley, level.tilewidth, level.tileheight);
        } else if (tile == 1) {
          // Wall
          context.fillStyle = "#bcae76";
          context.fillRect(tilex, tiley, level.tilewidth, level.tileheight);
        } else if (tile == 2) {
          // Apple

          // Draw apple background
          context.fillStyle = "#f7e697";
          context.fillRect(tilex, tiley, level.tilewidth, level.tileheight);

          // Draw the apple image
          var tx = 0;
          var ty = 3;
          var tilew = 64;
          var tileh = 64;
          context.drawImage(
            tileimage,
            tx * tilew,
            ty * tileh,
            tilew,
            tileh,
            tilex,
            tiley,
            level.tilewidth,
            level.tileheight,
          );
        }
      }
    }
  }

  // Draw the snake
  function drawSnake() {
    // Loop over every snake segment
    for (var i = 0; i < snake.segments.length; i++) {
      var segment = snake.segments[i];
      var segx = segment.x;
      var segy = segment.y;
      var tilex = segx * level.tilewidth;
      var tiley = segy * level.tileheight;

      // Sprite column and row that gets calculated
      var tx = 0;
      var ty = 0;

      if (i == 0) {
        // Head; Determine the correct image
        var nseg = snake.segments[i + 1]; // Next segment
        if (segy < nseg.y) {
          // Up
          tx = 3;
          ty = 0;
        } else if (segx > nseg.x) {
          // Right
          tx = 4;
          ty = 0;
        } else if (segy > nseg.y) {
          // Down
          tx = 4;
          ty = 1;
        } else if (segx < nseg.x) {
          // Left
          tx = 3;
          ty = 1;
        }
      } else if (i == snake.segments.length - 1) {
        // Tail; Determine the correct image
        var pseg = snake.segments[i - 1]; // Prev segment
        if (pseg.y < segy) {
          // Up
          tx = 3;
          ty = 2;
        } else if (pseg.x > segx) {
          // Right
          tx = 4;
          ty = 2;
        } else if (pseg.y > segy) {
          // Down
          tx = 4;
          ty = 3;
        } else if (pseg.x < segx) {
          // Left
          tx = 3;
          ty = 3;
        }
      } else {
        // Body; Determine the correct image
        var pseg = snake.segments[i - 1]; // Previous segment
        var nseg = snake.segments[i + 1]; // Next segment
        if (
          (pseg.x < segx && nseg.x > segx) ||
          (nseg.x < segx && pseg.x > segx)
        ) {
          // Horizontal Left-Right
          tx = 1;
          ty = 0;
        } else if (
          (pseg.x < segx && nseg.y > segy) ||
          (nseg.x < segx && pseg.y > segy)
        ) {
          // Angle Left-Down
          tx = 2;
          ty = 0;
        } else if (
          (pseg.y < segy && nseg.y > segy) ||
          (nseg.y < segy && pseg.y > segy)
        ) {
          // Vertical Up-Down
          tx = 2;
          ty = 1;
        } else if (
          (pseg.y < segy && nseg.x < segx) ||
          (nseg.y < segy && pseg.x < segx)
        ) {
          // Angle Top-Left
          tx = 2;
          ty = 2;
        } else if (
          (pseg.x > segx && nseg.y < segy) ||
          (nseg.x > segx && pseg.y < segy)
        ) {
          // Angle Right-Up
          tx = 0;
          ty = 1;
        } else if (
          (pseg.y > segy && nseg.x > segx) ||
          (nseg.y > segy && pseg.x > segx)
        ) {
          // Angle Down-Right
          tx = 0;
          ty = 0;
        }
      }

      // Draw the image of the snake part
      context.drawImage(
        tileimage,
        tx * 64,
        ty * 64,
        64,
        64,
        tilex,
        tiley,
        level.tilewidth,
        level.tileheight,
      );
    }
  }

  // Draw text that is centered
  function drawCenterText(text, x, y, width) {
    var textdim = context.measureText(text);
    context.fillText(text, x + (width - textdim.width) / 2, y);
  }

  // Get a random int between low and high, inclusive
  function randRange(low, high) {
    return Math.floor(low + Math.random() * (high - low + 1));
  }

  // Mouse event handlers
  function onMouseDown(e) {
    // Get the mouse position
    var pos = getMousePos(canvas, e);

    if (gameover) {
      // Start a new game
      tryNewGame();
    } else {
      // Change the direction of the snake
      snake.direction = (snake.direction + 1) % snake.directions.length;
    }
  }

  // Keyboard event handler
  function onKeyDown(e) {
    if (gameover) {
      tryNewGame();
    } else {
      // play move sound
      const playMoveSound = () => {
        sounds.move.pause();
        sounds.move.currentTime = 0;
        sounds.move.play();
      };

      if (e.keyCode == 37 || e.keyCode == 65) {
        // Left or A
        if (snake.direction != 1) {
          snake.direction = 3;
        }
        playMoveSound();
      } else if (e.keyCode == 38 || e.keyCode == 87) {
        // Up or W
        if (snake.direction != 2) {
          snake.direction = 0;
        }
        playMoveSound();
      } else if (e.keyCode == 39 || e.keyCode == 68) {
        // Right or D
        if (snake.direction != 3) {
          snake.direction = 1;
        }
        playMoveSound();
      } else if (e.keyCode == 40 || e.keyCode == 83) {
        // Down or S
        if (snake.direction != 0) {
          snake.direction = 2;
        }
        playMoveSound();
      }

      // Grow for demonstration purposes
      // if (e.keyCode == 32) {
      //   snake.grow();
      // }
    }
  }

  // Get the mouse position
  function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.round(
        ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
      ),
      y: Math.round(
        ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
      ),
    };
  }

  // Call init to start the game
  init();
};
