document.addEventListener("DOMContentLoaded", () => {
  // 버전 컨트롤 로직
  const btnV1 = document.getElementById('btn-v1');
  const btnV2 = document.getElementById('btn-v2');
  const btnV3 = document.getElementById('btn-v3');
  const btnV4 = document.getElementById('btn-v4');
  const sectionSummary = document.getElementById('section-summary');
  const sectionAnalysis = document.getElementById('section-analysis');

  function updateActiveButton(activeBtn) {
    if(!btnV1) return;
    [btnV1, btnV2, btnV3, btnV4].forEach(btn => {
      btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
  }

  if (btnV1) {
    btnV1.addEventListener('click', () => {
      sectionSummary.style.display = 'block';
      sectionAnalysis.style.display = 'block';
      updateActiveButton(btnV1);
    });

    btnV2.addEventListener('click', () => {
      sectionSummary.style.display = 'none';
      sectionAnalysis.style.display = 'block';
      updateActiveButton(btnV2);
    });

    btnV3.addEventListener('click', () => {
      sectionSummary.style.display = 'block';
      sectionAnalysis.style.display = 'none';
      updateActiveButton(btnV3);
    });

    btnV4.addEventListener('click', () => {
      sectionSummary.style.display = 'none';
      sectionAnalysis.style.display = 'none';
      updateActiveButton(btnV4);
    });
  }

  // 동적 멘트 렌더링 로직
  const container = document.getElementById('report-container');
  if (!container) return;

  fetch('src/data/match_messages.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      let html = '';
      data.forEach(item => {
        let badgeText = '';
        let badgeBg = '#edf5ed'; // Matcha light green
        let badgeColor = '#2d5a2d'; // Matcha green
        
        // 타입별 배지 텍스트와 은은한 파스텔톤 컬러 매핑 (번잡하지 않게 아주 옅은 톤 사용)
        if (item.type === 'both_5') {
          badgeText = '🎯 공통점';
        } else if (item.type === 'greeting') {
          badgeText = '💡 첫인사 팁';
          badgeBg = '#fff8e6'; // Very soft yellow
          badgeColor = '#b37700'; // Dark warm yellow
        } else if (item.type === 'synergy') {
          badgeText = '✨ 시너지';
          badgeBg = '#f4f0fa'; // Very soft purple
          badgeColor = '#6b4c9a'; // Muted purple
        }
        
        // 불필요한 큰따옴표가 들어있다면 제거하고 개행 처리
        let messageText = item.message.replace(/"/g, '').replace(/\n/g, '<br/>');
        // 기존 멘트에 포함된 '💡 첫인사 팁: ', '✨ 시너지 포인트: ' 등의 접두사 텍스트를 정돈하여 배지와 중복되지 않게 처리
        messageText = messageText.replace(/^(💡 첫인사 팁: |✨ 시너지 포인트: |✨ 시너지 포인트:\s*<br\/>)/, '');

        // 미니멀한 좌측 보더 라인 디자인으로 시각적 묶음 처리 (박스가 많아지는 답답함 해소)
        html += `
          <div style="margin-bottom: 28px; padding-left: 14px; border-left: 3px solid ${badgeBg};">
            <div style="margin-bottom: 8px;">
              <span style="display:inline-block; font-size:11px; font-weight:600; color:${badgeColor}; background-color:${badgeBg}; padding:4px 8px; border-radius:4px; letter-spacing:-0.2px;">
                ${badgeText}
              </span>
            </div>
            <p style="margin:0 0 8px; font-size:13px; color:#888; line-height:1.5;">
              <strong style="color:#aaa; font-weight:500;">${item.question_id}.</strong> ${item.question}
            </p>
            <p style="margin:0; font-size:14px; color:#222; line-height:1.6; letter-spacing:-0.3px; word-break:keep-all;">
              ${messageText}
            </p>
          </div>
        `;
      });
      
      container.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading the messages:', error);
      container.innerHTML = '<p style="color:red; font-size:13px; text-align:center;">메시지 데이터를 불러오는 데 실패했습니다.<br>로컬 서버가 실행 중인지 확인해주세요.</p>';
    });
});
