fetch("./tasbih.json")
    .then((res) => res.json())
    .then((tasbihaat) => {
        const today = new Date();
        const day = today.getDay();
        const today_date = today.toLocaleDateString();
        const day_name = tasbihaat[day].day;

        const old = localStorage.getItem("today");
        if (old !== today_date) {
            localStorage.setItem("today", today_date);
            localStorage.setItem("counter", "0");
        }

        let counter_count =
            old && old !== today_date
                ? 0
                : +localStorage.getItem("counter") ?? 0;

        const target = 100;

        const qalma = document.getElementById("qalma");
        const greeting = document.getElementById("greeting");
        const counter_text = document.getElementById("counter-text");
        const loop = document.getElementById("loop");

        qalma.setAttribute("src", `imgs/${day_name}.svg`);
        greeting.textContent = `Target: ${target}`;
        counter_text.textContent = counter_count;
        loop.textContent = `Loop: ${localStorage.getItem("loop") ?? 0}`;

        document
            .getElementsByTagName("main")[0]
            .addEventListener("click", handle_click);

        function handle_click() {
            set_counter_count();

            if (counter_count % target === 0) set_loop();
        }

        function set_counter_count() {
            counter_count++;
            const remaining =
                counter_count % target ? counter_count % target : target;
            counter_text.textContent = remaining;

            localStorage.setItem("counter", remaining);
        }

        function set_loop() {
            const loop_count =
                (+localStorage.getItem("loop") ?? 0) +
                (counter_count > 0 ? 1 : 0);
            loop.textContent = `Loop: ${loop_count}`;
            localStorage.setItem("loop", loop_count);
        }
    });
