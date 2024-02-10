fetch("tasbih.json")
    .then((res) => res.json())
    .then((tasbihaat) => {
        const today = new Date();
        const day = today.getDay();

        let counter_count = 0;
        const target = 100;

        const qalma = document.getElementById("qalma");
        const greeting = document.getElementById("greeting");
        const counter = document.getElementById("counter");
        const counter_text = document.getElementById("counter-text");
        const loop = document.getElementById("loop");

        qalma.setAttribute("src", `imgs/${tasbihaat[day].day}.svg`);
        greeting.textContent = `Target: ${target}`;
        counter_text.textContent = counter_count;

        counter.addEventListener("click", set_counter_count);

        function set_counter_count() {
            counter_count++;
            const remaining = counter_count % (target + 1);
            counter_text.textContent = remaining;
            // greeting.textContent = `Target: ${target - remaining}`;

            if (counter_count % target === 0) set_loop();
        }

        function set_loop() {
            loop.textContent = `Loop: ${Math.trunc(counter_count / target)}`;
        }
    });
