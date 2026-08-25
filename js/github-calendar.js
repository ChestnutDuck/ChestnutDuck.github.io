(function () {
  const username = 'ChestnutDuck';
  const container = document.getElementById('github-calendar');

  if (!container) {
    console.error('GitHub Contribution 容器不存在');
    return;
  }

  fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`GitHub 数据获取失败：HTTP ${response.status}`);
      }

      return response.json();
    })
    .then(data => {

      const contributions = data.contributions || [];

      if (!contributions.length) {
        console.error('GitHub Contribution 没有数据');
        return;
      }

      container.innerHTML = '';

      /* ==========================
         总贡献数
         ========================== */

      const total = data.total?.lastYear || 0;

      const summary = document.createElement('div');

      summary.className = 'github-calendar-summary';

      summary.innerHTML = `
        <span class="github-calendar-total">
          ${total.toLocaleString()} contributions
        </span>

        <span class="github-calendar-period">
          in the last year
        </span>
      `;

      container.appendChild(summary);

      /* ==========================
         数据 Map
         ========================== */

      const contributionMap = new Map();

      contributions.forEach(item => {
        contributionMap.set(item.date, item);
      });

      /* ==========================
         日期范围
         ========================== */

      const firstDate = new Date(
        contributions[0].date + 'T00:00:00'
      );

      const lastDate = new Date(
        contributions[contributions.length - 1].date + 'T00:00:00'
      );

      /*
       * 开始日期调整到周日
       */
      firstDate.setDate(
        firstDate.getDate() - firstDate.getDay()
      );

      /*
       * 结束日期调整到周六
       */
      lastDate.setDate(
        lastDate.getDate() +
        (6 - lastDate.getDay())
      );

      /* ==========================
         总周数
         ========================== */

      const totalDays =
        Math.round(
          (lastDate - firstDate) /
          (24 * 60 * 60 * 1000)
        ) + 1;

      const totalWeeks =
        Math.ceil(totalDays / 7);

      /* ==========================
         外层
         ========================== */

      const wrapper =
        document.createElement('div');

      wrapper.className =
        'github-calendar-wrapper';

      /* ==========================
         主体
         ========================== */

      const body =
        document.createElement('div');

      body.className =
        'github-calendar-body';

      /* ==========================
         星期标签
         ========================== */

      const weekLabels =
        document.createElement('div');

      weekLabels.className =
        'github-calendar-weekdays';

      const labels = [
        '',
        'Mon',
        '',
        'Wed',
        '',
        'Fri',
        ''
      ];

      labels.forEach(label => {

        const span =
          document.createElement('span');

        span.textContent = label;

        weekLabels.appendChild(span);
      });

      body.appendChild(weekLabels);

      /* ==========================
         图表区域
         ========================== */

      const chart =
        document.createElement('div');

      chart.className =
        'github-calendar-chart';

      /* ==========================
         生成所有周
         ========================== */

      const weeks = [];

      for (
        let i = 0;
        i < totalWeeks;
        i++
      ) {

        const weekStart =
          new Date(firstDate);

        weekStart.setDate(
          firstDate.getDate() +
          i * 7
        );

        weeks.push(weekStart);
      }

      /* ==========================
         月份标签
         ========================== */

      const monthRow =
        document.createElement('div');

      monthRow.className =
        'github-calendar-months';

      /*
       * 先创建与周列数量完全一致的月份格子
       *
       * 这样月份和下面的热力图
       * 可以做到 1:1 对齐。
       */

      weeks.forEach((weekStart, index) => {

        const monthCell =
          document.createElement('span');

        monthCell.style.flex =
          '1 1 0';

        monthCell.style.minWidth =
          '0';

        /*
         * 当前周所在月份
         */
        const month =
          weekStart.getMonth();

        const day =
          weekStart.getDate();

        /*
         * 判断是否显示月份
         *
         * GitHub 风格：
         * 当这一周进入新的月份，
         * 在对应周列上显示月份。
         */

        const previousWeek =
          index > 0
            ? weeks[index - 1]
            : null;

        const previousMonth =
          previousWeek
            ? previousWeek.getMonth()
            : null;

        const previousYear =
          previousWeek
            ? previousWeek.getFullYear()
            : null;

        const currentYear =
          weekStart.getFullYear();

        const isNewMonth =
          index === 0 ||
          month !== previousMonth ||
          currentYear !== previousYear;

        if (isNewMonth) {

          monthCell.textContent =
            weekStart.toLocaleString(
              'en-US',
              {
                month: 'short'
              }
            );
        }

        monthRow.appendChild(monthCell);
      });

      chart.appendChild(monthRow);

      /* ==========================
         热力图
         ========================== */

      const calendar =
        document.createElement('div');

      calendar.className =
        'github-calendar-grid';

      /* ==========================
         每一周
         ========================== */

      weeks.forEach(weekStart => {

        const week =
          document.createElement('div');

        week.className =
          'github-calendar-week';

        /* ==========================
           一周七天
           ========================== */

        for (
          let day = 0;
          day < 7;
          day++
        ) {

          const cellDate =
            new Date(weekStart);

          cellDate.setDate(
            weekStart.getDate() +
            day
          );

          /* ==========================
             日期
             ========================== */

          const year =
            cellDate.getFullYear();

          const month =
            String(
              cellDate.getMonth() + 1
            ).padStart(2, '0');

          const date =
            String(
              cellDate.getDate()
            ).padStart(2, '0');

          const dateString =
            `${year}-${month}-${date}`;

          /* ==========================
             获取数据
             ========================== */

          const item =
            contributionMap.get(dateString);

          /* ==========================
             方块
             ========================== */

          const cell =
            document.createElement('span');

          cell.className =
            'github-calendar-cell';

          if (item) {

            cell.dataset.level =
              item.level;

            cell.dataset.count =
              item.count;

          } else {

            cell.dataset.level =
              '0';

            cell.dataset.count =
              '0';
          }

          cell.dataset.date =
            dateString;

          week.appendChild(cell);
        }

        calendar.appendChild(week);
      });

      chart.appendChild(calendar);

      body.appendChild(chart);

      wrapper.appendChild(body);

      container.appendChild(wrapper);

      /* ==========================
         图例
         ========================== */

      const legend =
        document.createElement('div');

      legend.className =
        'github-calendar-legend';

      legend.innerHTML = `
        <span>Less</span>

        <i data-level="0"></i>
        <i data-level="1"></i>
        <i data-level="2"></i>
        <i data-level="3"></i>
        <i data-level="4"></i>

        <span>More</span>
      `;

      container.appendChild(legend);

      /* ==========================
         Tooltip
         ========================== */

      const tooltip =
        document.createElement('div');

      tooltip.className =
        'github-calendar-tooltip';

      tooltip.style.display =
        'none';

      document.body.appendChild(
        tooltip
      );

      const cells =
        container.querySelectorAll(
          '.github-calendar-cell'
        );

      cells.forEach(cell => {

        cell.addEventListener(
          'mouseenter',
          function () {

            const date =
              this.dataset.date;

            const count =
              this.dataset.count;

            tooltip.innerHTML = `
              <strong>
                ${count} contributions
              </strong>

              <span>
                ${date}
              </span>
            `;

            tooltip.style.display =
              'flex';

            const rect =
              this.getBoundingClientRect();

            const tooltipRect =
              tooltip.getBoundingClientRect();

            let left =
              rect.left +
              rect.width / 2 -
              tooltipRect.width / 2;

            let top =
              rect.top -
              tooltipRect.height -
              8;

            if (left < 8) {
              left = 8;
            }

            if (
              left +
              tooltipRect.width >
              window.innerWidth - 8
            ) {

              left =
                window.innerWidth -
                tooltipRect.width -
                8;
            }

            if (top < 8) {

              top =
                rect.bottom + 8;
            }

            tooltip.style.left =
              `${left}px`;

            tooltip.style.top =
              `${top}px`;
          }
        );

        cell.addEventListener(
          'mouseleave',
          function () {

            tooltip.style.display =
              'none';
          }
        );
      });

      console.log(
        'GitHub Contribution 热力图生成成功'
      );

      console.log(
        `贡献天数：${contributions.length}`
      );

      console.log(
        `总周数：${totalWeeks}`
      );

      console.log(
        `过去一年贡献：${total}`
      );
    })
    .catch(error => {

      console.error(
        'GitHub Contribution 加载失败：',
        error
      );

    });

})();