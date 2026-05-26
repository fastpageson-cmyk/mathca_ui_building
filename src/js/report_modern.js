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
        let badgeBg = 'rgba(91,140,90,0.1)'; // Matcha light green
        let badgeColor = '#5B8C5A'; // Matcha green
        
        if (item.type === 'both_5') {
          badgeText = '🎯 공통점';
        } else if (item.type === 'greeting') {
          badgeText = '💡 첫인사 팁';
          badgeBg = 'rgba(198,122,82,0.1)'; // Soft warm color from index.html
          badgeColor = '#c67a52'; 
        } else if (item.type === 'synergy') {
          badgeText = '✨ 시너지';
          badgeBg = 'rgba(123,97,196,0.1)'; // Soft purple from index.html
          badgeColor = '#7B61C4';
        }
        
        let messageText = item.message.replace(/"/g, '').replace(/\n/g, '<br/>');
        messageText = messageText.replace(/^(💡 첫인사 팁: |✨ 시너지 포인트: |✨ 시너지 포인트:\s*<br\/>)/, '');

        html += `
          <div class="match-card">
            <span class="match-card-badge" style="background:${badgeBg}; color:${badgeColor}">
              ${badgeText}
            </span>
            <p class="match-card-question">
              <strong>${item.question_id}.</strong> ${item.question}
            </p>
            <p class="match-card-message">
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
