import poster from './poster.png';
const Resume = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}></div>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFyRrLe5M9NSA/company-logo_200_200/0/1521213362299?e=2159024400&v=beta&t=5kieYTEHK1_ipsv-LVV81Uoi79NvGglQ3zgKq3bONbE"
            alt="Poster"
            style={{ borderBlock: '50%', width: '120px', height: '120px', marginRight: '20px' }}
          />
          <div>
            <h4>실전코딩 수강</h4>
            <p>2024.03 ~ 2024.06</p>
            <p>React, SpringBoot 등 다양한 실무 관련 지식 수강</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
          <img
            src="https://www.lgresearch.ai/data/upload/image/blog/2_5fd8fba11.png"
            alt="Poster"
            style={{ borderBlock: '50%', width: '120px', height: '120px', marginRight: '20px' }}
          />
          <div>
            <h4>LG Aimers 4기</h4>
            <p>2024.01 ~ 2024.02</p>
            <p>LG의 실제 MQL 데이터를 사용하여 B2B 영업 활동을 예측하고 최적화하는 모델을 개발했습니다.</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '20px' }}>
          <img src={poster} alt="Poster" style={{ borderBlock: '50%', width: '100px', height: '120px', marginRight: '20px' }} />
          <div>
            <h4>2023 SW/AI Creative Contest 수상</h4>
            <p>2023.03 ~ 2023.06</p>
            <p>언택트 모임이 활성화됨에 따라 비대면 협업을 돕기 위한 프로젝트에서 FE 개발을 담당했습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
