import React, { useState } from 'react';
import { initialDiaries } from './data/mockData';
import DiaryListPage from './pages/DiaryListPage';

function App() {
    const [diaries, setDiaries] = useState(initialDiaries);
    const [currentScreen, setCurrentScreen] = useState('list');

    return (
        <div style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', paddingBottom: '40px' }}>
            {currentScreen === 'list' && (
                <DiaryListPage
                diaries={diaries}
                onNavigateToEdit={() => setCurrentScreen('edit')}
                />
            )}

            {currentScreen === 'edit' && (
            <div style={{ textAlign: 'center', padding: '50px' }}>
             <h2>✏️ 일기 쓰기 화면 준비 중...</h2>
             <button 
             onClick={() => setCurrentScreen('list')}
             style={{ padding: '8px 16px', marginTop: '20px', cursor: 'pointer' }}
          >
            돌아가기
          </button>
          </div>
          )}
        </div>
    );
}
export default App;