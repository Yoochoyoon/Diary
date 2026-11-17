import React from "react"; // 리엑트 라이브러리를 이 파일 안에서 사용할거임.

function DiaryListPage({ diaries, onNavigateToEdit }) {
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', 
        fontFamily: 'sans-serif'}}>
            {/*상단헤더*/}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
                <h1 style={{ margin: 0, fontSize: '24px' }}>나의 그림일기</h1>
                    <button onClick={onNavigateToEdit}
                    style={{ padding: '10px 16px', backgroundColor: '#ff7b54', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                    + 일기쓰기
                    </button>
            </header>
            {/*일기 목록 (블로그 피드 형태)*/}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {diaries.map((diary) => (
                    <article key={diary.id}
                    style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <h2 style={{ fontSize: '18px', margin: '8px 0' }}>{diary.title}</h2>
                    {/* 그림이 들어갈 공간 */}
                    <div style={{ width: '100%', height: '200px', backgroundColor: '#f9f9f9', border: '1px dashed #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '12px 0', borderRadius: '8px', color: '#aaa' }}>
                    그림 영역 (Canvas)
                    </div>
                    <p style={{ fontSize: '14px', color: '#441', lineHeight: '1.5' }}>{diary.content}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default DiaryListPage;