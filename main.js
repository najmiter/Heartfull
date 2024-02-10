fetch("tasbih.json")
    .then((res) => res.json())
    .then((tasbihaat) => {
        const today = new Date();
        const day = today.getDay();

        let counter_count = +localStorage.getItem("counter") ?? 0;
        const target = 100;

        const qalma = document.getElementById("qalma");
        const greeting = document.getElementById("greeting");
        const counter_text = document.getElementById("counter-text");
        const loop = document.getElementById("loop");

        qalma.setAttribute("src", `imgs/${tasbihaat[day].day}.svg`);
        greeting.textContent = `Target: ${target}`;
        counter_text.textContent = counter_count;
        loop.textContent = `Loop: ${localStorage.getItem("loop") ?? 0}`;

        document
            .getElementsByTagName("main")[0]
            .addEventListener("click", set_counter_count);

        function set_counter_count() {
            counter_count++;
            const remaining =
                counter_count % target ? counter_count % target : target;
            counter_text.textContent = remaining;

            if (counter_count % target === 0) set_loop();

            localStorage.setItem("counter", remaining);
        }

        function set_loop() {
            const loop_count = Math.trunc(counter_count / target);
            loop.textContent = `Loop: ${loop_count}`;
            localStorage.setItem("loop", loop_count);
        }
    });
