document.addEventListener('DOMContentLoaded', (event) => {

    const attendance_button = document.getElementById("attendance");
    const leaving_time_button = document.getElementById("leaving");
    const attendance_time = document.getElementById("attendance_time");
    const leaving_time = document.getElementById("leaving_time");

    const log = document.getElementById("log");

    attendance_button.addEventListener('click', function () {
        let get_attendance_time = document.getElementById("clock");
        if (!attendance_time.innerHTML) {
            attendance_time.innerHTML = get_attendance_time.innerHTML;
            addHistory();
        }
    });

    leaving_time_button.addEventListener('click', function () {
        let get_leaving_time = document.getElementById("clock");
        if (!(leaving_time.innerHTML) && attendance_time.innerHTML) {
            leaving_time.innerHTML = get_leaving_time.innerHTML;
        }

    });

    function addHistory() {
        // <dd>
        //     <dl class="flex">
        //         <dt>10月7日(月曜日)</dt>
        //         <dd>17:30</dd>
        //         <dd>退勤</dd>
        //     </dl>
        // </dd>

        // 新しい要素を作成
        const newElement = document.createElement('dd');
        // newElement.textContent = '<dl class="flex">';
        // newElement.textContent = '<dl>';

        // 既存の要素を取得
        const parentElement = document.getElementById('punch_history');

        // 既存の最初の子要素を取得
        const firstChild = parentElement.querySelectorAll("dt");

        // log.innerHTML = newElement;
        console.log(parentElement);
        console.log(firstChild);


        const newElement_dl = document.createElement('dl');
        newElement_dl.classList.add('flex');

        let get_attendance_date = document.getElementById("date");

        const parts = get_attendance_date.innerHTML.split("年");

        const newElement_dt = document.createElement('dt');
        newElement_dt.innerHTML = parts[1];

        const attendance_or_leaving = "出勤";

        const newElement_dl_dd_01 = document.createElement('dd');

        const timeString = attendance_time.innerHTML;
        const timeArray = timeString.split(':');
        const hours = timeArray[0];
        const minutes = timeArray[1];
        const formattedTime = `${hours}:${minutes}`;

        newElement_dl_dd_01.innerHTML = formattedTime;

        const newElement_dl_dd_02 = document.createElement('dd');
        newElement_dl_dd_02.innerHTML = attendance_or_leaving;

        // 既存の要素の前に新しい要素を挿入
        parentElement.insertBefore(newElement, firstChild[0].nextSibling);
        newElement.append(newElement_dl);
        newElement_dl.append(newElement_dt);
        newElement_dl.append(newElement_dl_dd_01);
        newElement_dl.append(newElement_dl_dd_02);
        // existingElement.parentNode.insertBefore(newElement, existingElement);
    }

    function showDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][today.getDay()];
        const formattedDate = `${year}年${month}月${date}日(${dayOfWeek}曜日)`;
        document.getElementById('date').textContent = formattedDate;
    }

    showDate();
    // setInterval(showDate, 1000);

    function showTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    setInterval(showTime, 1000); // 1秒ごとに更新

});