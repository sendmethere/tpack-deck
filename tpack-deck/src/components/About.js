const About = () => {
    return (
        <div className="w-full h-full p-10 justify-center items-center">
            <h1 className="text-2xl font-bold">TPACK이란?</h1>
            <hr className="my-2"/>
            <p className="my-4">교수자는 ‘내용 지식’ 및 ‘교수법 지식'과 함께 ‘테크놀로지에 대한 지식'을 통합적으로 가지고 있어야 함</p>
            <p className="my-4">구체적인 수업 맥락에서 테크놀로지에 대한 지식이 내용 및 교수법에 대한 지식과 잘 통합될 때 테크놀로지 활용 수업이 효과적으로 이루어질 수 있음</p>
            <section className="my-8">
                <ul className="text-lg font-bold">내용 지식(Content Knowledge, CK)</ul>
                <li>핵심 개념, 원리, 이론 등 특정 교과 내용에 대한 지식</li>
            </section>
            <section className="my-8">
                <ul className="text-lg font-bold">교수법 지식(Pedagogical Knowledge, PK)</ul>
                <li>교육의 목적, 가치, 목표 등을 포함하는 전반적인 교수∙학습 방법 및 전략에 관한 지식</li>
            </section>
            <section className="my-8">
                <ul className="text-lg font-bold">테크놀로지에 대한 지식(Technological Knowledge, TK)</ul>
                <li>효과적인 교수∙학습을 지원하기 위해 다양한 테크놀로지를 선정하고 활용할 수 있는 지식</li>
            </section>
            <h1 className="text-2xl font-bold">TPACK DECK 사용법</h1>
            <hr className="my-2"/>
            <section className="my-2 p-4">
                <p className="font-bold my-2">1. ‘Content 입력’ 버튼을 클릭해 Content 카드 4장에 학습하고자 하는 단원 또는 차시의 학습주제를 기록합니다.</p>
                <p className="font-bold my-2">2. 소그룹이 공유할 ‘학급 상황’을 설정합니다(임의로 지정하거나, 원하는 상황을 선택합니다).</p>
                <p className="font-bold my-2">3. ‘랜덤 뽑기' 버튼을 클릭해 무작위로 ‘선택된 카드들’을 확인합니다.</p>
                <p className="font-bold my-2">4. 뽑힌 카드를 구글 시트(또는 패들렛)에 기록하고 ‘학급 상황’을 기준으로 뽑힌 3개의 카드 내용을 모두 포함해서 수업을 구상합니다.</p>
                <p className="font-bold my-2">5. 순서대로 돌아가며 자신이 구상한 수업을 발표합니다.</p>
                <p className="font-bold my-2">6. 발표한 내용에 대해 서로 피드백을 줍니다.</p>
            </section>
            <section className="py-4">
                <p className="text-gray-600">💻 만든이 : <a className="underline" href="https://slashpage.com/taesangeom/5r398nmngr1wz2vwje7y?e=1">엄태상</a>(sendmethere@naver.com)</p>
            </section>
        </div>
    )
}

export default About;