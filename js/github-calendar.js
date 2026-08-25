(function () {

  const username = 'ChestnutDuck';

  let githubCalendarData = null;


  // ==========================
  // 获取 GitHub 数据
  // ==========================

  function loadGithubData() {

    if (githubCalendarData) {
      return Promise.resolve(
        githubCalendarData
      );
    }

    return fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
    )
      .then(response => {

        if (!response.ok) {

          throw new Error(
            `GitHub 数据获取失败：HTTP ${response.status}`
          );

        }

        return response.json();

      })
      .then(data => {

        githubCalendarData = data;

        return data;

      });

  }


  // ==========================
  // 生成热力图
  // ==========================

  function renderGithubCalendar() {

    const container =
      document.getElementById(
        'github-calendar'
      );

    if (!container) {
      return;
    }


    // 防止 PJAX 重复内容

    container.innerHTML = '';


    loadGithubData()
      .then(data => {

        const contributions =
          data.contributions || [];


        if (!contributions.length) {

          console.error(
            'GitHub Contribution 没有数据'
          );

          return;

        }


        // ==========================
        // 总贡献数
        // ==========================

        const total =
          data.total?.lastYear || 0;


        const summary =
          document.createElement(
            'div'
          );

        summary.className =
          'github-calendar-summary';


        summary.innerHTML = `
          <span class="github-calendar-total">
            ${total.toLocaleString()} contributions
          </span>

          <span class="github-calendar-period">
            in the last year
          </span>
        `;


        container.appendChild(
          summary
        );


        // ==========================
        // 数据映射
        // ==========================

        const contributionMap =
          new Map();


        contributions.forEach(item => {

          contributionMap.set(
            item.date,
            item
          );

        });


        // ==========================
        // 日期范围
        // ==========================

        const firstDate =
          new Date(
            contributions[0].date +
            'T00:00:00'
          );


        const lastDate =
          new Date(
            contributions[
              contributions.length - 1
            ].date +
            'T00:00:00'
          );


        // 调整到周日

        firstDate.setDate(
          firstDate.getDate() -
          firstDate.getDay()
        );


        // 调整到周六

        lastDate.setDate(
          lastDate.getDate() +
          (
            6 -
            lastDate.getDay()
          )
        );


        // ==========================
        // 主体
        // ==========================

        const wrapper =
          document.createElement(
            'div'
          );

        wrapper.className =
          'github-calendar-body';


        // ==========================
        // 星期标签
        // ==========================

        const weekLabels =
          document.createElement(
            'div'
          );

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
            document.createElement(
              'span'
            );

          span.textContent =
            label;

          weekLabels.appendChild(
            span
          );

        });


        wrapper.appendChild(
          weekLabels
        );


        // ==========================
        // 图表区域
        // ==========================

        const chart =
          document.createElement(
            'div'
          );

        chart.className =
          'github-calendar-chart';


        // ==========================
        // 计算周数
        // ==========================

        const totalWeeks =
          Math.floor(
            (
              lastDate -
              firstDate
            ) /
            (
              7 *
              24 *
              60 *
              60 *
              1000
            )
          ) + 1;


        // ==========================
        // 月份
        // ==========================

        const monthRow =
          document.createElement(
            'div'
          );

        monthRow.className =
          'github-calendar-months';


        let previousMonth = '';


        for (
          let i = 0;
          i < totalWeeks;
          i++
        ) {

          const monthDate =
            new Date(firstDate);


          monthDate.setDate(
            monthDate.getDate() +
            i * 7
          );


          const monthKey =
            `${monthDate.getFullYear()}-${monthDate.getMonth()}`;


          const monthCell =
            document.createElement(
              'span'
            );


          monthCell.style.flex =
            '1 1 0';


          monthCell.style.minWidth =
            '0';


          // 只显示新月份

          if (
            i === 0 ||
            monthKey !== previousMonth
          ) {

            monthCell.textContent =
              monthDate.toLocaleString(
                'en-US',
                {
                  month: 'short'
                }
              );


            previousMonth =
              monthKey;

          }


          monthRow.appendChild(
            monthCell
          );

        }


        chart.appendChild(
          monthRow
        );


        // ==========================
        // 热力图网格
        // ==========================

        const calendar =
          document.createElement(
            'div'
          );

        calendar.className =
          'github-calendar-grid';


        // ==========================
        // 日期循环
        // ==========================

        const currentDate =
          new Date(firstDate);


        while (
          currentDate <= lastDate
        ) {

          const week =
            document.createElement(
              'div'
            );

          week.className =
            'github-calendar-week';


          // ==========================
          // 一周七天
          // ==========================

          for (
            let day = 0;
            day < 7;
            day++
          ) {

            const year =
              currentDate.getFullYear();


            const month =
              String(
                currentDate.getMonth() + 1
              ).padStart(2, '0');


            const date =
              String(
                currentDate.getDate()
              ).padStart(2, '0');


            const dateString =
              `${year}-${month}-${date}`;


            const item =
              contributionMap.get(
                dateString
              );


            // ==========================
            // 创建方块
            // ==========================

            const cell =
              document.createElement(
                'span'
              );


            cell.className =
              'github-calendar-cell';


            const level =
              item
                ? item.level
                : 0;


            cell.dataset.level =
              level;


            // ==========================
            // Tooltip 数据
            // ==========================

            const contributionCount =
              item
                ? item.count
                : 0;


            // ==========================
            // 鼠标进入
            // ==========================

            cell.addEventListener(
              'mouseenter',
              function () {

                const tooltip =
                  document.createElement(
                    'div'
                  );


                tooltip.className =
                  'github-calendar-tooltip';


                tooltip.innerHTML = `
                  <strong>
                    ${contributionCount}
                    ${
                      contributionCount === 1
                        ? 'contribution'
                        : 'contributions'
                    }
                  </strong>

                  <span>
                    ${dateString}
                  </span>
                `;


                document.body.appendChild(
                  tooltip
                );


                // ==========================
                // 计算 Tooltip 位置
                // ==========================

                const rect =
                  cell.getBoundingClientRect();


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


                // 防止左侧超出

                if (left < 5) {

                  left = 5;

                }


                // 防止右侧超出

                if (
                  left +
                  tooltipRect.width >
                  window.innerWidth - 5
                ) {

                  left =
                    window.innerWidth -
                    tooltipRect.width -
                    5;

                }


                // 上方空间不足
                // 显示到方块下方

                if (top < 5) {

                  top =
                    rect.bottom + 8;

                }


                tooltip.style.left =
                  `${left}px`;


                tooltip.style.top =
                  `${top}px`;


                cell._githubTooltip =
                  tooltip;

              }
            );


            // ==========================
            // 鼠标离开
            // ==========================

            cell.addEventListener(
              'mouseleave',
              function () {

                if (
                  cell._githubTooltip
                ) {

                  cell._githubTooltip.remove();

                  cell._githubTooltip =
                    null;

                }

              }
            );


            week.appendChild(
              cell
            );


            // 下一天

            currentDate.setDate(
              currentDate.getDate() + 1
            );

          }


          calendar.appendChild(
            week
          );

        }


        chart.appendChild(
          calendar
        );


        wrapper.appendChild(
          chart
        );


        container.appendChild(
          wrapper
        );


        // ==========================
        // 图例
        // ==========================

        const legend =
          document.createElement(
            'div'
          );

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


        container.appendChild(
          legend
        );


        console.log(
          `GitHub Contribution 热力图生成成功，共 ${contributions.length} 天，共 ${totalWeeks} 周`
        );

      })


      .catch(error => {

        console.error(
          'GitHub Contribution 加载失败：',
          error
        );

      });

  }


  // ==========================
  // 首次进入页面
  // ==========================

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      renderGithubCalendar
    );

  } else {

    renderGithubCalendar();

  }


  // ==========================
  // Anzhiyu / PJAX
  // ==========================

  document.addEventListener(
    'pjax:complete',
    function () {

      setTimeout(
        renderGithubCalendar,
        100
      );

    }
  );


  // ==========================
  // 兼容 PJAX
  // ==========================

  document.addEventListener(
    'pjax:end',
    function () {

      setTimeout(
        renderGithubCalendar,
        100
      );

    }
  );


})();