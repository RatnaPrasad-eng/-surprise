/* =========================================
   PIN LOCK
========================================= */

const correctPIN = "2321";

const pinPage = document.getElementById("pinPage");
const pinInput = document.getElementById("pinInput");
const unlockButton = document.getElementById("unlockButton");
const pinError = document.getElementById("pinError");
const intro = document.querySelector(".intro");

function unlockWebsite() {

    const enteredPIN = pinInput.value;

    if (enteredPIN === correctPIN) {

        pinError.textContent = "Unlocked ✨";

        pinPage.classList.add("unlocking");

        setTimeout(() => {

            pinPage.style.display = "none";

            intro.classList.remove("hidden");

        }, 700);

    } else {

        pinError.textContent = "Hmm... that's not the right PIN 💜";

        pinInput.value = "";

        pinInput.focus();

        pinInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 350
            }
        );
    }
}


unlockButton.addEventListener("click", unlockWebsite);


pinInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        unlockWebsite();
    }

});

/* =========================================
   BIRTHDAY WEBSITE - MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. OPENING SCREEN
========================================= */

const startButton = document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener("click", () => {

        const intro = document.querySelector(".intro");

        intro.classList.add("exit");

        setTimeout(() => {

            showBirthday();

        }, 1000);

    });

}


/* =========================================
   2. BIRTHDAY SCREEN
========================================= */

function showBirthday() {

    document.body.innerHTML = `

        <section class="birthday">

            <div class="stars"></div>

            <div class="birthday-content">

                <p class="small-text">
                    Today is a special day ✨
                </p>

                <h1>
                    Happy Birthday,
                    <span class="JOY">
                        JOY
                    </span>
                    ❤️
                </h1>

                <p>
                    I made this little corner of the internet
                    just to make your day a little more special.
                </p>

                <button id="continueButton">
                    There's more... ✨
                </button>

            </div>

        </section>

    `;

    createStars();

    const continueButton =
        document.getElementById("continueButton");

    continueButton.addEventListener(
        "click",
        showJourney
    );

}


/* =========================================
   3. STAR EFFECT
========================================= */

function createStars() {

    const stars =
        document.querySelector(".stars");

    if (!stars) return;

    for (let i = 0; i < 40; i++) {

        const star =
            document.createElement("span");

        star.innerHTML = "✦";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        stars.appendChild(star);

    }

}


/* =========================================
   4. THREE YEAR JOURNEY
========================================= */

function showJourney() {
    document.body.innerHTML = `
        <section class="journey-page">

            <div class="journey-header">
                <p class="small-text">A little journey...</p>

                <h1>Three Years ✨</h1>

                <p>
                    Three birthdays.
                    Three little gifts.
                    Three chapters worth remembering.
                </p>
            </div>

            <div class="timeline">

                <!-- 2024 -->
                <div class="year-card" id="year2024">
                    <div class="year-number">2024</div>
                    <div class="year-icon">💌</div>

                    <h2>A Letter</h2>

                    <p>
                        The first little gift.
                        A letter written especially for you.
                    </p>
                </div>

                <div class="line"></div>

                <!-- 2025 -->
                <div class="year-card" id="year2025">
                    <div class="year-number">2025</div>
                    <div class="year-icon">🧸</div>

                    <h2>A Teddy Bear</h2>

                    <p>
                        A little teddy bear for your birthday.
                    </p>
                </div>

                <div class="line"></div>

                <!-- 2026 -->
                <div class="year-card" id="year2026">
                    <div class="year-number">2026</div>
                    <div class="year-icon">🧸✨</div>

                    <h2>A Cute Doll</h2>

                    <p>
                        Another little gift,
                        another birthday to remember.
                    </p>
                </div>

            </div>

            <!-- Popup area -->
            <div class="memory-popup" id="memoryPopup">

                <button class="close-memory" id="closeMemory">
                    ×
                </button>

                <div id="memoryContent"></div>

            </div>

            <button id="messageButton">
                There's a message for you 💌
            </button>

        </section>
    `;

    const year2024 = document.getElementById("year2024");
    const year2025 = document.getElementById("year2025");
    const year2026 = document.getElementById("year2026");

    year2024.addEventListener("click", () => {
        showMemory("2024");
    });

    year2025.addEventListener("click", () => {
        showMemory("2025");
    });

    year2026.addEventListener("click", () => {
        showMemory("2026");
    });

    document
        .getElementById("closeMemory")
        .addEventListener("click", closeMemory);

    document
        .getElementById("messageButton")
        .addEventListener("click", showMessage);
}
function showMemory(year) {
    const popup = document.getElementById("memoryPopup");
    const content = document.getElementById("memoryContent");

    if (!popup || !content) return;

    if (year === "2024") {
        content.innerHTML = `
            <div class="memory-year">2024</div>
            <div class="memory-icon">💌</div>
            <h2>A Letter</h2>
            <p>The first little gift I gave you.</p>
            <p>Some memories don't need to be repeated to remain special. ✨</p>
        `;
    }

    if (year === "2025") {
        content.innerHTML = `
            <div class="memory-year">2025</div>
            <h2>A Teddy Bear 🧸</h2>

            <img
                src="./teddy-2025.jpg"
                class="memory-image"
                alt="2025 Teddy Bear"
            >

            <p>A little teddy bear from 2025. ❤️</p>
        `;
    }

    if (year === "2026") {
        content.innerHTML = `
            <div class="memory-year">2026</div>
            <h2>A Cute Doll 🧸✨</h2>

            <img
                src="./doll-2026.jpg"
                class="memory-image"
                alt="2026 Cute Doll"
            >

            <p>A cute little gift for 2026. ✨</p>
        `;
    }

    popup.classList.add("show");
}


function closeMemory() {

    const popup = document.getElementById("memoryPopup");

    popup.classList.remove("show");
}


/* =========================================
   5. LETTER SCREEN
========================================= */

function showMessage() {
    document.body.innerHTML = `
        <section class="letter-page">

            <div class="letter-container">

                <p class="small-text">
                    Something I wanted to say...
                </p>

                <h1>For You 💌</h1>

                <div class="letter-box">
                    <p id="letterText"></p>
                </div>

                <button id="surpriseButton" class="hidden">
                    One Last Surprise 🎁
                </button>

            </div>

        </section>
    `;

    letterIndex = 0;
    typeLetter();
}

/* =========================================
   6. LETTER CONTENT
========================================= */

const letter = `

Happy Birthday Gorilla ❤️

I wanted to make something different for you this year.
Every year I've found myself wishing that your day would be a little happier, a little brighter, and filled with lot of joys and moments worth remembering.

I don't know what the future will bring, and I don't want this little surprise to ask anything from you.

I simply wanted to give you a reason to smile today.

You are someone I care about deeply, and I genuinely hope life gives you beautiful things, good people, peaceful moments, and countless reasons to be happy.

So today, forget everything else for a moment...

Just enjoy your day.

Happy Birthday once again. ✨

`;


/* =========================================
   7. TYPEWRITER EFFECT
========================================= */

let letterIndex = 0;


function typeLetter() {

    const letterText =
        document.getElementById("letterText");

    if (!letterText) return;


    if (letterIndex < letter.length) {

        letterText.innerHTML +=
            letter.charAt(letterIndex);

        letterIndex++;

        setTimeout(
            typeLetter,
            35
        );

    }

    else {

        const surpriseButton =
            document.getElementById(
                "surpriseButton"
            );

        if (surpriseButton) {

            surpriseButton.classList.remove(
                "hidden"
            );

            surpriseButton.addEventListener(
                "click",
                showFinalSurprise
            );

        }

    }

}


/* =========================================
   8. FINAL SURPRISE
========================================= */

function showFinalSurprise() {

    document.body.innerHTML = `

        <section class="final-page">

            <div class="final-content">

                <p class="final-small">
                    One last little surprise ✨
                </p>


                <h1>
                    Something for You
                </h1>


                <p class="final-subtitle">
                    There's just one thing left...
                </p>


                <div
                    class="gift"
                    id="gift"
                >

                    <div class="gift-lid"></div>

                    <div class="gift-box"></div>

                </div>


                <p class="tap-text">
                    Tap the gift 🎁
                </p>


                <div
                    class="final-message"
                    id="finalMessage"
                >

                    <h2>
                        Happy Birthday ✨
                    </h2>


                    <p>

                        No big promises.
                        No expectations.

                        <br><br>

                        just a little wish joy
                        from me to you.I wish you always be happy and healthy,
                        and that you always have a reason to smile.Buddy🥲
                        <br><br>

                        I hope this year brings you
                        happiness, peaceful moments,
                        beautiful memories,
                        and plenty of reasons to smile.

                        <br><br>

                        Have an amazing birthday. JOY💙

                    </p>

                </div>

            </div>

        </section>

    `;


    const gift =
        document.getElementById("gift");

    const finalMessage =
        document.getElementById("finalMessage");


    gift.addEventListener("click", () => {

        gift.classList.add("open");


        setTimeout(() => {

            finalMessage.classList.add("show");

            createConfetti();

        }, 700);

    });

}


/* =========================================
   9. CONFETTI
========================================= */

function createConfetti() {

    const finalPage =
        document.querySelector(".final-page");

    if (!finalPage) return;


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("confetti");


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        finalPage.appendChild(piece);

    }

}